import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import APIService from "../services/api";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
    name: yup.string().required()
}).required();

interface ProductFormProps {
    id?: string;
    name?: string;
    description?: string;
    image?: string
}

export default function ProductForm(props: ProductFormProps) {
    const { register, handleSubmit, reset } = useForm({
        resolver: yupResolver(schema)
    });

    async function addProduct(data: any) {
        if (props.id) {
            changeProduct(props.id, data)
        }
        else {
            try {
                console.log("add product", data)
                await APIService.insertProduct(data)
                toast.success("Produto criado com sucesso")
                reset()
                console.log("produto cadastrado: ", data)
            } catch (e) {
                toast.error("Erro ao criar produto")
                console.log("Ocorreu um erro ao criar produto", e)
            }
        }
    }

    async function changeProduct(id: string, data: ProductFormProps) {
        try {
            await APIService.updateProducts(id, data)
            toast.success("Produto atualizado")
            console.log("Produto atualizado", data)
            //reset()
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
