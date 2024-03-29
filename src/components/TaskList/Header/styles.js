import styled from 'styled-components';

export const HeaderDiv = styled.div`
    width: 100%;
    height: 30px;
    color: ${props => props.theme.title === 'light' ? props.theme.colors.primary : props.theme.colors.text};
    font-size: 30px;
    overflow: hidden; 
    text-overflow: ellipsis;
    font-family: 'HemiHead';

    @media (max-device-width: 500px) {
        height: 80px;
        font-size: 80px;
    }
`;