# Notes Application

This is a full-stack web application for creating, managing, and organizing notes. It provides a user-friendly interface for writing and editing notes with rich text capabilities, along with user authentication to keep your notes private and secure.

## Technologies Used

### Backend

- **Node.js:** JavaScript runtime environment.
- **Express:** Web application framework for Node.js.
- **MongoDB:** NoSQL database for storing notes and user data.
- **Mongoose:** MongoDB object modeling for Node.js.
- **Authentication:** Secure user login and registration (likely using JWT or sessions).
- **Middleware:** Custom middleware for authentication, error handling, and rate limiting.

### Frontend

- **React:** JavaScript library for building user interfaces.
- **TypeScript:** Typed superset of JavaScript that compiles to plain JavaScript.
- **Vite:** Fast frontend build tool.
- **UI Components:** Utilizes a component library (inferred from [`frontend/src/components/ui/`](frontend/src/components/ui/)) for consistent and accessible UI elements.
- **Theming:** Supports dark and light modes.
- **Mobile Responsiveness:** Designed to be usable on various screen sizes.

## Setup and Running

To set up and run the project locally, follow these steps:

1.  **Prerequisites:**

    - Node.js (v14 or higher recommended)
    - npm or pnpm package manager
    - MongoDB server running

2.  **Clone the repository:**

    ```bash
    git clone <repository_url>
    cd notes-app
    ```

3.  **Backend Setup:**

    ```bash
    cd backend
    npm install
    ```

    Create a `.env` file in the [`backend/`](backend/) directory with your MongoDB connection string and a secret key for authentication.

    ```env
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_secret_key
    ```

    Start the backend server:

    ```bash
    npm start
    ```

    The backend server should now be running, typically on `http://localhost:5000`.

4.  **Frontend Setup:**

    ```bash
    cd ../frontend
    pnpm install # Or npm install if you prefer npm
    ```

    Start the frontend development server:

    ```bash
    pnpm dev # Or npm run dev
    ```

    The frontend application should now be running, typically on `http://localhost:5173`.

5.  Open your web browser and navigate to the frontend address (`http://localhost:5173`) to access the application.

## Key Features

Based on the project structure, the application includes the following key features:

- **User Authentication:** Secure signup and login functionality.
- **Notes Management:** Create, read, update, and delete notes.
- **Rich Text Editing:** Tools for formatting note content.
- **Theming:** Switch between dark and light visual themes.
- **Mobile Support:** Responsive design for use on mobile devices.
