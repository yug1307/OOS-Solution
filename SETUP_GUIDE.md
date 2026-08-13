# OOS Solution - Contact Form MySQL Database Setup Guide

## Quick Start

Follow these steps to connect the contact form to your MySQL database.

---

## Step 1: Install Backend Dependencies

```bash
cd backend
npm install
```

This will install: 
- **express** - Web server framework
- **mysql2** - MySQL database driver
- **cors** - Handle cross-origin requests
- **dotenv** - Environment variables
- **express-validator** - Form validation
- **nodemon** - Auto-reload during development

---

## Step 2: Create MySQL Database

### Option A: Using MySQL Command Line

```bash
# Connect to MySQL
mysql -u root -p

# Create the database
CREATE DATABASE oos_solution;

# Verify it was created
SHOW DATABASES;

# Exit
EXIT;
```

### Option B: Using MySQL Workbench or GUI Tool
1. Right-click on "Databases"
2. Select "Create New Database"
3. Name it `oos_solution`
4. Click "Apply"

---

## Step 3: Configure Environment Variables

Edit `backend/.env` file with your MySQL credentials:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=oos_solution
PORT=5000
NODE_ENV=development
```

### Common Settings:
- **DB_HOST**: Usually `localhost` if MySQL is on the same machine
- **DB_USER**: Usually `root` for local development
- **DB_PASSWORD**: Your MySQL root password (leave blank if no password)
- **DB_NAME**: The database name (`oos_solution`)
- **PORT**: Backend server port (5000)

---

## Step 4: Start the Backend Server

```bash
# From the backend folder
npm run dev
```

You should see output like:
```
✓ Database initialized successfully
✓ Server is running on http://localhost:5000
```

---

## Step 5: Update Frontend Configuration (if needed)

The frontend is already configured to use `http://localhost:5000`, but if you change the port or host, update it in:

**File**: `src/components/ContactPage.jsx`

Find this line:
```javascript
const response = await fetch('http://localhost:5000/api/contact', {
```

Change it to your backend URL if needed.

---

## Running Both Frontend and Backend

### Terminal 1 - Frontend (Vite dev server)
```bash
cd /path/to/OOS\ Solution
npm run dev
```

### Terminal 2 - Backend (Express server)
```bash
cd /path/to/OOS\ Solution/backend
npm run dev
```

Now:
- Frontend runs on: `http://localhost:5173` (or shown in terminal)
- Backend runs on: `http://localhost:5000`

---

## Database Schema

The contacts table is created automatically when the server starts. Here's what it contains:

```
id              - Unique identifier (Primary Key)
name            - Contact's full name
email           - Contact's email address
phone           - Contact's phone number (optional)
subject         - Inquiry subject
message         - The message/inquiry
created_at      - Timestamp when submitted
status          - 'new', 'read', or 'replied'
```

---

## Testing the Connection

### Using the Contact Form
1. Navigate to the contact page
2. Fill out the form
3. Click "Send Message"
4. You should see a success message

### Using curl to test the API
```bash
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "phone": "+1 (555) 000-0000",
    "subject": "Test Message",
    "message": "This is a test message to verify the database connection."
  }'
```

Expected response:
```json
{
  "success": true,
  "message": "Contact submitted successfully",
  "id": 1
}
```

---

## Viewing Submitted Contacts

### Option A: Using the API
```bash
curl http://localhost:5000/api/contact
```

### Option B: Using MySQL Command Line
```bash
mysql -u root -p
USE oos_solution;
SELECT * FROM contacts;
```

### Option C: Using MySQL Workbench
1. Connect to your MySQL server
2. Navigate to `oos_solution` database
3. Right-click on `contacts` table
4. Select "Select Rows - Limit 1000"

---

## Common Issues & Solutions

### Issue 1: "Unable to connect to server"
**Solution**: Make sure the backend is running. Check:
- Backend server is started: `npm run dev`
- Running on correct port: `http://localhost:5000`
- Check browser console for errors

### Issue 2: "Error: connect ECONNREFUSED"
**Solution**: MySQL is not running or credentials are wrong
- Start MySQL service
- Verify credentials in `.env` file
- Check if MySQL is running: `mysql -u root -p`

### Issue 3: "Error: Unknown database 'oos_solution'"
**Solution**: Database was not created
- Run: `CREATE DATABASE oos_solution;`
- Restart backend server

### Issue 4: "CORS Error"
**Solution**: This means the frontend and backend are not configured correctly
- Check that backend is running on port 5000
- Check frontend is fetching from correct URL

### Issue 5: Port Already in Use
**Solution**: Change the port in `.env`:
```env
PORT=5001
```

And update frontend URL accordingly:
```javascript
const response = await fetch('http://localhost:5001/api/contact', {
```

---

## Production Deployment

For production, you'll need to:

1. Update `.env` with production database credentials
2. Set `NODE_ENV=production`
3. Use a process manager like PM2:
   ```bash
   npm install -g pm2
   pm2 start backend/server.js --name "oos-backend"
   ```
4. Set up a reverse proxy (nginx, Apache)
5. Use HTTPS with SSL certificates
6. Update frontend API URL to your production domain

---

## Backend API Endpoints

### Submit Contact Form
- **POST** `/api/contact`
- Returns: Contact ID and success message

### Get All Contacts
- **GET** `/api/contact`
- Returns: Array of all contacts

### Get Single Contact
- **GET** `/api/contact/:id`
- Returns: Single contact by ID

### Update Contact Status
- **PATCH** `/api/contact/:id`
- Body: `{ "status": "new|read|replied" }`

### Delete Contact
- **DELETE** `/api/contact/:id`

---

## Support

For issues or questions, check:
- Backend logs in terminal
- Browser console (F12)
- MySQL error logs
- `.env` file configuration

Enjoy! 🚀
