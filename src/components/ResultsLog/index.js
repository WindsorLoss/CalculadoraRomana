import React from 'react'
import { Container } from './styles'

export function ResultsLog({ logRegister }) {
    return (
        <Container>

                <h1>Histórico</h1>

                {
                    logRegister.length === 0 &&
                    <p>Nenhum histórico disponível</p>
                }

                <ul>
                    {logRegister.map(item => {
                        return <li key={item.id}>{item.conta} = {item.resultado}</li>
                    })}
                </ul>
                
                {
                    logRegister.length > 0 
                    &&  <div>
                            <button onClick={clearLog}>
                                Apagar histórico
                            </button>
                        </div> 
                }

            </Container>
    )
}
