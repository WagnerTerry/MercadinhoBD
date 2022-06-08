import axios from 'axios'

const BaseURL = "http://localhost:3333";

interface ProductFormEditProps {
    id?: string;
    name?: string;
    description?: string;
    image?: string
}

export default class APIService{
    static getProducts = async () => {
        const result = await axios.get(`${BaseURL}/products`)
        return result.data
    }

    static insertProduct = async (data: string) => {
        const result = await axios.post(`${BaseURL}/products`, data)
        return result.data
    }

    static updateProducts = async (id: string, data: ProductFormEditProps) => {
        const payload = {
            id,
            name: data.name,
            description: data.description,
            image: data.image
        }
        const result = await axios.put(`${BaseURL}/products`, payload)
        return result.data
    }

    static removeProduct = async (id: any) => {
        const result = await axios.delete(`${BaseURL}/products/${id}`)
        return result.data
    }
}