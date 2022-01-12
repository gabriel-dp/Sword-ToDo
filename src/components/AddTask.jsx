import React, { useState } from 'react';

import Button from './Button';

import './styles/AddTask.css';

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
        <div className='add-task-container'>
            <input 
                onChange={handleInputChange} 
                onKeyPress={handleKeypress}
                value={inputData} 
                className="add-task-input" 
                type="text"
            />
            <div className='add-task-button-container'>
                <Button onClick={handleAddTaskClick}>
                    Add
                </Button>
            </div>
        </div>
    );
}
 
export default AddTask;