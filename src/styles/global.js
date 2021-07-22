import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

    :root{
        animation-name: teste2;
        animation-duration: 0.5s;
        font-size: 16px;
        
        --background: #1B1919;
        --calculator-background: #2d2d2d;
        --shape-color: #AEAEAE;
        --function-buttons: #FF9B26

    }

    @keyframes teste {
        from {font-size: 16px}
        to {font-size: 10px}
    }
    @keyframes teste2 {
        from {font-size: 10px}
        to {font-size: 16px}
    }

    @media (max-width: 860px) {
        :root{
            animation-name: teste;
            animation-duration: 0.5s;
            font-size: 10px;
        }
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        background: var(--background);
    }

    body {
        -webkit-font-smoothing: antialiased;
        color: white;
    }

    button {
        cursor: pointer;
    }
`