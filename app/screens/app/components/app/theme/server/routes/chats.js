const express = require("express");

const auth = require("../middleware/auth");

const {
  getChatList
} = require("../controllers/chatController");


const router = express.Router();



router.get(
  "/",
  auth,
  getChatList
);



module.exports = router;




