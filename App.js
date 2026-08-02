const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const pool = require("./config/database");

const authRoutes = require("./routes/auth");
const messageRoutes = require("./routes/messages");
const chatRoutes = require("./routes/chats");
const userRoutes = require("./routes/users");

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/messages", messageRoutes);
app.use("/chats", chatRoutes);
app.use("/users", userRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "My Chat Server is running"
  });
});

app.get("/database-test", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");

    res.json({
      database: "connected",
      time: result.rows[0]
    });

  } catch (error) {

    res.status(500).json({
      database: "error",
      message: error.message
    });

  }
});

module.exports = app;
