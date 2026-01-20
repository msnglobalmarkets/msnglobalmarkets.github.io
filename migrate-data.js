const XLSX = require('xlsx');
const fs = require('fs');
const path = require('path');

const workbook = XLSX.readFile('PROFIT AND HISAB FILE - 2025.xlsx');
const monthlySheets = workbook.SheetNames.filter(name =>
    name.includes('-2025') && !name.toLowerCase().includes('payout') && !name.toLowerCase().includes('profit')
);

// Results grouped by client
const results = {
    clients: {},
    brokers: ['ava', 'jkv', 'mex', 'daman'],
    globalStats: {
        totalInvestment: 0,
        totalNetProfit: 0,
        winningMonths: 0,
        totalMonths: 0,
        monthlyGrowth: []
    }
};

// 1. Parse Monthly Client Data
monthlySheets.forEach(sheetName => {
    const worksheet = workbook.Sheets[sheetName];
    if (!worksheet) return;
    const rawData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
    const monthKey = sheetName.split('-')[0].toUpperCase();

    rawData.forEach((row, index) => {
        if (index < 3 || !row[0]) return;

        let name = String(row[0]).trim();
        if (name.toLowerCase() === 'user' || name.length < 2) return;

        const broker = String(row[1] || '').trim().toLowerCase();
        if (!broker) return;

        const investment = Number(row[2]) || 0;
        const profit = Number(row[3]) || 0; // Col D as Profit
        // We use Col D as the indicator of profit made for that account

        const clientKey = name.toLowerCase();
        if (!results.clients[clientKey]) {
            results.clients[clientKey] = {
                displayName: name,
                totalInvestment: 0,
                monthlyData: {}
            };
        }
        if (!results.clients[clientKey].monthlyData[monthKey]) {
            results.clients[clientKey].monthlyData[monthKey] = {};
        }
        results.clients[clientKey].monthlyData[monthKey][broker] = (results.clients[clientKey].monthlyData[monthKey][broker] || 0) + profit;
        results.clients[clientKey].totalInvestment = Math.max(results.clients[clientKey].totalInvestment, investment);
    });
});

// 2. Parse Global Performance from dedicated "Profit-2025" sheet
const profitSheet = workbook.Sheets['Profit-2025'];
if (profitSheet) {
    const profitData = XLSX.utils.sheet_to_json(profitSheet);
    let cumulativeAlpha = 100;

    profitData.forEach(row => {
        const month = row.Month;
        if (!month || month === 'Jan') return; // Skip Jan if 0

        const inv = Number(row.Investment) || 0;
        const p = Number(row.Profit) || 0;

        if (inv > 0) {
            results.globalStats.totalInvestment = Math.max(results.globalStats.totalInvestment, inv);
            results.globalStats.totalNetProfit += p;
            if (p > 0) results.globalStats.winningMonths++;
            results.globalStats.totalMonths++;

            const growth = (p / inv) * 100;
            cumulativeAlpha += growth;
            results.globalStats.monthlyGrowth.push({
                month: month.toUpperCase(),
                growth: growth.toFixed(2),
                cumulative: cumulativeAlpha.toFixed(2)
            });
        }
    });
    // Override total investment with total of all clients for accuracy
    results.globalStats.totalInvestment = Object.values(results.clients).reduce((s, c) => s + c.totalInvestment, 0);
}

fs.writeFileSync(
    path.join(__dirname, 'src/lib/performance-data.json'),
    JSON.stringify(results, null, 2)
);

console.log('Performance database successfully synchronized with Excel audit master.');
