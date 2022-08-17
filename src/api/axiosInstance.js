import axios from "axios"
import authHeader from "../services/authHeader";


const userItem = "userDonnateurIformationsLanfiatech"
const tokenString = localStorage.getItem(userItem);
const userToken = JSON.parse(tokenString);
const token = userToken?.access




 

//async function axiosInstance (){
   /* return  axios.create({
    baseUrl: "https://donateur.herokuapp.com/",
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + userToken?.token ? userToken?.token : ""
      },
    timeout: 1000,
    withCredentials: true,
    
})*/
const axiosInstance = axios.create({
    baseURL: 'https://apidons.herokuapp.com/',
    headers: token? {"Authorization" : `Bearer ${token}`} :{}
  });

 // return instance;
//}
export default axiosInstance
