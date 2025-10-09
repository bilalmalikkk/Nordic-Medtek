# Email Configuration Setup

To enable email functionality for the contact form, you need to configure SMTP settings.

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Server Configuration
PORT=3001
CMS_PORT=3001
NODE_ENV=development

# Frontend URL (for CORS)
FRONTEND_URL=http://localhost:5173

# Email Configuration (SMTP)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
```

## Gmail Setup (Recommended for Development)

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate an App Password**:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate a password for "Mail"
3. **Update .env file**:
   - `SMTP_USER`: Your Gmail address
   - `SMTP_PASS`: The generated app password

## Alternative SMTP Services

### SendGrid
```env
SMTP_HOST=smtp.sendgrid.net
SMTP_USER=apikey
SMTP_PASS=your-sendgrid-api-key
```

### Mailgun
```env
SMTP_HOST=smtp.mailgun.org
SMTP_PORT=587
SMTP_USER=your-mailgun-smtp-username
SMTP_PASS=your-mailgun-smtp-password
```

## Development Mode

In development mode (`NODE_ENV=development`), emails are logged to the console instead of being sent. This allows you to test the contact form without actually sending emails.

## Production Deployment

For production, make sure to:
1. Set `NODE_ENV=production`
2. Configure proper SMTP credentials
3. Use a reliable email service (SendGrid, Mailgun, etc.)
4. Set up proper DNS records for your domain

## Contact Form Behavior

- **Development**: Logs email content to console
- **Production**: Sends actual emails to `bilalmalik746429@gmail.com`
- **Reply-To**: Set to the user's email for easy responses
- **Subject**: Includes user name and inquiry type
