import { Link, useLocation } from "react-router-dom";

import "./style.scss"
import ProductForm from "../../components/ProductForm";
import { useState } from "react";

export function Product() {
    const location = useLocation()
    const _product: any = location.state
    const [products] = useState(_product)

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
                    id={products && products.id ? products.id : null}
                />
            </div>
        </div >
    )
}