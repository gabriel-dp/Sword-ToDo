import React, { useState, useContext } from 'react';

import { TasksContext } from '../../../App';

import MainButton from '../../Button';

import { AddTaskContainer, MainInput } from './styles'

const AddTask = () => {
    const tasksData = useContext(TasksContext);

    const [inputData, setInputData] = useState('');

    const handleInputChange = (e) => {
        setInputData((e.target.value).replace(/[^a-zA-ZÀ-ú\d-+!$()" "]/, ''));
    }

    //subimits the input data
    const handleAddTaskClick = () => {
        tasksData.TaskAdd(inputData);
        setInputData('');
    }

    //submits task with the Enter key
    const handleKeypress = e => {
        if (e.key === 'Enter') handleAddTaskClick();
    };

    return (
        <TasksContext.Provider value={tasksData}>
            <AddTaskContainer>
                <MainInput 
                    onChange={handleInputChange} 
                    onKeyPress={handleKeypress}
                    value={inputData} 
                    className="add-task-input" 
                    type="text"
                />
                <MainButton onClick={handleAddTaskClick}>
                    Add
                </MainButton>
            </AddTaskContainer>
        </TasksContext.Provider>
    );
}
 
export default AddTask;