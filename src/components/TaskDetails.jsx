import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import TextareaAutosize from 'react-textarea-autosize';
import { BiRedo, BiCheck, BiTrashAlt } from 'react-icons/bi'

import Header from './Header.jsx';
import ColorSelector from './ColorSelector.jsx';
import Button from './Button.jsx';

import './styles/TaskDetails.css';

const TaskDetails = ({tasks, handleChangeDescription, handleChangeColor, handleChangeComplete, handleTaskDelete}) => {
    //gets the name of the task to be edited
    const params = useParams();
    const taskName = params.taskTitle;

    //gets the task data with the name
    let description = '';
    let color = '';
    let completed;
    tasks.map(task => {
        if (task.title === taskName) {
            description = task.description;
            color = task.color;
            completed = task.completed;
        }
    });
    
    //changes task description
    const [inputData, setInputData] = useState(description);
    useEffect(() => {
        handleChangeDescription(taskName, inputData);
    }, [inputData]);
    const handleInputChange = (e) => {
        setInputData(e.target.value);
    }
    
    //changes the selected color
    const handleClickColor = (color) => {
        handleChangeColor(taskName, color);
    }
    
    //navigates back to home
    const navigate = useNavigate();
    const backToHome = () => {
        navigate('/');
    }

    return ( 
        <>
            <Header text={taskName}/>
            <div className="task-configs-container">
                <ColorSelector 
                    selected={color}
                    handleClickColor={handleClickColor}
                />
                <div className="buttons-container">
                    <button className='complete-task-button' onClick={() => handleChangeComplete(taskName)}>
                        {completed ? (<BiRedo/>) : (<BiCheck/>)}
                    </button>
                    <button className='delete-task-button' onClick={() => {handleTaskDelete(taskName); backToHome();}}>
                        <BiTrashAlt/>
                    </button>
                </div>
            </div>
            <TextareaAutosize 
                value={inputData}
                onChange={handleInputChange}
                className='task-description'
                type="text"
            />
            <div className="back-button-container">
                <Button onClick={backToHome}>Back</Button>
            </div>
        </>
    );
}
 
export default TaskDetails;