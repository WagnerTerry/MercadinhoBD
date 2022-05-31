import React, {useState} from 'react'

import "./style.scss"

export function Home(){
    const [darkMode, setDarkMode] = useState(false)

    function screenDarkMode(){
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
        </div>
    )
}