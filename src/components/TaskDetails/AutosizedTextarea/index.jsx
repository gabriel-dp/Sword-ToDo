import React, { useState, useEffect, useRef, useContext } from 'react';

import { TasksContext } from '../../../App';

import { DescriptionArea } from './styles';

const AutosizedTextarea = ({taskTitle, taskDescription}) => {   
    const tasksData = useContext(TasksContext);
    
    const [inputData, setInputData] = useState(taskDescription);
    const textareaRef = useRef(null);
    
    const handleInputChange = (e) => {
        setInputData(e.target.value); //remove broken chars and extra spaces
    }

    useEffect(() => {
        tasksData.ChangeDescription(taskTitle, inputData);

        textareaRef.current.style.height = "0px"; //reset textarea height
        textareaRef.current.style.height = textareaRef.current.scrollHeight + "px"; //redefines textarea height
    }, [inputData]);

    return (
        <TasksContext.Provider value={tasksData}>
            <DescriptionArea
                ref={textareaRef}
                value={inputData}
                onChange={handleInputChange}
                className='task-description'
                type="text"
                placeholder='Description'
            />
        </TasksContext.Provider>
    );
}

export default AutosizedTextarea;