 
import axios from "axios";

// Set your token
const myToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmNjYjBhYjVmMTY2OTUzNDk1NWJlODMiLCJlbWFpbCI6ImNoaXNvbUBnbWFpbC5jb20iLCJpYXQiOjE3MjU2MzY1MTgsImV4cCI6MTcyNjI0MTMxOH0.eSl1SaFZPbfck7C13YGjvyi-iZTMDBdhRTxRS9DD4h8";
// Set default headers for all Axios requests
axios.defaults.headers.common['Authorization'] = `Bearer ${myToken}`;
axios.defaults.headers.common['Content-Type'] = 'application/json';



export default axios;