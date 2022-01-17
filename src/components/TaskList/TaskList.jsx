import React from 'react';

import Header from './Header';
import AddTask from './AddTask';
import Task from './Task';
import ManageTasks from './ManageTasks'

const TaskList = ({tasks, handleTaskAddition, handleChangeComplete, handleChangeOrder, handleImportTasks, handleDeleteAll, toggleTheme, theme}) => {
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
                toggleTheme={toggleTheme}
                theme={theme}
            />
        </>
    );
};

export default TaskList;
