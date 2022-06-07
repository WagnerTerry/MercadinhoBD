import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
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
    const navigate = useNavigate()

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

    async function changeProduct(id: string, data: string) {
        try {
            if (id) {
                console.log("update entrou", data)
                navigate("../products", { replace: true, state: data, })
                // await APIService.updateProducts(data)
                // toast.success("Produto atualizado")
                // console.log("atualizado", data)
                //reset()
            }
        } catch (e) {
            toast.error("Erro ao atualizar produto")
            console.log("Ocorreu um erro ao atualizar produto")
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
                    <div className='registration-options'>
                        <Link to="/products" className='link'>
                            <button>
                                Cadastrar Produto
                            </button>
                        </Link>
                        <Link to="/users" className='link'>
                            <button>
                                Cadastrar Usuário
                            </button>
                        </Link>
                    </div>

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
                                    {products.slice(0, 14).map((prod: ProductContentProps, idx: any) => (
                                        <tr key={idx}>
                                            <td>{prod.name}</td>
                                            <td>{prod.description}</td>
                                            <td>{prod.id}</td>
                                            <td>
                                                <button onClick={() => changeProduct(prod.id, products[idx])}>Editar</button>
                                                <button onClick={() => deleteProduct(prod.id)}>Deletar</button>
                                            </td>
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