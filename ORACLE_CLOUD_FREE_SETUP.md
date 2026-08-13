# Deploy to ORACLE CLOUD - Most Powerful Free Option

## What is Oracle Cloud?

Oracle Cloud offers a **free tier that never expires**:
- Free VM (Linux server)
- Free MySQL database
- 10GB storage
- Unlimited bandwidth
- All genuinely free forever

**Most generous free tier in the cloud!**

---

## Who Should Use Oracle Cloud?

✓ You want to learn DevOps
✓ You're comfortable with Linux
✓ You want maximum control
✓ You don't mind credit card (verification only)
✓ You want guaranteed always-free resources

---

## Prerequisites

- Credit card (for identity verification, NOT charged)
- Linux/terminal knowledge
- 30-45 minutes

---

## Step-by-Step Setup

### Step 1: Create Oracle Cloud Account (5 min)

1. Go to https://www.oracle.com/cloud/free
2. Click "Start for free"
3. Fill in details:
   - Country
   - Name
   - Email
   - Phone
4. Add credit card (verification only, NOT charged)
5. Verify phone number
6. Done! Account created

---

### Step 2: Create Compute Instance (VM) (10 min)

1. Log in to https://console.oracle.com
2. Click "Compute" → "Instances"
3. Click "Create Instance"
4. Fill details:
   - Name: `oos-solution`
   - Compartment: (default)
   - Image: Select "Ubuntu 22.04 LTS"
5. Under "Shape":
   - Click "Change shape"
   - Select "Ampere (ARM)" → "Micro (always-free)"
   - 4GB RAM, 0.005 OCPU
6. Under "Networking":
   - Create new VCN (Virtual Cloud Network)
   - Create new subnet
7. Add SSH key:
   - Click "Generate SSH key pair"
   - Download and save it somewhere safe
8. Click "Create"
9. Wait 2-3 minutes for instance to start

---

### Step 3: Connect to Your Instance (5 min)

#### On Windows (PowerShell):

1. Open PowerShell
2. Navigate to where you saved SSH key
3. Run:
```powershell
ssh -i "your-key.key" ubuntu@your-instance-ip
```

Get your instance IP:
- Go to Compute → Instances
- Click your instance
- Copy "Public IP Address"

#### On Mac/Linux:

```bash
chmod 400 your-key.key
ssh -i "your-key.key" ubuntu@your-instance-ip
```

You're now connected to your server!

---

### Step 4: Install Node.js and MySQL (10 min)

On your server terminal, run:

```bash
# Update system
sudo apt update
sudo apt upgrade -y

# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

# Install MySQL Server
sudo apt install -y mysql-server

# Start MySQL
sudo systemctl start mysql
sudo systemctl enable mysql

# Verify installation
node --version
npm --version
mysql --version
```

---

### Step 5: Set Up MySQL Database (5 min)

```bash
# Connect to MySQL
sudo mysql

# Create database
CREATE DATABASE oos_solution;

# Create user
CREATE USER 'oos_user'@'localhost' IDENTIFIED BY 'strong_password_here';

# Grant permissions
GRANT ALL PRIVILEGES ON oos_solution.* TO 'oos_user'@'localhost';
FLUSH PRIVILEGES;

# Exit
EXIT;
```

**Save your credentials:**
- User: `oos_user`
- Password: `strong_password_here` (use something strong!)
- Database: `oos_solution`

---

### Step 6: Deploy Your Backend (10 min)

```bash
# Navigate to home directory
cd ~

# Clone your repository
git clone https://github.com/YourUsername/ARC-Technologies.git
cd ARC-Technologies/backend

# Install dependencies
npm install

# Create .env file
sudo nano .env
```

In nano, type:
```env
DB_HOST=localhost
DB_USER=oos_user
DB_PASSWORD=your_password_here
DB_NAME=oos_solution
NODE_ENV=production
PORT=5000
```

Press Ctrl+X, then Y, then Enter to save.

---

### Step 7: Start Your Backend (2 min)

```bash
npm run dev
```

You should see:
```
✓ Server is running on port 5000
✓ Database initialized successfully
```

---

### Step 8: Set Up Public URL with Nginx (10 min)

Your server runs locally on port 5000, but you need public access.

```bash
# Open new terminal (keep npm running)
ssh -i "your-key.key" ubuntu@your-instance-ip

# Install Nginx
sudo apt install -y nginx

# Create config
sudo nano /etc/nginx/sites-available/default
```

Replace with:
```nginx
server {
    listen 80 default_server;
    server_name _;

    location / {
        proxy_pass http://localhost:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Press Ctrl+X, Y, Enter to save.

```bash
# Test config
sudo nginx -t

# Restart Nginx
sudo systemctl restart nginx
```

---

### Step 9: Get Your Public IP (1 min)

```bash
# Get your instance public IP
curl http://169.254.169.254/opc/v2/instance/metadata/primaryPublicIpv4
```

This is your backend URL: `http://your-public-ip`

**Example:** `http://158.101.123.45`

---

### Step 10: Open Firewall Port (5 min)

You need to allow traffic on port 80 (web):

1. Go to Oracle Cloud Console
2. Click "Networking" → "Virtual Cloud Networks"
3. Click your VCN
4. Click "Security Lists"
5. Click the default security list
6. Click "Add Ingress Rule"
7. Enter:
   - Source CIDR: `0.0.0.0/0`
   - Destination Port Range: `80`
8. Click "Add Ingress Rule"

---

### Step 11: Update Frontend (2 min)

**File:** `src/components/ContactPage.jsx`

**Find line 33:**
```javascript
const response = await fetch('http://localhost:5000/api/contact', {
```

**Replace with your IP:**
```javascript
const response = await fetch('http://158.101.123.45/api/contact', {
```

---

### Step 12: Deploy Frontend (2 min)

```bash
git add .
git commit -m "Update backend URL for Oracle Cloud production"
git push
```

Vercel auto-redeploys in 2-3 minutes.

---

### Step 13: Test Everything (3 min)

1. Visit https://oos-solution.vercel.app
2. Go to Contact page
3. Submit test form
4. Should see success message
5. Check MySQL database:

```bash
ssh -i "your-key.key" ubuntu@your-instance-ip
sudo mysql -u oos_user -p oos_solution
SELECT * FROM contacts;
EXIT;
```

---

## Keep Your Backend Running 24/7

Use `pm2` to manage your Node process:

```bash
# Install PM2
npm install -g pm2

# Start your backend with PM2
pm2 start backend/server.js --name "oos-backend"

# Make it restart on reboot
pm2 startup
pm2 save
```

Your backend is now always running!

---

## Your Production Setup

```
Frontend:    https://oos-solution.vercel.app
Backend API: http://your-oracle-public-ip
Database:    MySQL on your Oracle instance
Cost:        $0 forever
```

---

## Advantages

✅ Guaranteed free forever (Oracle's "always free" tier)
✅ Real MySQL database
✅ Full server control
✅ Unlimited bandwidth
✅ 4GB RAM (plenty)
✅ Learn DevOps skills
✅ Same code as local development

---

## Cost Breakdown

| Resource | Limit | Your Usage | Cost |
|----------|-------|-----------|------|
| VM | 2 x Micro instances | 1 | FREE |
| RAM | 24GB total | 4GB | FREE |
| MySQL | 1 database | Unlimited | FREE |
| Storage | 200GB | 10GB | FREE |
| Bandwidth | Unlimited | Moderate | FREE |
| **Total** | | | **FREE** |

---

## Important Notes

### Security
- Keep your SSH key safe
- Use strong MySQL password
- Regular backups recommended

### Monitoring
- Check logs: `sudo systemctl status nginx`
- Check MySQL: `sudo systemctl status mysql`
- Monitor disk space: `df -h`

### Updates
Periodically update packages:
```bash
sudo apt update
sudo apt upgrade
```

---

## When to Use Oracle Cloud

✅ Use if:
- You want to learn DevOps
- You're comfortable with Linux
- You want maximum control
- You want guaranteed free resources

❌ Don't use if:
- You're a beginner (use Replit)
- You don't want to manage servers
- You want simplicity (use Firebase)

---

## If You Get Stuck

1. Check server logs: `pm2 logs`
2. Check Nginx logs: `sudo tail -f /var/log/nginx/error.log`
3. Check MySQL: `sudo systemctl status mysql`
4. SSH errors: Verify key permissions

---

## Upgrade Path

If your app grows beyond free tier:
- Upgrade to paid Oracle Cloud instance
- Cost: ~$20-30/month
- Still much cheaper than other providers

---

## Support

- Oracle Cloud Docs: https://docs.oracle.com/en-us/iaas/
- Ubuntu Server Guide: https://ubuntu.com/server/docs
- Node.js PM2 Guide: https://pm2.keymetrics.io/

---

## Congratulations! 🎉

You now have:
✅ Professional production setup
✅ MySQL database running
✅ Node.js backend deployed
✅ Everything completely free forever
✅ Full server control
✅ Real DevOps experience

Your form is live! 🚀
