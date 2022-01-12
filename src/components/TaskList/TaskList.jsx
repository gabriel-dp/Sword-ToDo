import React from 'react';

import Task from './Task';
import ManageTasks from './ManageTasks'

const TaskList = ({tasks, handleChangeComplete, handleChangeOrder, handleImportTasks, handleDeleteAll}) => {
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
            <ManageTasks
                tasks={tasks}
                handleImportTasks={handleImportTasks}
                handleDeleteAll={handleDeleteAll}
            />
        </>
    );
};

export default TaskList;
