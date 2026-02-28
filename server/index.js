const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { connectDB } = require("./db/database");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: ["http://localhost:5173", "http://localhost:3000"],
  credentials: true,
}));
app.use(express.json());

const authRoutes = require("./routes/auth");
const contactRoutes = require("./routes/contact");

app.use("/api/auth", authRoutes);
app.use("/api/contact", contactRoutes);

app.get("/api", (req, res) => {
  res.json({ message: "Shree Om Hardware API is running! 🚀" });
});

app.use((req, res) => {
  res.status(404).json({ message: "Route not found." });
});

async function startServer() {
  await connectDB();
  const server = app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
  });
  server.on("error", (err) => {
    if (err.code === "EADDRINUSE") {
      console.error(`❌ Port ${PORT} is already in use. Stop the old server first, then try again.`);
      process.exit(1);
    }
  });
}

startServer();
