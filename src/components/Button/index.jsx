import React from 'react';

import { Button } from './styles';

const MainButton = ({children, onClick}) => {
    return (
        <Button onClick={onClick}>
            {children}
        </Button>
    );
}
 
export default MainButton;