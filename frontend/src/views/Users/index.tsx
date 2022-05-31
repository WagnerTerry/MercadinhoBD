import React from 'react'
import { Link } from 'react-router-dom'

export function Users() {
    return (
        <div id="users">
            <h1>Usuarios</h1>
            <Link to="/">
                <button>Voltar para Home</button>
            </Link>
        </div>
    )
}