import axios from "axios";

const API_URL = "https://randomuser.me/api/?results=5";

export const fetchDataWinners = () =>{
    axios.get(API_URL)
        .then(response => {
            return response.data
        }).catch(error =>{
            console.log(error)
        })
}