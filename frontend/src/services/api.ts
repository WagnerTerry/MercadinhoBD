import axios from 'axios'

const BaseURL = "http://localhost:3333";

export default class APIService{
    static getProducts = async () => {
        const result = await axios.get(`${BaseURL}/products`)
        return result.data
    }
}