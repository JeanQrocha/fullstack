import { Link } from 'react-router-dom'
import './style.css'

export default function Header() {
    return (
        <header>
            <h1>Lista de Usuários API</h1>
            <nav>
                <Link to='/'>
                    <button>
                        Inicio
                    </button>
                </Link>
                <Link to='/Users'>
                    <button>
                       Usuarios
                    </button>
                </Link>
            </nav>
        </header>
    )
}