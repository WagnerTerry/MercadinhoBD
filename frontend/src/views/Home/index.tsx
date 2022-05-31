import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import "./style.scss"

export function Home() {
    const [darkMode, setDarkMode] = useState(false)

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
    }, [])

    return (
        <div id="home">
            <header>
                <div></div>
                <h1>Mercadinho Banco de Dados</h1>
                <button onClick={screenDarkMode}>DarkMode</button>
            </header>
            <main>
                <Link to="/users" className='link'>
                    <button>
                        Cadastrar Usuário
                    </button>
                </Link>
            </main>
        </div>
    )
}