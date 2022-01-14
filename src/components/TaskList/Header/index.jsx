import React from 'react';

import { HeaderDiv } from './styles';

const Header = ({text}) => {
    return (
        <HeaderDiv>
            {text}
        </HeaderDiv>
    );
}
 
export default Header;