import styled from 'styled-components';

export const DescriptionArea = styled.textarea`
    padding: 15px 20px;
    background-color: ${props => props.theme.colors.element};
    border-radius: 10px;
    border: none;
    margin: 15px 0;
    color: ${props => props.theme.colors.text};
    border: none;
    width: 100%;
    min-height: 100px;
    resize: none;
    font-family: 'RobotoMono';
    font-size: 13px;
    overflow: hidden;

    :focus {
        outline: #ddd solid 1px;
    }

    @media (max-device-width: 500px) {
        padding: 30px 40px;
        border-radius: 20px;
        margin: 30px 0;
        min-height: 200px;
        font-size: 26px;
    
        :focus {
            outline: #ddd solid 2px;
        }
    }
`;