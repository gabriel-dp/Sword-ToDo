import React, { useState } from 'react';

import MainButton from '../../Button';

import { AddTaskContainer, MainInput } from './styles'

const AddTask = ({handleTaskAddition}) => {
    const [inputData, setInputData] = useState('');

    const handleInputChange = (e) => {
        setInputData((e.target.value).replace(/[^a-zA-Z\d-+!$()" "]/, ''));
    }

    //subimits the input data
    const handleAddTaskClick = () => {
        handleTaskAddition(inputData);
        setInputData('');
    }

    //submits task with the Enter key
    const handleKeypress = e => {
        if (e.key === 'Enter') handleAddTaskClick();
    };

    return (
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
    );
}
 
export default AddTask;