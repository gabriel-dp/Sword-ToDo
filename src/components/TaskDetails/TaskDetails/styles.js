import styled from 'styled-components';

export const TaskTitle = styled.input`
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    border: none;
    font-size: 30px;
    width: 100%;
    overflow: hidden; 
    text-overflow: ellipsis;
    font-family: 'HemiHead';

    :focus {
        outline: none;
    }

    @media (max-device-width: 500px) {
        font-size: 70px;
    }
`;

export const TaskConfigsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
`;

export const ButtonsContainer = styled.div`
    display flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
`;

export const DeleteTaskButton = styled.button`
    color: ${props => props.theme.colors.primary};
    border: none;
    background-color: ${props => props.theme.colors.background};
    font-size: 18px;
    cursor: pointer;
    margin: 0 5px;

    :hover {
        color: ${props => props.theme.colors.highlight};
    }

    @media (max-device-width: 500px) {
        font-size: 36px;
        margin: 0 10px;
    }
`;

export const BackButtonContainer = styled.div`
    max-width: 50%;
`;