import React from 'react';

import Header from './Header';
import AddTask from './AddTask';
import Task from './Task';
import ManageTasks from './ManageTasks'

const TaskList = ({tasks, handleTaskAddition, handleChangeComplete, handleChangeOrder, handleImportTasks, handleDeleteAll}) => {
    return (
        <>
            <Header text="Sword-ToDo"/>
            <AddTask handleTaskAddition={handleTaskAddition}/>
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
