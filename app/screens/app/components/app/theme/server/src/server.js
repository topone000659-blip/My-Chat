require("dotenv").config();

const http = require("http");

const app = require("./app");

const { Server } = require("socket.io");

const chatSocket = require("./sockets/chat");


const PORT = process.env.PORT || 3000;



const server = http.createServer(app);



const io = new Server(server, {

  cors: {

    origin: "*"

  }

});



chatSocket(io);



server.listen(PORT, ()=>{

  console.log(
    `My Chat Server running on port ${PORT}`
  );

});
