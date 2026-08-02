require("dotenv").config();

const app = require("./app");

const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {

  console.log(`My Chat Server running on port ${PORT}`);

});

