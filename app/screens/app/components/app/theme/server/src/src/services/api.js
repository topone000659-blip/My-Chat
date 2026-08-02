import axios from "axios";


const API = axios.create({

  baseURL: "http://YOUR_SERVER_IP:3000"

});


export default API;

