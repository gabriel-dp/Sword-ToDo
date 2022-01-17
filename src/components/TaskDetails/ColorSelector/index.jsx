import React, { useContext } from 'react';
import { BiCheck } from 'react-icons/bi';
import { ThemeContext } from 'styled-components';

import { ColorSelectorContainer, ColorCircle, ColorCircleFade } from './styles'

const ColorSelector = ({selected, handleClickColor}) => {

    const theme = useContext(ThemeContext);

    const colors = ["#f24e4e", "#f29b4e",  "#f2ea4e", "#5bf24e", "#7fffd4", "#4e5cf2", "#bb4ef2", "#f24edf", theme.colors.primary];

    return (
        <ThemeContext.Provider value={theme}>
            <ColorSelectorContainer>
                {
                    colors.map((color) => (
                        <ColorCircle
                            key={color}
                            circleColor={color}
                            onClick={() => handleClickColor(color)}
                        >
                            {
                                selected === color ? <BiCheck/> : selected !== 'default' || color !== theme.colors.primary ? <ColorCircleFade/> : <></>
                            } 
                            {
                                selected === 'default' && color === theme.colors.primary ? <BiCheck/> : <></>
                            }
                        </ColorCircle>
                    ))
                }
            </ColorSelectorContainer>
        </ThemeContext.Provider>
    );
}
 
export default ColorSelector;