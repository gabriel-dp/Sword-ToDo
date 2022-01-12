import React from 'react';
import { BiCheck } from 'react-icons/bi';

import "./styles/ColorSelector.css";

const ColorSelector = ({selected, handleClickColor}) => {
    const colors = ["#f24e4e", "#f29b4e",  "#f2ea4e", "#5bf24e", "#7fffd4", "#4e5cf2", "#bb4ef2", "#f24edf", "#ffffff"];

    return (
        <div className="color-selector">
            {
                colors.map((color) => (
                    <div 
                        key={color}
                        className="color-circle" 
                        style={{backgroundColor: `${color}`}}
                        onClick={()=>handleClickColor(color)}
                    >
                        {
                            (selected === color ? <BiCheck/> : <div className="circle-fade"/>)
                        }
                    </div>
                ))
            }
        </div>
    );
}
 
export default ColorSelector;