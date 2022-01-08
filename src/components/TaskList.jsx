import React from 'react';

import Task from './Task.jsx'

const TaskList = ({tasks, handleChangeComplete, handleChangeOrder}) => {
    if(tasks) {
        return (
            <>
                {
                    tasks.map((task, index) => (
                        <Task 
                            index={index}
                            key={task.id}
                            task={task} 
                            handleChangeComplete={handleChangeComplete}
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
