import React from 'react';

import Task from './Task';
import ImportExport from './ImportExport'

const TaskList = ({tasks, handleChangeComplete, handleChangeOrder, handleImportTasks}) => {
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
            <ImportExport
                tasks={tasks}
                handleImportTasks={handleImportTasks}
            />
        </>
    );
};

export default TaskList;
