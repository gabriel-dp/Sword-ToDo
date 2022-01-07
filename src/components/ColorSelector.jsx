import React from 'react';
import { BiCheck } from 'react-icons/bi';

import "./styles/ColorSelector.css";

const ColorSelector = ({selected, handleClickColor}) => {
    const colors = ["#7fffd4", "#e02222", "#f2ea4e", "#5bf24e", "#ffffff"];

    return (
        <div className="color-selector">
            {
                colors.map((color) => (
                    <div 
                        className="color-circle" 
                        style={{backgroundColor: `${color}`}}
                        onClick={()=>handleClickColor(color)}
                    >
                        {
                            (selected == color ? <BiCheck/> : <div className="circle-fade"/>)
                        }
                    </div>
                ))
            }
        </div>
    );
}
 
export default ColorSelector;