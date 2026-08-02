const pool = require("../config/database");
const { v4: uuidv4 } = require("uuid");



const sendMessage = async (req,res)=>{

  try{

    const {
      sender_id,
      receiver_id,
      message
    } = req.body;



    const result = await pool.query(

      `INSERT INTO messages
      (id,sender_id,receiver_id,message)
      VALUES($1,$2,$3,$4)
      RETURNING *`,

      [
        uuidv4(),
        sender_id,
        receiver_id,
        message
      ]

    );


    res.json(result.rows[0]);


  }catch(error){

    res.status(500).json({
      message:error.message
    });

  }

};





const getMessages = async(req,res)=>{

  try{

    const {
      user1,
      user2
    } = req.params;


    const result = await pool.query(

      `SELECT * FROM messages
      WHERE
      (sender_id=$1 AND receiver_id=$2)
      OR
      (sender_id=$2 AND receiver_id=$1)
      ORDER BY created_at ASC`,

      [
        user1,
        user2
      ]

    );


    res.json(result.rows);


  }catch(error){

    res.status(500).json({
      message:error.message
    });

  }

};




module.exports = {
  sendMessage,
  getMessages
};

