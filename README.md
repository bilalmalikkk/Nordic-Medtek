# NordicMedTek CMS

A custom Content Management System integrated into the NordicMedTek website for managing products, categories, and content.

## Features

- 🔐 **Secure Authentication** - JWT-based admin authentication
- 📦 **Product Management** - Complete CRUD operations for products
- 🏷️ **Category Management** - Organize products by categories
- 📁 **Media Management** - Upload and manage images and documents
- 📊 **CSV Import/Export** - Import products from CSV and export data
- 🎨 **Rich Text Support** - HTML-rich product descriptions
- 🔍 **Advanced Search** - Search and filter products
- 📱 **Responsive Design** - Works on all devices
- 🚀 **API-First** - RESTful API for frontend integration

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Environment
```bash
# Start both CMS and main website
npm run dev:full

# OR start individually
npm run dev          # Main website (port 5173)
npm run cms:dev      # CMS server (port 3001)
```

### 3. Access the System
- **Main Website:** http://localhost:5173
- **Admin Panel:** http://localhost:5173/admin
- **CSV Import:** http://localhost:5173/csv-import
- **CMS API:** http://localhost:3001/api

### 4. Login to Admin
- **Username:** admin
- **Password:** admin123

## API Endpoints

### Authentication
- `POST /api/auth/login` - Admin login
- `GET /api/auth/profile` - Get current user profile
- `GET /api/auth/verify` - Verify token

### Products
- `GET /api/products` - Get all products (with filters)
- `GET /api/products/:id` - Get single product
- `POST /api/products` - Create product (admin)
- `PUT /api/products/:id` - Update product (admin)
- `DELETE /api/products/:id` - Delete product (admin)

### Categories
- `GET /api/categories` - Get all categories
- `POST /api/categories` - Create category (admin)
- `PUT /api/categories/:id` - Update category (admin)
- `DELETE /api/categories/:id` - Delete category (admin)

### Media
- `GET /api/media` - Get all media files (admin)
- `DELETE /api/media/:id` - Delete media file (admin)

### Upload
- `POST /api/upload/single` - Upload single file (admin)
- `POST /api/upload/multiple` - Upload multiple files (admin)

### Import/Export
- `POST /api/import/products` - Import products from CSV (admin)

### Settings
- `GET /api/settings` - Get all settings (admin)
- `PUT /api/settings/:key` - Update setting (admin)

## CSV Import

Import your product data from CSV files with the following structure:

**Required Columns:**
- `Title` - Product title
- `Product name` - Product name
- `Item No:` - Unique item number
- `Technical data` - Product description
- `Status` - PUBLISHED/DRAFT

**Optional Columns:**
- `Rich Text` - HTML description
- `Image` - Image URL
- `PDF file` - PDF document URL
- `Sorting` - Sort order number

## Development

### Project Structure
```
src/
├── cms/                    # CMS Backend
│   ├── server.js          # Main server
│   ├── database/          # Database files
│   ├── routes/            # API routes
│   └── middleware/        # Auth middleware
├── pages/
│   ├── Admin.jsx          # Admin interface
│   ├── Products.jsx       # Products page (uses CMS)
│   └── CsvImport.jsx      # CSV import page
├── components/
│   └── CsvImportTool.jsx  # Import component
├── services/
│   └── cmsApi.js          # API service
└── hooks/
    └── useCmsProducts.js  # React hooks
```

### Scripts
- `npm run dev` - Start main website
- `npm run cms:dev` - Start CMS server
- `npm run dev:full` - Start both servers
- `npm run build` - Build for production

## Production Deployment

1. Set environment variables:
   ```bash
   NODE_ENV=production
   CMS_PORT=3001
   JWT_SECRET=your-secure-secret
   ```

2. Build the project:
   ```bash
   npm run build
   ```

3. Start the CMS server:
   ```bash
   npm run cms:start
   ```

## Security

- JWT-based authentication
- Password hashing with bcrypt
- Rate limiting
- CORS protection
- Input validation
- File type validation

## License

MIT License