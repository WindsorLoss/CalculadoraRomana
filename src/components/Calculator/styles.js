import styled from 'styled-components'

export const Container = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 2rem;

    @media (max-width: 860px) {
        flex-direction: column;
    }
`

export const Calculadora = styled.div`
    height: 29.375rem;
    width: 29.375rem;
    padding: 1rem;

    background: var(--calculator-background);

    border-radius: 30px;  

     
    div{

        display: flex;
        flex-direction: column;

        &.display {
            
            height: 4.375rem;

            background: var(--shape-color);
            border-radius: 30px;

            display: flex;
            justify-content: center;

            margin-top: 0.6rem;

            margin-bottom: 1rem;
            
            p{
                width: 25rem;

                color: white;
                background: transparent;
                border: 0;

                overflow-x: auto;
                overflow-y: hidden;

                font-size: 3rem;
                font-family: serif;
                text-align: center;
                margin: 0 auto;

                &.placeholder {
                    font-size: 2rem;
                    filter: brightness(0.85);
                }
            }
        }

        &.wrapper {

            display: flex;
            flex-direction: row;
            justify-content: center;
            
            margin-top: 1.6rem;

            div.grid {
        
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                grid-column-gap: 0.5rem;
                grid-row-gap: 0.5rem;


            }
        
            button {
                height: 6.25rem;
                width: 6.25rem;
                border-radius: 50px;
            
                font-size: 2rem;

                border: 0;

                transition: filter 0.2s;

                &:hover:enabled {
                    filter: brightness(0.8);
                }
    
                &.function {
                   background: var(--function-buttons);
                }
    
                &.bigger {
                   height: 9.375rem;
                   margin-left: 0.8rem;

                   &:first-child {
                    margin-bottom: 1rem;
                }


               }
            }
        }    
    }


` 