import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: 0;
    }

    body {
        margin: 0;
        background: ${props => props.theme.colors.background};
        color: ${props => props.theme.colors.text};
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    input,
    textarea,
    button,
    select,
    a {
        -webkit-tap-highlight-color: rgba(0,0,0,0);
    }

    @media (min-device-width: 501px) {
        .container {
            max-width: 500px;
            margin: 30px auto;
            overflow: auto;
            min-height: 250px;
            border: 2px solid ${props => props.theme.colors.background};
            border-radius: 15px;
            padding: 30px;
        }
    }
    
    @media (min-width: 501px) and (min-device-width: 501px) {
        .container {
            max-width: 500px;
            margin: 30px auto;
            overflow: auto;
            min-height: 250px;
            border: 2px solid ${props => props.theme.colors.primary};
            border-radius: 15px;
            padding: 30px;
        }
    }
    
    @media (max-device-width: 500px) {
        .container {
            width: 100%;
            padding: 7%;
            overflow: auto;
            margin: 0 auto;
        }
    }
`