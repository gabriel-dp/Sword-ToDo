import React, { useContext } from 'react';

import { TasksContext } from '../../App'; 

import Header from './Header';
import AddTask from './AddTask';
import Task from './Task';
import ManageTasks from './ManageTasks'

const TaskList = () => {
    const tasksData = useContext(TasksContext);

    return (
        <TasksContext.Provider value={tasksData}>
            <Header text="Sword-ToDo"/>
            <AddTask/>
            {
                tasksData.tasks.map((task, index) => (
                    <Task 
                        index={index}
                        key={task.id}
                        task={task}
                    />
                ))
            }
            <ManageTasks/>
        </TasksContext.Provider>
    );
};

export default TaskList;
