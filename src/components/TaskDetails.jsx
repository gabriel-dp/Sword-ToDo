import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import TextareaAutosize from 'react-textarea-autosize';

import Button from './Button.jsx';
import Header from './Header.jsx';

import './styles/TaskDetails.css';

const TaskDetails = ({tasks, handleChangeDescription}) => {
    const params = useParams();

    const navigate = useNavigate();
	const handleBackClick = () => {
		navigate('/');
    }

    let description = '';
    tasks.map(task => {
        if (task.title === params.taskTitle) {
            description = task.description;
        }
    });

    const [inputData, setInputData] = useState(description);
    const handleInputChange = (e) => {
        setInputData(e.target.value);
    }

    useEffect(() => {
        handleChangeDescription(params.taskTitle, inputData);
    }, [inputData]);

    return ( 
        <>
            <Header text={params.taskTitle}/>
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