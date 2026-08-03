const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const {
  createUser,
  findUserByPhone
} = require("../models/user");

const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const {
      username,
      phone,
      password
    } = req.body;

    const existingUser = await findUserByPhone(phone);

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists"
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await createUser(
      username,
      phone,
      hashedPassword
    );

    res.json({
      message: "Register success",
      user
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
});

router.post("/login", async (req, res) => {
  try {

    const {
      phone,
      password
    } = req.body;

    const user = await findUserByPhone(phone);

    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    const match = await bcrypt.compare(
      password,
      user.password
    );

    if (!match) {
      return res.status(401).json({
        message: "Wrong password"
      });
    }

    const token = jwt.sign(
      {
        id: user.id
      },
      process.env.JWT_SECRET
    );

    res.json({
      message: "Login success",
      token,
      user: {
        id: user.id,
        username: user.username,
        phone: user.phone,
        avatar: user.avatar,
        status: user.status
      }
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
});

module.exports = router;
