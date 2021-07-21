import styled from 'styled-components'

export const Calculadora = styled.div`
    height: 470px;
    width: 470px;
    padding: 1rem;

    background: var(--calculator-background);

    border-radius: 30px;  

     
    div{

        display: flex;
        flex-direction: column;

        &.display {
            
            height: 70px;

            background: var(--shape-color);
            border-radius: 30px;

            display: flex;
            justify-content: center;

            margin-top: 0.6rem;

            margin-bottom: 1rem;
            
            p {
                color: white;
                font-size: 3rem;
                text-align: center;

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
                height: 100px;
                width: 100px;
                border-radius: 50px;
            
                font-size: 2rem;

                border: 0;

                transition: filter 0.2s;

                &:hover {
                    filter: brightness(0.8);
                }
    
                &.function {
                   background: var(--function-buttons);
                }
    
                &.bigger {
                   height: 150px;
                   margin-left: 0.8rem;

                   &:first-child {
                    margin-bottom: 1rem;
                }


               }
            }
        }    
    }


`  

export const Container = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`