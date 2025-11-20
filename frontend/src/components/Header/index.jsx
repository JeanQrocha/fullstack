import { Link } from 'react-router-dom'
import './style.css'
import { AuthContext } from '../../auth/context';
import { useContext } from 'react';

export default function Header() {
    //pegar o token do localstorage
    const { token } = useContext(AuthContext);
    return (
        <header>
            <h1>Minha API</h1>
            <nav>
                <Link to='/login'>
                    <button>
                        Login
                    </button>
                </Link>
                {/* <Link to='/'>
                    <button>
                        Inicio
                    </button>
                </Link> */}
                
                {   !token
                    ? null
                    : <Link to='/users'>
                        <button>
                            Usuários
                        </button>
                    </Link> }
            </nav>
        </header>
    )
}