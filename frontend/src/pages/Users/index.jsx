import { useEffect, useState } from 'react'
import { getUsers } from '../../api/users'
import { Link } from 'react-router-dom'

function Users() {
    const [conteudo, setConteudo] = useState(<>Carregando</>)

    async function TranformaEmLista() {
        const todosUsuarios = await getUsers()

        console.log(todosUsuarios)

        return todosUsuarios.map(user => 
            <div className='card char' key={user.id}>
                <label>{user.name}</label>
                <label>{user.email}</label>
                <div className='actions'>
                    <button>Alterar</button>
                    <button>Deletar</button>
                </div>

            </div>
        )
    }

    useEffect(() => {
        async function carregar() {
            setConteudo(
                await TranformaEmLista()
            )
        }
        carregar()
    }, [])

    return (
        <main>
      
            <div className='list-users'>
                <Link to='/create/user'>
                <button>Criar</button>
                </Link>
                <div>
                    <label>Nome</label>
                    <label>Email</label>
                    <label>Ações</label>
                </div>
                {conteudo}
            </div>
        </main>
    )
}

export default Users
