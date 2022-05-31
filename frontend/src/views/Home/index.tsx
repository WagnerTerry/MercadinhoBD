import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import "./style.scss"

export function Home() {
    const [darkMode, setDarkMode] = useState(false)

    function screenDarkMode() {
        let element = document.body;
        element.classList.toggle("darkmode")
    }

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