# REAL ESTATE APPLICATION

## Table of Contents

- Project Overview: #project-overview

- Technologies Used: #technologies-used

- Setup Instructions: #setup-instructions

  - Backend Setup: #backend-setup
  - Frontend Setup: #frontend-setup

- API Documentation: #api-documentation

## Project Overview

This project is a real estate application that allows users to view and manage properties. It consists of a backend server built with Node.js, Express, and MongoDB, and a frontend client built with React.js.

### Technologies Used

- Backend:

  - Node.js
  - Express
  - MongoDB

- Frontend:

  - React.js

## Setup Instructions

**Clone the repository:**

```git
git clone https://github.com/MENSAH-OSBORN/REAL-ESTATE-APPLICATION
```

**Navigate to the application directory:**

```bash
cd REAL-ESTATE-APPLICATION
```

## Backend Setup

1. **Navigate to the `server` directory:**

   ```bash
   cd server
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Create an `.env` file:**
   Create an `.env` file in the root directory of the `server` folder and replace them with your own secret keys.

   ```js
   PORT=myport
   MONGODB_URI=mongodb://localhost:27017/real-estate
   JWT_SECRET=mysecretkey
   JWT_EXPIRES_IN=myexpiry
   NODE_ENV=development
   ```

4. **Navigate to the `server` directory:**

   ```bash
   cd real-estate-application/server
   ```

5. **Start the development server:**

   ```bash
   npm run dev
   ```

## Frontend Setup

1. **Navigate to the `client` directory:**

   ```bash
   cd client
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm run dev
   ```

## API Documentation

Explore the API endpoints in the [API Documentation](https://documenter.getpostman.com/view/25928916/2s9Ykq718E)
