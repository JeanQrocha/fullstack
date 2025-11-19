import { Link } from 'react-router-dom'
import './style.css'

export default function Header() {
    return (
        <header>
            <h1>Minha API</h1>
            <nav>
                <Link to='/'>
                    <button>
                        Inicio
                    </button>
                </Link>
                <Link to='/rick-and-morty'>
                    <button>
                        API Rick and Morty
                    </button>
                </Link>
                <Link to='/Users'>
                    <button>
                        API Usuarios
                    </button>
                </Link>
            </nav>
        </header>
    )
}