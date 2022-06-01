import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import APIService from '../../services/api';

import "./style.scss"

interface ProductContentProps {
    name: string;
    description: string;
    image?: string
}

export function Home() {
    const [products, setProducts] = useState([])

    function screenDarkMode() {
        let element = document.body;
        let _darkmode = element.classList.toggle("darkmode")
        localStorage.setItem("darkmode", "ativo")
        if (_darkmode === false) {
            localStorage.removeItem("darkmode")
        }
    }

    useEffect(() => {
        let _darkmode = localStorage.getItem("darkmode")
        if (_darkmode === "ativo") {
            document.body.className = "darkmode"
        }

        const showProducts = async () => {
            const _products = await APIService.getProducts()
            setProducts(_products)
        }

        showProducts()
    }, [])

    return (
        <div id="home">
            <header>
                <div></div>
                <h1>Mercadinho Banco de Dados</h1>
                <button onClick={screenDarkMode}>DarkMode</button>
            </header>
            <main>
                <>
                    <Link to="/users" className='link'>
                        <button>
                            Cadastrar Usuário
                        </button>
                    </Link>

                    <h3>Produtos</h3>
                    <div className='show-products'>
                        <table>
                            <tr>
                                <th>Nome</th>
                                <th>Descrição</th>
                                <th>Image</th>
                                <th>Ações</th>
                            </tr>
                            {products.map((prod: ProductContentProps) => (
                                <tr>
                                    <td>{prod.name}</td>
                                    <td>{prod.description}</td>
                                    <td>{prod.image}</td>
                                    <td><button>Deletar</button></td>
                                </tr>
                            ))}
                        </table>
                    </div>
                </>
            </main>
        </div>
    )
}