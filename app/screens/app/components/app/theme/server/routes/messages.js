const express = require("express");

const auth = require("../middleware/auth");

const {
  sendMessage,
  getMessages
} = require("../controllers/messageController");


const router = express.Router();



router.post(
  "/",
  auth,
  sendMessage
);



router.get(
  "/:user1/:user2",
  auth,
  getMessages
);



module.exports = router;
