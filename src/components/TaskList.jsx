import React from 'react';

import Task from './Task.jsx'

const TaskList = ({tasks, handleTaskClick, handleTaskDelete, handleChangeOrder}) => {
    if(tasks) {
        return (
            <>
                {
                    tasks.map((task, index) => (
                        <Task 
                            index={index}
                            key={task.id}
                            task={task} 
                            handleTaskClick={handleTaskClick} 
                            handleTaskDelete={handleTaskDelete}
                            handleChangeOrder={handleChangeOrder}
                        />
                    ))
                }
            </>
        );
    } else {
        return (
            <>
            </>
        );
    }
};

export default TaskList;
