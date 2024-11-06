# Financial Dashboard

A modern financial dashboard application built with React, TypeScript, and Vite, featuring responsive design and real-time data visualization.

## Features

- Dashboard overview with financial metrics
- Credit card management
- Transaction history
- Expense statistics with charts
- Quick transfer functionality
- User profile management
- Responsive design for all devices

## Tech Stack

- React 18.3
- TypeScript
- Vite
- Redux Toolkit for state management
- TailwindCSS for styling
- Chart.js for data visualization
- Express.js backend for file uploads

## Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)

## Setup Instructions

1. Clone the repository:

```bash
git clone https://github.com/cryptodev523/financial-dashboard.git
cd financial-dashboard
```

2. Install dependencies:

```bash
npm install
```

3. Create required directories:

```bash
mkdir -p public/upload/avatars
```

4. Start the development server:

```bash
npm run dev
```

This will start both the Vite development server and the Express backend server at the same time.

- Frontend: http://localhost:5173
- Backend: http://localhost:3000


## Development Assumptions

1. **Authentication**
   - Authentication is not implemented in this version
   - User data is mocked for demonstration purposes

2. **API Integration**
   - Mock data is used for most API endpoints
   - Only file upload functionality uses real API endpoints

3. **Data Persistence**
   - Data is not persisted between sessions
   - File uploads are stored in the local filesystem

4. **Browser Support**
   - Modern browsers (Chrome, Firefox, Safari, Edge)
   - Minimum viewport width of 320px

## Environment Variables

No environment variables are required for basic setup. The application uses default ports:
- Frontend: 5173
- Backend: 3001