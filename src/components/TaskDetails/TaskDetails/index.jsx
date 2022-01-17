import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';

import ColorSelector from '../ColorSelector';
import AutosizedTextarea from '../AutosizedTextarea';
import Button from '../../Button';
import StartEndDate from '../StartEndDate';

import { TaskTitle, TaskConfigsContainer, ButtonsContainer, DeleteTaskButton, BackButtonContainer } from './styles';

const TaskDetails = ({tasks, handleChangeDescription, handleChangeColor, handleTaskDelete, handleChangeDates, handleChangeTitle}) => {
    
    //gets the name of the task to be edited
    const params = useParams();
    const taskName = (params.taskTitle).replace(/[_]/g, ' ');

    //gets the task data with the name
    var title, description, color, initialStartDate, initialEndDate = '';
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
            <AutosizedTextarea
                taskTitle={title}
                description={description}
                handleChangeDescription={handleChangeDescription}
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
        </>
    );
}
 
export default TaskDetails;