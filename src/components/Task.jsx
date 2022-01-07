import React from 'react';
import { CgClose, CgCheckO } from 'react-icons/cg';
import { useNavigate } from 'react-router-dom';

import './styles/Task.css';

const Task = ({task, handleTaskClick, handleTaskDelete}) => {
	const navigate = useNavigate();

	const handleTaskDetailsClick = () => {
		navigate(`/${task.title}`);
	}

	return (
		<>
			<div 
				className='task-container' 
				style={task.completed ? 
					{color:'gray', textDecoration: 'line-through'} : 
					{borderLeft: '6px solid aquamarine'}
				}
			>
				<div 
					className='task-title' 
					onClick={handleTaskDetailsClick} 
					style={task.completed ? {marginLeft: 6} : {}}
				>
					<p>{task.title}</p>
				</div>
				<div className="buttons-container">
					<button className='complete-task-button' onClick={() => handleTaskClick(task.id)}>
						<CgCheckO/>
					</button>
					<button className='delete-task-button' onClick={() => handleTaskDelete(task.id)}>
						<CgClose/>
					</button>
				</div>
			</div>
		</>
	);
}
 
export default Task;