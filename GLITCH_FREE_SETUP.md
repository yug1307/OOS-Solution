# Deploy to GLITCH - Node.js Hosting

## What is Glitch?

Glitch is a web app platform where you can:
- Host Node.js applications
- Keep your Express backend
- Deploy with simple Git commands
- Include databases
- Completely free

**Easier than Railway, keeps your Express code!**

---

## Pros and Cons

### Pros ✅
- Completely free
- Simple interface
- Git-based deployment
- Keeps your Express backend
- Good for learning

### Cons ⚠️
- Projects sleep after 5 minutes of inactivity (wake on request)
- Limited free resources
- Performance not as good as paid services

---

## Step-by-Step Setup (10 minutes)

### Step 1: Sign Up to Glitch (1 min)

1. Go to https://glitch.com
2. Click "Sign in"
3. Choose "Sign in with GitHub"
4. Authorize
5. Done!

---

### Step 2: Create Project from GitHub (2 min)

1. Click "New Project"
2. Select "Import from GitHub"
3. Paste your repo URL:
   ```
   https://github.com/YourUsername/ARC-Technologies
   ```
4. Click "Import"
5. Wait for import (1-2 minutes)

---

### Step 3: Select Backend Folder (1 min)

1. Glitch loads your project
2. If it asks for root directory, set it to `backend/`
3. Click "Continue"

---

### Step 4: Add Environment Variables (2 min)

1. Click ".env" file
2. Add your database variables:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=oos_solution
NODE_ENV=production
PORT=3000
```

Note: Glitch uses port 3000 by default

---

### Step 5: Install Dependencies (2 min)

Glitch auto-runs `npm install`, but to be safe:

1. Click "Console" at bottom
2. Run:
   ```bash
   cd backend
   npm install
   ```
3. Wait for completion

---

### Step 6: Start Your Server (1 min)

1. Update your `backend/server.js` to use port 3000:

```javascript
const PORT = process.env.PORT || 3000;
```

2. Glitch auto-starts your server
3. You'll see logs in the console

---

### Step 7: Get Your Glitch URL (1 min)

1. Glitch gives you a URL like: `https://your-project-name.glitch.me`
2. Your API endpoint: `https://your-project-name.glitch.me/api/contact`
3. Save this URL

---

### Step 8: Update Frontend (2 min)

**File:** `src/components/ContactPage.jsx`

**Find line 33:**
```javascript
const response = await fetch('http://localhost:5000/api/contact', {
```

**Replace with:**
```javascript
const response = await fetch('https://your-project-name.glitch.me/api/contact', {
```

**Example:**
```javascript
const response = await fetch('https://oos-solution-contact.glitch.me/api/contact', {
```

---

### Step 9: Commit and Push (1 min)

```bash
git add .
git commit -m "Update backend URL for Glitch production"
git push
```

Vercel auto-redeploys in 2-3 minutes.

---

### Step 10: Test Everything (2 min)

#### Test 1: Backend Health
Visit: `https://your-project-name.glitch.me/health`

Should return:
```json
{
  "status": "Server is running",
  "environment": "production",
  "timestamp": "..."
}
```

#### Test 2: Submit Form
1. Visit https://oos-solution.vercel.app
2. Go to Contact page
3. Fill and submit
4. Should see success message

#### Test 3: Check Database
The data should be saved in your database.

---

## Important Notes About Glitch

### Projects Sleep
After 5 minutes of no traffic, your Glitch project "sleeps":
- First request after sleep: takes 5-10 seconds
- Subsequent requests: normal speed

**This is okay for personal projects!**

### To Keep Alive 24/7
Option 1: Upgrade to paid Glitch plan
Option 2: Use a service to ping your URL every 5 minutes
Option 3: Switch to Replit (better for always-on)

### Free Tier Limits
- RAM: 512MB (enough for Node.js)
- Storage: 200MB
- CPU: Limited (okay for contact forms)

---

## Database Options on Glitch

### Option 1: Local SQLite (Easiest)
Already included in Glitch
Update `.env` to use SQLite connection

### Option 2: Cloud Database
Add to `.env`:
```
DB_HOST=your_cloud_db_host
DB_USER=username
DB_PASSWORD=password
```

### Option 3: Keep Your Local MySQL
Won't work (Glitch can't connect to localhost)
Move to cloud database

---

## Your Production URLs

```
Frontend:    https://oos-solution.vercel.app
Backend API: https://your-project-name.glitch.me
Health:      https://your-project-name.glitch.me/health
Form:        https://your-project-name.glitch.me/api/contact
```

---

## Troubleshooting

### Issue 1: "Cannot find module"
**Solution:**
1. Click Console
2. Run: `npm install`
3. Wait for completion
4. Glitch auto-restarts

### Issue 2: CORS Error
**Solution:**
Update `server.js` CORS:
```javascript
origin: ['https://oos-solution.vercel.app']
```

### Issue 3: 503 Service Unavailable
**Solution:**
- Glitch might be restarting
- Wait 10 seconds and try again
- Check console for errors

### Issue 4: Port already in use
**Solution:**
- Change PORT in `.env` to 3000
- Glitch assigns ports dynamically

---

## When to Use Glitch

✅ Use Glitch if:
- You want the easiest setup
- You keep your Express backend
- You're okay with projects sleeping
- You want a fun interface

❌ Don't use Glitch if:
- You need 24/7 guaranteed uptime
- You want better performance
- You're launching a production business

---

## Upgrade Path

If Glitch becomes limiting:
1. **Glitch Paid:** ~$6/month for guaranteed uptime
2. **Switch to Replit:** Better free tier
3. **Switch to Railway:** More professional

---

## Next Steps

1. ✅ Sign up to Glitch
2. ✅ Import from GitHub
3. ✅ Set environment variables
4. ✅ Install dependencies
5. ✅ Start server
6. ✅ Update frontend URL
7. ✅ Commit and push
8. ✅ Test everything

**Time: ~15 minutes**
**Cost: $0**

---

## Support

- Glitch Help: https://help.glitch.com
- Glitch Community: https://support.glitch.com

**Your form is live on Glitch, completely free!** 🎉
