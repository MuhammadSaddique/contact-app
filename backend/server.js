const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const contactRoutes = require("./routes/contacts");

dotenv.config(); // Load .env file into process.env

const app = express();

// Middleware
app.use(express.json()); // Parse JSON requests

// Routes
app.use("/api/contacts", contactRoutes);

// Start server after DB connects
connectDB().then(() => {
  app.listen(process.env.PORT || 5000, () => {
    console.log(`🚀 Server running on port ${process.env.PORT || 5000}`);
  });
});
