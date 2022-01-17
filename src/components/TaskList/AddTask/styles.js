import styled from 'styled-components';

export const AddTaskContainer = styled.div`
    margin: 20px 0;
    width: 100%;
    display: flex;

    @media (max-device-width: 500px)  {
        margin: 40px 0;
    }
`;

export const MainInput = styled.input`
    width: 300%;
    height: 40px;
    padding: 0 15px;
    border-radius: 5px;
    border: none;
    background-color: ${props => props.theme.colors.element};
    font-size: 16px;
    color: ${props => props.theme.colors.text};
    font-family: 'OpenSans';
    margin-right: 10px;

    :focus {
        outline: #ddd solid 1px;
    }

    @media (max-device-width: 500px)  {
        height: 80px;
        padding: 0 30px;
        border-radius: 10px;
        font-size: 35px;
        margin-right: 20px;

        :focus {
            outline: #ddd solid 2px;
        }
    }
`;