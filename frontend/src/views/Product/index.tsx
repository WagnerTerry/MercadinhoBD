import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import APIService from "../../services/api";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
    name: yup.string().required()
}).required();

import "./style.scss"

export function Product() {
    const { register, handleSubmit, reset } = useForm({
        resolver: yupResolver(schema)
    });

    async function addProduct(data: any) {
        try {
            await APIService.insertProduct(data)
            toast.success("Produto criado com sucesso")
            reset()
            console.log("produto cadastrado: ", data)
        } catch (e) {
            toast.error("Erro ao criar produto")
            console.log("Ocorreu um erro ao criar produto", e)
        }
    }

    return (
        <div id="products">
            <Link to="/">
                <button>Voltar para Home</button>
            </Link>
            <div className='register-products'>
                <h1>Cadastro de Produto</h1>
                <form onSubmit={handleSubmit(addProduct)}>
                    <input type="text"
                        placeholder='Nome do produto'
                        {...register("name")}
                    />
                    <input type="text"
                        placeholder='Descrição'
                        {...register("description")}

                    />
                    <input type="text"
                        placeholder='Imagem'
                        {...register("image")}
                    />
                    <input type="submit" value={"Salvar"} />
                </form>
            </div>
        </div >
    )
}