import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import TextareaAutosize from 'react-textarea-autosize';

import Header from './Header.jsx';
import ColorSelector from './ColorSelector.jsx';
import Button from './Button.jsx';

import './styles/TaskDetails.css';

const TaskDetails = ({tasks, handleChangeDescription, handleChangeColor}) => {
    const params = useParams();

    const navigate = useNavigate();
	const handleBackClick = () => {
		navigate('/');
    }

    let description = '';
    let color = '';
    tasks.map(task => {
        if (task.title === params.taskTitle) {
            description = task.description;
            color = task.color;
        }
    });

    const [inputData, setInputData] = useState(description);
    const handleInputChange = (e) => {
        setInputData(e.target.value);
    }

    useEffect(() => {
        handleChangeDescription(params.taskTitle, inputData);
    }, [inputData]);

    const handleClickColor = (color) => {
        handleChangeColor(params.taskTitle, color);
    }


    return ( 
        <>
            <Header text={params.taskTitle}/>
            <ColorSelector 
                selected={color}
                handleClickColor={handleClickColor}
            />
            <TextareaAutosize 
                value={inputData}
                onChange={handleInputChange}
                className='task-description'
                type="text"
            />
            <div className="back-button-container">
                <Button onClick={handleBackClick}>Back</Button>
            </div>
        </>
    );
}
 
export default TaskDetails;