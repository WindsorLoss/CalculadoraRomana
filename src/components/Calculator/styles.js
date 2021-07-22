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

                &:hover {
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

export const ResultsLog = styled.div`

    padding: 2rem;

    display: flex;
    flex-direction: column;
    height: 29.375rem;
    width: 29.375rem;


    h1 {
        font-size: 2.5rem;
        text-align: center;
        margin-bottom: 2rem;
    }

    ul {
        height: 100%;
        overflow: auto;
        padding-left: 0.5rem;
        margin-bottom: 0.8rem;
    }
    li {
        font-size: 1.8rem;
        margin-left: 1rem;
    }

    div {
        
        /* height: 100%; */
        display: flex;
        justify-content: center;
        align-items: flex-end;

        button {

            height: 2.5rem;
            padding: 0 1rem;
            font-size: 1.2rem;

            background: var(--function-buttons);
            border: 0;
            border-radius: 30px;

            transition: filter 0.2s;

            &:hover {
                filter: brightness(0.8);
            }
        }
        

    }

    p {
        font-size: 1.5rem;
        text-align: center;
        filter: brightness(0.60);
    }

    @media (max-width: 860px) {
        border-top-style: solid;
        border-top-color: white;
        border-top-width: 3px;
        margin-top: 2rem;
    }
    @media (min-width: 860px) {
        border-left-style: solid;
        border-left-color: white;
        border-left-width: 3px;
        margin-left: 2rem;

    }

`