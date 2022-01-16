import React from 'react';
import { BiCheck } from 'react-icons/bi';

import { ColorSelectorContainer, ColorCircle, ColorCircleFade } from './styles'

const ColorSelector = ({selected, handleClickColor}) => {
    const colors = ["#f24e4e", "#f29b4e",  "#f2ea4e", "#5bf24e", "#7fffd4", "#4e5cf2", "#bb4ef2", "#f24edf", "#ffffff"];

    return (
        <ColorSelectorContainer>
            {
                colors.map((color) => (
                    <ColorCircle
                        key={color}
                        style={{backgroundColor: `${color}`}}
                        onClick={()=>handleClickColor(color)}
                    >
                        {
                            (selected === color ? <BiCheck/> : <ColorCircleFade/>)
                        }
                    </ColorCircle>
                ))
            }
        </ColorSelectorContainer>
    );
}
 
export default ColorSelector;