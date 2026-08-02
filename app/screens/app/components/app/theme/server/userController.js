const pool = require("../config/database");



const getProfile = async (req,res)=>{

  try{

    const userId = req.user.id;


    const result = await pool.query(

      `
      SELECT id, username, phone, avatar, status, created_at
      FROM users
      WHERE id=$1
      `,

      [userId]

    );


    if(result.rows.length === 0){

      return res.status(404).json({

        message:"User not found"

      });

    }


    res.json(result.rows[0]);


  }catch(error){

    res.status(500).json({

      message:error.message

    });

  }

};




const updateProfile = async(req,res)=>{

  try{

    const userId = req.user.id;


    const {
      username,
      avatar,
      status
    } = req.body;



    const result = await pool.query(

      `
      UPDATE users
      SET
      username=$1,
      avatar=$2,
      status=$3

      WHERE id=$4

      RETURNING id, username, phone, avatar, status
      `,

      [
        username,
        avatar,
        status,
        userId
      ]

    );


    res.json(result.rows[0]);


  }catch(error){

    res.status(500).json({

      message:error.message

    });

  }

};



module.exports = {

  getProfile,

  updateProfile

};

