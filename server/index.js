const express = require("express");
const app = express();

app.set("trust proxy", 1);

const uploadRoutes = require("./routes/Upload");
const settingRoutes = require("./routes/Settings");

const database = require("./config/database");

const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
const PORT = process.env.PORT || 4000;

// Database connect
database.connect();

// Middlewares
app.use(express.json());

app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://web-3d-product-viewer.vercel.app",
    ],
    credentials: true,
  })
);

// Serve uploaded files
app.use("/uploads", express.static("uploads"));

// Routes
app.use("/api/v1/models", uploadRoutes);
app.use("/api/v1/settings", settingRoutes);

// Health check
app.get("/", (req, res) => {
  return res.json({
    success: true,
    message: "Your server is up and running...."
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`App is running at ${PORT}`);
});



