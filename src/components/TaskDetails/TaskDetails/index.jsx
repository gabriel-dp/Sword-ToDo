import React, { useState, useEffect, useRef, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';

import { TasksContext } from '../../../App';

import ColorSelector from '../ColorSelector';
import AutosizedTextarea from '../AutosizedTextarea';
import Button from '../../Button';
import StartEndDate from '../StartEndDate';

import { TaskTitle, TaskConfigsContainer, ButtonsContainer, DeleteTaskButton, BackButtonContainer } from './styles';

const TaskDetails = () => {
    const tasksData = useContext(TasksContext);
    
    //gets the name of the task to be edited
    const params = useParams();
    const taskName = (params.taskTitle).replace(/[_]/g, ' ');

    //gets the task data with the name
    var title, description, color, initialStartDate, initialEndDate = '';
    tasksData.tasks.map(task => {
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
        tasksData.ChangeTitle(title, newTaskTitle);
        navigate(`/${(newTaskTitle).replace(/[\s]/g, '_')}`)
    }, [newTaskTitle]);
    const handleInputTitleChange = (e) => {
        if (e.target.value !== '') setNewTaskTitle(((e.target.value).replace(/[^a-zA-ZÀ-ú\d-+!$()" "]/, '')).replace(/\s\s/g,' '));
    }
    
    //changes the selected color
    const handleClickColor = (color) => {
        tasksData.ChangeColor(taskName, color);
    }
    
    //navigates back to home
    const navigate = useNavigate();
    const backToHome = () => {
        navigate('/');
    }

    return ( 
        <TasksContext.Provider value={tasksData}>
            <TaskTitle type='text' value={newTaskTitle} onChange={handleInputTitleChange}/>
            <TaskConfigsContainer>
                <ColorSelector 
                    selected={color}
                    handleClickColor={handleClickColor}
                />
                <ButtonsContainer>
                    <DeleteTaskButton onClick={() => {tasksData.TaskDelete(taskName); backToHome();}}>
                        <FaTrash/>
                    </DeleteTaskButton>
                </ButtonsContainer>
            </TaskConfigsContainer>
            <AutosizedTextarea
                taskTitle={title}
                taskDescription={description}
                handleChangeDescription={tasksData.ChangeDescription}
            />
            <StartEndDate
                taskName={taskName}
                handleChangeDates={tasksData.ChangeDates}
                initialStartDate={initialStartDate}
                initialEndDate={initialEndDate}
            />
            <BackButtonContainer>
                <Button onClick={backToHome}>Back</Button>
            </BackButtonContainer>
        </TasksContext.Provider>
    );
}
 
export default TaskDetails;