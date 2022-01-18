import styled from 'styled-components';

export const TaskContainer = styled.div`
    background-color: ${props => props.theme.colors.element};
    margin: 8px 0;
    padding: 15px 20px;
    display: flex;
    border-radius: 5px;
    justify-content: space-between;
    align-items: center;
    color: ${props => !props.taskCompleted ? props.theme.colors.text : props.theme.colors.gray};
    text-decoration: ${props => props.taskCompleted ? 'line-through' : 'none'};
    border-left: ${props => !props.taskCompleted ? props.taskColor === 'default' ? `8px solid ${props.theme.colors.primary}` : `8px solid ${props.taskColor}` : '8px solid transparent'};
    cursor: pointer;
    user-select: none;
    transition: background 0.2s ease;

    :hover {
        background-color: ${props => props.theme.colors.highlight};
    }

    @media (max-device-width: 500px) {
        margin: 16px 0;
        padding: 30px 40px;
        border-radius: 10px;
    }
`;

export const TaskTitleContainer = styled.div`
    width: 80%;

    p {
        overflow: hidden; 
        text-overflow: ellipsis;
        user-select: none;
        font-family: 'OpenSans';
        font-size: 14px;
    }

    @media (max-device-width: 500px) {
        p {
            font-size: 35px;
        }
    }
`;

export const ButtonsContainer = styled.div`
    min-width: 20%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

export const DescriptionIcon = styled.div`
    font-size: 15px;
    color: ${props => props.theme.colors.primary};
    margin-right: 7px;

    @media (max-device-width: 500px) {
        font-size: 30px;
        margin: 0 14px;
    }
`;

export const ToggleCompletedButton = styled.button`
    color: ${props => props.theme.colors.primary};
    border: none;
    background-color: transparent;
    font-size: 15px;
    cursor: pointer;
    margin: 0 5px;

    :hover {
        color: ${props => props.theme.colors.text};
    }

    @media (max-device-width: 500px) {
        font-size: 30px;
        margin: 0 10px;
    }
`;