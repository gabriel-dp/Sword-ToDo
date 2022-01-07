import React from 'react';

import './styles/Header.css';

const Header = ({text}) => {
    return (
        <>
            <div className="header-container">
                {text}
            </div>
        </>
    );
}
 
export default Header;