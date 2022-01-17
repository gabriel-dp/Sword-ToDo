import styled from 'styled-components';
import { FaCalendar } from 'react-icons/fa';

export const StartEndContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 30px;

    @media (max-device-width: 500px) {
        margin-bottom: 80px;
    }
`;

export const DateContainer = styled.div`
    width: 100%;
    height: 60px;

    p {
        color: ${props => props.theme.title === 'light' ? props.theme.colors.primary : props.theme.colors.text};
        font-size: 17px;
        font-family: 'HemiHead';
    }

    @media (max-device-width: 500px) {
        height: 120px;

        p {
            font-size: 40px;
        }
    
    }
`;

export const DateSelector = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: ${props => props.theme.colors.element};
    margin-top: 5px;
    width: 90%;
    height: 30px;
    border-radius: 15px;
    padding: 0 15px;
    user-select: none;  

    input {
        background-color: ${props => props.theme.colors.element};
        color: ${props => props.theme.colors.text};
        width: 130px;
        border: none;
        pointer-events: none;
        font-family: 'OpenSans';
        font-size: 14px;
        padding-bottom: 3px;
    }

    input:focus {
        outline: #ddd solid 1px;
    }

    @media (max-device-width: 500px) {
        margin-top: 20px;
        height: 60px;
        border-radius: 30px;
        padding: 0 30px;

        input {
            width: 260px;
            font-size: 30px;
            padding-bottom: 6px;
        }
    }
    
`;

export const StyledFaCalendar = styled(FaCalendar)`
    color: ${props => props.theme.colors.primary};
    font-size: 14px;
    cursor: pointer;
    
    :hover {
        color: ${props => props.theme.colors.text};
    }

    @media (max-device-width: 500px) {
        font-size: 28px;
    }
`;