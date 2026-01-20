const XLSX = require('xlsx');
const fs = require('fs');
const path = require('path');

const workbook = XLSX.readFile('PROFIT AND HISAB FILE - 2025.xlsx');
const monthlySheets = workbook.SheetNames.filter(name =>
    name.includes('-2025') && !name.toLowerCase().includes('payout') && !name.toLowerCase().includes('profit')
);

const results = {
    clients: {},
    brokers: ['ava', 'jkv', 'mex', 'daman', 'briker'],
    globalStats: {
        totalInvestment: 0,
        totalNetProfit: 0,
        winningMonths: 0,
        totalMonths: 0,
        monthlyGrowth: []
    }
};

const monthlyAggregates = {};
const months = ['FEB', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUG', 'SEPT', 'OCT', 'NOV', 'DEC'];

// Helper to clean broker names
function cleanBroker(name) {
    const b = String(name || '').toLowerCase().trim();
    if (b.startsWith('mex')) return 'mex';
    if (b.startsWith('jkv')) return 'jkv';
    if (b.startsWith('ava')) return 'ava';
    if (b.startsWith('daman')) return 'daman';
    if (b.startsWith('briker')) return 'briker';
    return b;
}

// 1. Process Monthly Client Data
monthlySheets.forEach(sheetName => {
    const worksheet = workbook.Sheets[sheetName];
    if (!worksheet) return;
    const rawData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
    const monthKey = sheetName.split('-')[0].toUpperCase();

    if (!monthlyAggregates[monthKey]) {
        monthlyAggregates[monthKey] = { investment: 0, profit: 0 };
    }

    rawData.forEach((row, index) => {
        if (index < 3 || !row[0]) return;

        let name = String(row[0]).trim();
        if (name.toLowerCase() === 'user' || name.length < 2) return;

        const brokerOriginal = String(row[1] || '');
        const broker = cleanBroker(brokerOriginal);
        if (!broker) return;

        const investment = Number(row[2]) || 0;
        const profit = Number(row[3]) || 0; // Col D is Profit.

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

        monthlyAggregates[monthKey].profit += profit;
    });
});

// 2. Finalize Global Stats 
results.globalStats.totalInvestment = Object.values(results.clients).reduce((sum, client) => sum + client.totalInvestment, 0);

let cumulativeAlpha = 100;
months.forEach(m => {
    const data = monthlyAggregates[m];
    if (data) {
        results.globalStats.totalNetProfit += data.profit;
        if (data.profit > 0) results.globalStats.winningMonths++;
        results.globalStats.totalMonths++;

        const monthlyROI = results.globalStats.totalInvestment > 0 ? (data.profit / results.globalStats.totalInvestment) * 100 : 0;
        cumulativeAlpha += monthlyROI;

        results.globalStats.monthlyGrowth.push({
            month: m,
            growth: monthlyROI.toFixed(2),
            cumulative: cumulativeAlpha.toFixed(2)
        });
    }
});

fs.writeFileSync(
    path.join(__dirname, 'src/lib/performance-data.json'),
    JSON.stringify(results, null, 2)
);

console.log('Final performance sync completed with broker mapping and client fund aggregation.');
