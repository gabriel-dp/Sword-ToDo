import React from 'react';

import Task from './Task.jsx'

const TaskList = ({tasks, handleTaskClick, handleTaskDelete}) => {
    if(tasks) {
        return (
            <>
                {
                    tasks.map((task) => (
                        <Task 
                            key={task.id}
                            task={task} 
                            handleTaskClick={handleTaskClick} 
                            handleTaskDelete={handleTaskDelete}
                        />
                    ))
                }
            </>
        );
    }
};

export default TaskList;
