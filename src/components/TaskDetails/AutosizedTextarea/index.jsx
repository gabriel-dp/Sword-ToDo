import React, { useState, useEffect, useRef } from 'react';

import { DescriptionArea } from './styles';

const AutosizedTextarea = ({taskTitle, taskDescription, handleChangeDescription}) => {   
    const [inputData, setInputData] = useState(taskDescription);
    const textareaRef = useRef(null);
    
    const handleInputChange = (e) => {
        setInputData(e.target.value); //remove broken chars and extra spaces
    }

    useEffect(() => {
        handleChangeDescription(taskTitle, inputData);

        textareaRef.current.style.height = "0px"; //reset textarea height
        textareaRef.current.style.height = textareaRef.current.scrollHeight + "px"; //redefines textarea height
    }, [inputData]);

    return (
        <DescriptionArea
            ref={textareaRef}
            value={inputData}
            onChange={handleInputChange}
            className='task-description'
            type="text"
            placeholder='Description'
        />
    );
}

export default AutosizedTextarea;