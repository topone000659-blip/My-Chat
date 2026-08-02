const pool = require("../config/database");



const getChatList = async (req,res)=>{

  try{

    const userId = req.user.id;


    const result = await pool.query(

      `
      SELECT DISTINCT
      CASE
        WHEN sender_id=$1 THEN receiver_id
        ELSE sender_id
      END AS user_id

      FROM messages

      WHERE sender_id=$1
      OR receiver_id=$1
      `,

      [userId]

    );


    res.json(result.rows);


  }catch(error){

    res.status(500).json({

      message:error.message

    });

  }

};



module.exports = {

  getChatList

};

