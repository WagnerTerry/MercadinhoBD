import { Link, useLocation } from "react-router-dom";
// import { toast } from "react-toastify";
// import { useForm } from "react-hook-form";
// import APIService from "../../services/api";
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as yup from "yup";

import "./style.scss"
import ProductForm from "../../components/ProductForm";
import { useState } from "react";

interface ProductFormEditProps {
    id?: string;
    name?: string;
    description?: string;
    image?: string
}

// function handleChange(e) {
//     const {value} = e.target
//     set
// }

// const schema = yup.object({
//     name: yup.string().required()
// }).required();

export function Product() {
    const location = useLocation()
    const _product: any = location.state
    const [products, setProducts] = useState(_product)
    //console.log("product", location.state)

    // const { register, handleSubmit, reset } = useForm({
    //     resolver: yupResolver(schema)
    // });

    // async function addProduct(data: any) {
    //     try {
    //         await APIService.insertProduct(data)
    //         toast.success("Produto criado com sucesso")
    //         reset()
    //         console.log("produto cadastrado: ", data)
    //     } catch (e) {
    //         toast.error("Erro ao criar produto")
    //         console.log("Ocorreu um erro ao criar produto", e)
    //     }
    // }

    return (
        <div id="products">
            <Link to="/">
                <button>Voltar para Home</button>
            </Link>
            <div className='register-products'>
                <h1>Cadastro de Produto</h1>
                <ProductForm
                    name={products && products ? products.name : null}
                    description={products && products.description ? products.description : null}
                    image={products && products.image ? products.image : null}
                />
            </div>
        </div >
    )
}