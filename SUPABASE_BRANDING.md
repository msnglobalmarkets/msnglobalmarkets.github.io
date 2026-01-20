# MSN Global Markets - Supabase Branding Guide

To ensure a seamless premium experience, please configure your Supabase Authentication settings as follows:

## 1. Project Logo & Colors

- **Company Name**: MSN Global Markets
- **Website URL**: <https://msnglobalmarkets.github.io>
- **Logo URL**: <https://msnglobalmarkets.github.io/logo.png>

## 2. Email Templates

Navigate to **Authentication > Email Templates** in your Supabase Dashboard.

### Invite User / Confirmation Email

**Subject**: `Welcome to the Institutional Desk | MSN Global Markets`
**Body (HTML)**:

```html
<div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background: #020617; color: #ffffff; padding: 40px; border-radius: 20px;">
  <img src="https://msnglobalmarkets.github.io/logo.png" width="80" style="margin-bottom: 20px;">
  <h1 style="color: #d4af37; font-size: 24px;">Confirm Your Institutional Access</h1>
  <p>Hello,</p>
  <p>Your access to the MSN Global Markets Client Dashboard is ready. Please confirm your email to view your portfolio and performance audits.</p>
  <div style="margin: 30px 0;">
    <a href="{{ .ConfirmationURL }}" style="background: #d4af37; color: #020617; padding: 14px 28px; text-decoration: none; font-weight: bold; border-radius: 8px;">Confirm Identity</a>
  </div>
  <p style="font-size: 12px; color: #64748b;">This link expires in 24 hours. If you did not request this, please ignore this email.</p>
  <hr style="border: 0; border-top: 1px solid #1e293b; margin: 30px 0;">
  <p style="font-size: 10px; color: #64748b;">Dubai, UAE | Algorithmic Wealth Management</p>
</div>
```

### Magic Link / OTP

**Subject**: `Security Token for MSN Dashboard`
**Body (HTML)**:

```html
<div style="font-family: sans-serif; text-align: center; background: #020617; color: #ffffff; padding: 40px;">
  <h2 style="color: #d4af37;">Your Security Code</h2>
  <div style="font-size: 32px; font-weight: bold; letter-spacing: 5px; margin: 20px 0;">{{ .Token }}</div>
  <p>Use this code to securely access your portfolio snapshot.</p>
</div>
```

## 3. Site URL & Redirects

Navigate to **Authentication > URL Configuration**.

- **Site URL**: `https://msnglobalmarkets.github.io`
- **Redirect URLs**:
  - `https://msnglobalmarkets.github.io/dashboard`
  - `https://msnglobalmarkets.github.io/login`
  - `http://localhost:3000/dashboard` (for development)
