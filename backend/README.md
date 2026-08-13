# OOS Solution Backend API

## Setup Instructions

### 1. Prerequisites
- Node.js (v14 or higher)
- MySQL Server

### 2. Installation

```bash
cd backend
npm install
```

### 3. Database Setup

Make sure MySQL is running, then:

```bash
# Create the database
mysql -u root -p
> CREATE DATABASE oos_solution;
> EXIT;
```

### 4. Environment Configuration

Update `.env` file with your MySQL credentials:

```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=oos_solution
PORT=5000
NODE_ENV=development
```

### 5. Start the Server

```bash
# Development mode (with auto-reload)
npm run dev

# Production mode
npm start
```

The server will start on `http://localhost:5000`

## API Endpoints

### Contact Form Endpoints

#### POST `/api/contact`
Submit a new contact form

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+1 (555) 000-0000",
  "subject": "Website Inquiry",
  "message": "I would like to know more about your services..."
}
```

**Response (Success):**
```json
{
  "success": true,
  "message": "Contact submitted successfully",
  "id": 1
}
```

**Response (Error):**
```json
{
  "success": false,
  "errors": [
    {
      "msg": "Valid email is required",
      "param": "email"
    }
  ]
}
```

---

#### GET `/api/contact`
Fetch all contacts (admin use)

**Response:**
```json
{
  "success": true,
  "count": 5,
  "data": [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john@example.com",
      "phone": "+1 (555) 000-0000",
      "subject": "Website Inquiry",
      "message": "I would like to know more...",
      "status": "new",
      "created_at": "2024-01-15T10:30:00.000Z"
    }
  ]
}
```

---

#### GET `/api/contact/:id`
Fetch a single contact by ID

**Response:**
```json
{
  "success": true,
  "data": {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "+1 (555) 000-0000",
    "subject": "Website Inquiry",
    "message": "I would like to know more...",
    "status": "new",
    "created_at": "2024-01-15T10:30:00.000Z"
  }
}
```

---

#### PATCH `/api/contact/:id`
Update contact status (new, read, replied)

**Request Body:**
```json
{
  "status": "read"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Contact updated successfully"
}
```

---

#### DELETE `/api/contact/:id`
Delete a contact

**Response:**
```json
{
  "success": true,
  "message": "Contact deleted successfully"
}
```

---

## Database Schema

The `contacts` table structure:

```sql
CREATE TABLE contacts (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20),
  subject VARCHAR(255) NOT NULL,
  message LONGTEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  status ENUM('new', 'read', 'replied') DEFAULT 'new',
  INDEX idx_email (email),
  INDEX idx_created_at (created_at)
);
```

## Testing the API

You can test the endpoints using Postman or curl:

```bash
# Submit contact form
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "+1 (555) 000-0000",
    "subject": "Website Inquiry",
    "message": "I would like to know more about your services..."
  }'

# Get all contacts
curl http://localhost:5000/api/contact

# Get specific contact
curl http://localhost:5000/api/contact/1

# Update contact status
curl -X PATCH http://localhost:5000/api/contact/1 \
  -H "Content-Type: application/json" \
  -d '{"status": "read"}'

# Delete contact
curl -X DELETE http://localhost:5000/api/contact/1
```

## Error Handling

The API returns appropriate HTTP status codes:
- `200` - Success
- `201` - Created
- `400` - Bad Request (validation error)
- `404` - Not Found
- `500` - Server Error

## Notes

- Phone field is optional
- Name, email, subject, and message are required
- Email validation is performed server-side
- All database queries use parameterized statements to prevent SQL injection
