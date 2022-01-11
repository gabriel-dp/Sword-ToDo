import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import TextareaAutosize from 'react-textarea-autosize';
import { FaTrash } from 'react-icons/fa';

import Header from '../Header';
import ColorSelector from './ColorSelector';
import Button from '../Button';
import StartEndDate from './StartEndDate';

import './styles/TaskDetails.css';

const TaskDetails = ({tasks, handleChangeDescription, handleChangeColor, handleChangeComplete, handleTaskDelete, handleChangeDates, handleChangeTitle}) => {
    //gets the name of the task to be edited
    const params = useParams();
    const taskName = (params.taskTitle).replace(/[_]/g, ' ');

    //gets the task data with the name
    let title, description, color, initialStartDate, initialEndDate = '';
    let completed = false;
    tasks.map(task => {
        if (task.title === taskName) {
            title = task.title;
            description = task.description;
            color = task.color;
            completed = task.completed;
            initialStartDate = task.startDate;
            initialEndDate = task.endDate;
        }
    });

    //changes task title
    const firstUpdate = useRef(true);
    const [newTaskTitle, setNewTaskTitle] = useState(taskName)
    useEffect(() => {
        if (firstUpdate.current) {
            firstUpdate.current = false;
            return;
        }
        handleChangeTitle(title, newTaskTitle);
        navigate(`/${(newTaskTitle).replace(/[\s]/g, '_')}`)
    }, [newTaskTitle]);
    const handleInputTitleChange = (e) => {
        if (e.target.value !== '') setNewTaskTitle(((e.target.value).replace(/[^a-zA-Z\d-+!$()" "]/, '')).replace(/\s\s/g,' '));
    }
    
    //changes task description
    const [inputData, setInputData] = useState(description);
    useEffect(() => {
        handleChangeDescription(taskName, inputData);
    }, [inputData]);
    const handleTextDescriptionChange = (e) => {
        setInputData(e.target.value); //remove broken chars and extra spaces
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
            <input className='task-title-input' type='text' value={newTaskTitle} onChange={handleInputTitleChange}/>
            <div className="task-configs-container">
                <ColorSelector 
                    selected={color}
                    handleClickColor={handleClickColor}
                />
                <div className="buttons-container">
                    <button className='delete-task-button' onClick={() => {handleTaskDelete(taskName); backToHome();}}>
                        <FaTrash/>
                    </button>
                </div>
            </div>
            <TextareaAutosize 
                value={inputData}
                onChange={handleTextDescriptionChange}
                className='task-description'
                type="text"
            />
            <StartEndDate
                taskName={taskName}
                handleChangeDates={handleChangeDates}
                initialStartDate={initialStartDate}
                initialEndDate={initialEndDate}
            />
            <div className="back-button-container">
                <Button onClick={backToHome}>Back</Button>
            </div>
        </>
    );
}
 
export default TaskDetails;