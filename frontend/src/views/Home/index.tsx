import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import APIService from '../../services/api';

import "./style.scss"

interface ProductContentProps {
    id: string;
    name: string;
    description: string;
    image?: string
}

export function Home() {
    const [products, setProducts] = useState([] as any)

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

    async function addProduct(data: any) {
        try {
            await APIService.insertProduct(data)
            setProducts((prevState: any) => [...prevState, data]);
            toast.success("Produto criado com sucesso")
            console.log("produto cadastrado: ", data)
        } catch (e) {
            toast.error("Erro ao criar produto")
            console.log("Ocorreu um erro ao criar produto", e)
        }
    }

    async function deleteProduct(id: any) {
        try {
            await APIService.removeProduct(id)
            setProducts(products.filter((prod: any) => prod.id !== id))
            toast.success("Produto deletado com sucesso")
        } catch (e) {
            toast.error("Erro ao remover produto")
            console.log("erro ao deletar produto", e)
        }
    }

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
                        {products.length > 1 ?
                            <table>
                                <thead>
                                    <tr>
                                        <th>Nome</th>
                                        <th>Descrição</th>
                                        <th>Image</th>
                                        <th>Ações</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {products.slice(0, 14).map((prod: ProductContentProps, idx: number) => (
                                        <tr key={idx}>
                                            <td>{prod.name}</td>
                                            <td>{prod.description}</td>
                                            <td>{prod.image}</td>
                                            <td><button onClick={() => deleteProduct(prod.id)}>Deletar</button></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            : <span>Não há produtos cadastrados</span>
                        }
                    </div>
                </>
            </main>
        </div>
    )
}