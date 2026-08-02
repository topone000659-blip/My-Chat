const pool = require("../config/database");


const createUser = async (
  username,
  phone,
  password
) => {

  const result = await pool.query(

    `INSERT INTO users
    (username, phone, password)
    VALUES ($1,$2,$3)
    RETURNING *`,

    [
      username,
      phone,
      password
    ]

  );


  return result.rows[0];

};



const findUserByPhone = async (phone) => {

  const result = await pool.query(

    `SELECT * FROM users
     WHERE phone=$1`,

    [phone]

  );


  return result.rows[0];

};



module.exports = {
  createUser,
  findUserByPhone
};

