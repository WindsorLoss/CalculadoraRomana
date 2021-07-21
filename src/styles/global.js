import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

    :root{
        font-size: 16px;
        --background: #1B1919;
        --calculator-background: #2d2d2d;
        --shape-color: #AEAEAE;
        --function-buttons: #FF9B26
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
    }

    button {
        cursor: pointer;
    }
`