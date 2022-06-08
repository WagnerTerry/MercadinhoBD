import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import APIService from "../services/api";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useEffect, useState } from "react";

const schema = yup.object({
    name: yup.string().required()
}).required();

interface ProductFormProps {
    id?: string;
    name?: string;
    description?: string;
    image?: string
}

//const [products, setProducts] = useState([] as any)

export default function ProductForm(props: ProductFormProps) {
    const { register, handleSubmit, reset } = useForm({
        resolver: yupResolver(schema)
    });

    async function addProduct(data: any) {
        if (!data.id) {
            try {
                console.log("add product")
                await APIService.insertProduct(data)
                toast.success("Produto criado com sucesso")
                reset()
                console.log("produto cadastrado: ", data)
            } catch (e) {
                toast.error("Erro ao criar produto")
                console.log("Ocorreu um erro ao criar produto", e)
            }
        }
        else {
            changeProduct(data.id, data)
        }
    }

    async function changeProduct(id: string, data: string) {
        try {
            console.log("update entrou")
            await APIService.updateProducts(data)
            toast.success("Produto atualizado")
            console.log("atualizado", data)
            reset()
        } catch (e) {
            toast.error("Erro ao atualizar produto")
            console.log("Ocorreu um erro ao atualizar produto")
        }
    }
    return (

        <form onSubmit={handleSubmit(addProduct)}>
            <input type="text"
                placeholder='Nome do produto'
                defaultValue={props.name}
                {...register("name")}
            />
            <input type="text"
                placeholder='Descrição'
                defaultValue={props.description}
                {...register("description")}

            />
            <input type="text"
                placeholder='Imagem'
                defaultValue={props.image}
                {...register("image")}
            />
            <input type="submit" value={"Salvar"} />
        </form>
    )
}
