 
import axios from "axios";

// Set your token
const myToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmNjYjBhYjVmMTY2OTUzNDk1NWJlODMiLCJlbWFpbCI6ImNoaXNvbUBnbWFpbC5jb20iLCJpYXQiOjE3MjU2MjI1NTcsImV4cCI6MTcyNjIyNzM1N30.aoXun6hXeUQ0nK6LEKKEagMFPg3hdOohzf64f6N7AlQ";
// Set default headers for all Axios requests
axios.defaults.headers.common['Authorization'] = `Bearer ${myToken}`;
axios.defaults.headers.common['Content-Type'] = 'application/json';



export default axios;