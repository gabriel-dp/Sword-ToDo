import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import TextareaAutosize from 'react-textarea-autosize';
import { FaTrash } from 'react-icons/fa';

import ColorSelector from '../ColorSelector';
import Button from '../../Button';
import StartEndDate from '../StartEndDate';

import { TaskDetailsContainer, TaskTitle, TaskConfigsContainer, ButtonsContainer, DeleteTaskButton, BackButtonContainer } from './styles';

const TaskDetails = ({tasks, handleChangeDescription, handleChangeColor, handleChangeComplete, handleTaskDelete, handleChangeDates, handleChangeTitle}) => {
    
    //gets the name of the task to be edited
    const params = useParams();
    const taskName = (params.taskTitle).replace(/[_]/g, ' ');

    //gets the task data with the name
    let title, description, color, initialStartDate, initialEndDate = '';
    tasks.map(task => {
        if (task.title === taskName) {
            title = task.title;
            description = task.description;
            color = task.color;
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
        <TaskDetailsContainer>
            <TaskTitle type='text' value={newTaskTitle} onChange={handleInputTitleChange}/>
            <TaskConfigsContainer>
                <ColorSelector 
                    selected={color}
                    handleClickColor={handleClickColor}
                />
                <ButtonsContainer>
                    <DeleteTaskButton onClick={() => {handleTaskDelete(taskName); backToHome();}}>
                        <FaTrash/>
                    </DeleteTaskButton>
                </ButtonsContainer>
            </TaskConfigsContainer>
            <TextareaAutosize 
                value={inputData}
                onChange={handleTextDescriptionChange}
                className='task-description'
                type="text"
                placeholder='Description'
            />
            <StartEndDate
                taskName={taskName}
                handleChangeDates={handleChangeDates}
                initialStartDate={initialStartDate}
                initialEndDate={initialEndDate}
            />
            <BackButtonContainer>
                <Button onClick={backToHome}>Back</Button>
            </BackButtonContainer>
        </TaskDetailsContainer>
    );
}
 
export default TaskDetails;