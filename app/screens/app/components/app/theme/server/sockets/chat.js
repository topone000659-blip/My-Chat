module.exports = (io) => {


  io.on("connection", (socket) => {


    console.log(
      "User connected:",
      socket.id
    );



    socket.on(
      "joinRoom",
      (userId)=>{

        socket.join(userId);

        console.log(
          "User joined:",
          userId
        );

      }
    );



    socket.on(
      "sendMessage",
      (data)=>{


        io.to(data.receiver_id)
          .emit(
            "receiveMessage",
            data
          );


      }
    );



    socket.on(
      "disconnect",
      ()=>{

        console.log(
          "User disconnected:",
          socket.id
        );

      }
    );


  });


};

