import { useEffect, useState } from 'react'
import { getCharacters } from '../../api/character'


function RickAndMorty() {
    const [conteudo, setConteudo] = useState(<>Carregando</>)

    async function TranformaEmLista() {
        const todosPersonagens = await getCharacters()

        return todosPersonagens.map(personagem =>
            <div className='card char' key={personagem.id}>
                <img src={personagem.image} alt={`Foto de ${personagem.name}`} />
                <h2>{personagem.name}</h2>

                <div className='char-info'>
                    <span><b>Espécie: </b> {personagem.species}</span>
                    <span><b>Gênero: </b> {personagem.gender}</span>
                </div>
                <div>
                    <div className='lista-secundaria'>
                            <b>Participações: </b> {
                            personagem.episode.map((t) =>
                                t.split("/").pop()).join(", ") 
                            //.pop() pega o ultimo pedaco de cara item do arrey
                            //.join() coloca uma virgula para dividir cada item do arrey
                        }
                    </div>
                    <h5><b>Status: </b> {personagem.status} </h5>
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
            {/* Filtros */}
            <div className='lista-principal'>
                {conteudo}
            </div>
        </main>
    )
}

export default RickAndMorty
