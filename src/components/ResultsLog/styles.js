import styled from 'styled-components'

export const Container = styled.div`

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

        list-style-type: initial;
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