import { Link } from "react-router-dom";

import "./style.scss"

export function Product() {
    return (
        <div id="products">
            <Link to="/">
                <button>Voltar para Home</button>
            </Link>
            <div className='register-products'>
                <h2>Cadastro de Produto</h2>
                <form>
                    <input type="text"
                        name="product_name"
                        placeholder='Nome do produto'
                    />
                    <input type="text"
                        name="product_description"
                        placeholder='Descrição'
                    />
                    <input type="text"
                        name="product_image"
                        placeholder='Imagem'
                    />
                </form>
            </div>
        </div>
    )
}