import axios from 'axios'

const BaseURL = "http://localhost:3333";

export default class APIService{
    static getProducts = async () => {
        const result = await axios.get(`${BaseURL}/products`)
        return result.data
    }

    static removeProduct = async (id: any) => {
        const result = await axios.delete(`${BaseURL}/products/${id}`)
        return result.data
    }
}