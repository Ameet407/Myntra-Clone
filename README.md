
# Myntra Clone

This project is a **Myntra Clone**, a web application designed to replicate the core functionalities of the popular e-commerce platform Myntra. It is divided into two main parts: 

1. **Frontend**: Built using React and Redux Toolkit, located in the `3-myntra_react-clone` folder.
2. **Backend**: A server-side implementation for API and data management, located in the `2-actual-backend` folder.

The project is organized under the root folder `9-myntra-clone`.

---

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Folder Structure](#folder-structure)
- [Getting Started](#getting-started)
  - [Frontend Setup](#frontend-setup)
  - [Backend Setup](#backend-setup)
- [State Management](#state-management)
- [Made By](#made-by)

---

## Features

- **Frontend**:
  - Product listing with detailed information.
  - Filtering, sorting, and searching functionality.
  - Cart management with add/remove actions.
  - Fully responsive design for all devices.

- **Backend**:
  - Product data management (API endpoints for fetching product details).
  - User authentication (if implemented).
  - Cart and order management.

---

## Technologies Used

- **Frontend**:
  - React
  - Redux Toolkit
  - React Router
  - CSS & HTML5

- **Backend**:
  - Node.js
  - Express.js
  - MongoDB (or any other database you are using)
  - RESTful APIs

---

## Folder Structure

The root folder is organized as follows:

```
9-myntra-clone/
├── 3-myntra_react-clone/    # React frontend implementation
│   ├── public/              # Static files
│   ├── src/                 # React source files
│   └── package.json         # Frontend dependencies
├── 2-actual-backend/        # Backend implementation
│   ├── routes/              # API routes
│   ├── models/              # Database models
│   ├── server.js            # Main backend server file
│   └── package.json         # Backend dependencies
└── README.md                # Project documentation
```

---

## Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

- Node.js (v14 or later)
- npm (comes with Node.js)
- MongoDB (if applicable for your backend)

### Frontend Setup

1. Navigate to the `3-myntra_react-clone` folder:

   ```bash
   cd 9-myntra-clone/3-myntra_react-clone
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the React development server:

   ```bash
   npm run dev
   ```

4. Open the application in your browser at `http://localhost:3000`.

### Backend Setup

1. Navigate to the `2-actual-backend` folder:

   ```bash
   cd 9-myntra-clone/2-actual-backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the backend server:

   ```bash
   npm start
   ```

4. The backend server will run on `http://localhost:5000` (or as configured).

---

## State Management

The frontend uses **Redux Toolkit** for state management, handling:

- Products list
- Cart items
- Search, filter, and sort settings

---

## Made By

**Ameet Kumar Mishra**

