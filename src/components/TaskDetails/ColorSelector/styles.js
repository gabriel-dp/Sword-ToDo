import styled from 'styled-components';

export const ColorSelectorContainer = styled.div`
    height: 20px;
    width: 100%;
    margin: 10px 0;
    display: flex;
    flex-direction: row;
    overflow: visible;

    @media (max-device-width: 500px) {
        height: 40px;
        margin: 20px 0;
    }
`;

export const ColorCircle = styled.div`
    height: 20px;
    width: 20px;
    border-radius: 50%;
    margin-right: 5px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 17px;
    color: ${props => props.circleColor === props.theme.colors.primary ? props.theme.colors.gray : props.theme.colors.black};
    background-color: ${props => props.circleColor};

    @media (max-device-width: 500px) {
        height: 40px;
        width: 40px;
        margin-right: 10px;
        font-size: 34px;
    }
`;

export const ColorCircleFade = styled.div`
    background-color: ${props => props.theme.colors.element};
    opacity: 15%;
    height: 100%;
    width: 100%;
    border-radius: 50%;
    transition: all 0.2s ease; 

    :hover {
        background-color: transparent;
        border: 2px solid ${props => props.theme.colors.text};
    }
`;