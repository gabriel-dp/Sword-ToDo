import styled from 'styled-components';

export const TaskDetailsContainer = styled.div`
    textarea {
        padding: 15px 20px;
        background-color: #444;
        border-radius: 10px;
        border: none;
        margin: 15px 0;
        color:ghostwhite;
        border: none;
        width: 100%;
        min-height: 100px;
        resize: none;
        font-family: 'RobotoMono';
        font-size: 13px;
    }

    textarea:focus {
        outline: #ddd solid 1px;
    }

    @media (max-device-width: 500px) {
        textarea {
            padding: 30px 40px;
            border-radius: 20px;
            margin: 30px 0;
            min-height: 200px;
            font-size: 20px;
        }
    
        textarea:focus {
            outline: #ddd solid 2px;
        }
    }
`;

export const TaskTitle = styled.input`
    background-color: #222;
    color: white;
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
    color: aquamarine;
    border: none;
    background-color: #222;
    font-size: 18px;
    cursor: pointer;
    margin: 0 5px;

    :hover {
    color:white
    }

    @media (max-device-width: 500px) {
        font-size: 36px;
        margin: 0 10px;
    }
`;

export const DescriptionTextArea = styled.textarea`
    padding: 15px 20px;
    background-color: #444;
    border-radius: 10px;
    border: none;
    margin: 15px 0;
    color:ghostwhite;
    border: none;
    width: 100%;
    min-height: 100px;
    resize: none;
    font-family: 'RobotoMono';
    font-size: 13px;

    :focus {
    outline: #ddd solid 1px;
    }
`;

export const BackButtonContainer = styled.div`
    max-width: 50%;
`;