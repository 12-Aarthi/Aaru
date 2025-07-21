const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static files (serves CSS, JS, images)
app.use(express.static(path.join(__dirname, "../frontend")));

// HTML Routes
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/html/index.html"));
});

app.get("/services", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/html/services.html"));
});

app.get("/gallery", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/html/gallery.html"));
});

app.get("/reviews", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/html/reviews.html"));
});

app.get("/write-review", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/html/write_review.html"));
});

// Review API route
const reviewRoutes = require("./routes/reviewRoutes");
app.use("/api/reviews", reviewRoutes);
app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/html/contact.html"));
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
