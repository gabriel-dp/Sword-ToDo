import React, { createContext } from 'react';
import {v4 as uuidv4} from 'uuid';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import usePersistedState from './utils/usePersistedState';

import { ThemeProvider } from 'styled-components'; 
import GlobalStyle from './style/global';
import light from './style/themes/light';
import dark from './style/themes/dark';

import TaskList  from './components/TaskList/TaskList';
import TaskDetails from './components/TaskDetails/TaskDetails';

export const TasksContext= createContext();

const App = () => {
	const [tasks, setTasks] = usePersistedState('tasks', []);

	const TaskAdd = (taskTitle) => {
		const titleFixed = ((taskTitle).replace(/\s+/g, ' ')).trim() //remove extra spaces
		
		if (titleFixed !== '') {
			let isRepeated = false;
			tasks.map(task => {
				if (task.title === titleFixed) {
					isRepeated = true;
				}
				return 0;
			});
			
			const newTasks = [...tasks, {
				title: titleFixed,
				id:	uuidv4(),
				completed: false,
				description: '',
				color: 'default',
				startDate: new Date(),
				endDate: '',
			}];
			
			if (!isRepeated) setTasks(newTasks);
		}
	}

	const TaskDelete = (taskTitle) => {
		const newTasks = tasks.filter(task => task.title !== taskTitle);
		setTasks(newTasks);
	}

	const ChangeCompleteStatus = (taskId) => {
		const newTasks = tasks.map(task => {
			if (task.id === taskId) return { ...task, completed: !task.completed };
			return task;
		});
		
		setTasks(newTasks);
	}
	
	const ChangeOrder = (index, movement) => {

		var newTasks;

		//changes the position of a index on array
		function arraymove(arr, fromIndex, toIndex) {
			var element = arr[fromIndex];
			arr.splice(fromIndex, 1);
			arr.splice(toIndex, 0, element);
			newTasks = arr;
		}

		//moves the index based on movement direction
		if (movement) {
			arraymove(tasks, index, index+1)
		} else {
			arraymove(tasks, index, index-1)
		}

		//resets the tasks to apply the new tasks
		setTasks([]);
		setTasks(newTasks);
	}
	
	const ChangeTitle = (taskTitle, newTaskTitle) => {
		const newTasks = tasks.map(task => {
			if (task.title === taskTitle) {
				return { ...task, title: newTaskTitle};
			}
			return task;
		});

		setTasks(newTasks);
	}

	const ChangeColor = (taskTitle, hex) => {
		const newTasks = tasks.map(task => {
			if (task.title === taskTitle) return { ...task, color: hex === theme.colors.primary ? 'default' : hex};
			return task;
		});

		setTasks(newTasks);
	}

	const ChangeDescription = (taskTitle, text) => {
		const newTasks = tasks.map(task => {
			if (task.title === taskTitle) return { ...task, description: text};
			return task;
		});

		setTasks(newTasks);
	}

	const ChangeDates = (taskTitle, startDate, endDate) => {
		const newTasks = tasks.map(task => {
			if (task.title === taskTitle) return { ...task, startDate: startDate, endDate: endDate};
			return task;
		});

		setTasks(newTasks);
	}

	const ImportTasks = (importedTasks) => {
		let newTasks = importedTasks.map(task => {
			let repeated = false;
			tasks.map(oldTask => {
				if (task.title === oldTask.title) repeated = true;
				return 0;
			})
			if (!repeated) return task;
			return undefined;
		})

		//deletes undefined elements on array of newTasks
		newTasks = newTasks.filter(function(element) {
			return element !== undefined;
		});

		setTasks(tasks.concat(newTasks));
	}

	const DeleteAll = () => {
		setTasks([]);
	}

	const[theme, setTheme] = usePersistedState('theme', dark);
	const ToggleTheme = () => {
		setTheme(theme.title === 'light' ? dark : light);
	}

	return (
		<TasksContext.Provider value={{tasks, TaskAdd, TaskDelete, ChangeOrder, ChangeCompleteStatus, ChangeTitle, ChangeColor, ChangeDescription, ChangeDates, ImportTasks, DeleteAll, ToggleTheme}}>
		<ThemeProvider theme={theme}>
		<GlobalStyle/>
		<BrowserRouter basename={process.env.PUBLIC_URL}>
			<div className='container'>
				<Routes>
					<Route 
						path="/" exact element={<TaskList/>} 
					/>
					<Route
						path="/:taskTitle" exact element={<TaskDetails/>}
					/>
				</Routes>
			</div>
		</BrowserRouter>
		</ThemeProvider>
		</TasksContext.Provider>
	);
}

export default App;