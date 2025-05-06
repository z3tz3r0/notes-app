const express = require("express");
const app = express();
const dotenv = require("dotenv");
const noteRoute = require("./api/v1/noteRoute");

dotenv.config();

const PORT = process.env.PORT || 3000;

// Built-in json request parser
app.use(express.json());

// Root route welcoming message
app.get("/", (req, res) => {
  res.send("Welcome to notes API endpoint, please navigate to /notes");
});

// Route Middleware
app.use("/api/v1/notes", noteRoute);

// Global Error Handling
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  const newError = {
    success: false,
    statusCode,
    reason: message,
  };

  if (process.env.NODE_ENV === "development") {
    newError.stack = err.stack;
  }
  console.error(newError);
  res.status(statusCode).json(newError);
});

// Let the server running, wait and listen for the request.
app.listen(PORT, () => {
  console.log(`Server is now running at http://localhost:${PORT}`);
});
