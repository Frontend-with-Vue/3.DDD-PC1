import axios from "axios";

const API_URL = "https://randomuser.me/api";

const http = axios.create({
    baseURL: API_URL,
})

export class WinnersApiService {
    getWinners() {
        return http.get('/?results=5')
    }
}