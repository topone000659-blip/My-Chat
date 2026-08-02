import { io } from "socket.io-client";


const socket = io(
  "http://YOUR_SERVER_IP:3000",
  {
    autoConnect: false
  }
);


export default socket;
