const express = require("express");
const dotenv = require("dotenv");
const errorHandler = require("./utils/errMessage");
const limiter = require("./middlewares/ratelimiter");
const path = require("path");
const connectMongoDB = require("./config/mongo");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
const router = require("./routes/index.routes");
const cors = require("cors");

const app = express();
dotenv.config();

const PORT = process.env.PORT || 3000;

app.set("trust proxy", 1);

app.use(helmet());

const whitelist = [
  "http://localhost:5173",
  "https://notes-app-silk-seven.vercel.app",
];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};

app.use(cors(corsOptions));
app.use(limiter);

// Built-in json request parser
app.use(express.json());
app.use(cookieParser());

// Pulling welcome page from public folder
app.use(express.static(path.join(__dirname, "public")));

// Route Middleware
app.use("/api/v1/", router);

// Global Error Handling
app.use(errorHandler);

// Let the server running, wait and listen for the request.
(async () => {
  try {
    await connectMongoDB();
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.log("Error starting up the server");
    console.error(error.message);
    process.exit(1);
  }
})();

// Handle unhandled promise rejections globally
process.on("unhandledRejection", (err) => {
  console.error("💥 Unhandled Rejection:", err.message);
  process.exit(1);
});
