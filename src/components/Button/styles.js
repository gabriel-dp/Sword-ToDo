import styled from "styled-components";

export const Button = styled.button `
    background-color: ${props => props.theme.colors.primary};
    height: 40px;
    padding: 0 10px;
    border-radius: 5px;
    border: none;
    width: 100%;
    font-size: 16px;
    color: ${ props => props.theme.colors.element };
    font-weight: bold;
    cursor: pointer;
    transition: all 0.2s ease;
    user-select: none;
    font-family: 'HemiHead';

    :hover {
        background-color: ${ props => props.theme.colors.element };
        color: ${props => props.theme.colors.primary};
    }

    @media (max-device-width: 500px) {
        height: 80px;
        padding: 0 20px;
        border-radius: 10px;
        font-size: 32px;
    }
`;