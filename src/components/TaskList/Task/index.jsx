import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Draggable from 'react-draggable';
import { FaRegDotCircle, FaRegCircle, FaStream} from 'react-icons/fa';

import { TasksContext } from '../../../App'; 

import { TaskContainer, 
	TaskTitleContainer,
	ButtonsContainer, 
	DescriptionIcon,
	ToggleCompletedButton } from './styles';

const Task = ({index, task}) => {
	const tasksData = useContext(TasksContext);

	//disable warning
	const nodeRef = React.useRef(null);

	//navigates to the task description
	const navigate = useNavigate();
	const handleTaskDetailsClick = () => {
		if (allowClick) {
			let urlFixed = '/' + (task.title).replace(/[\s]/g, '_');
			navigate(urlFixed);
		}
	}
	
	//controls task draggable
	const [allowClick, setAllowClick] = useState(false); 					//allow the click on hold a little bit on drag (fix mobile bug)
	const handleDrag = (e, ui) => {
		if (Math.abs(ui.y) >= 60) {
			tasksData.ChangeOrder(index, (ui.y > 0));
		}

		if (allowClick)	setTimeout(() => setAllowClick(false), 250);
	}	

	//returns the container to default position
	const handleStopDrag = (e, ui) => {
		ui.node.style.transform = "translate(0,0)";
		if (allowClick) handleTaskDetailsClick();
	}
	const handleTouchDown = () => {
		setAllowClick(true);
	}

	return (
		<TasksContext.Provider value={tasksData}>
			<Draggable
				axis="y"
				onDrag={handleDrag}
				onStop={handleStopDrag}
				onMouseDown={handleTouchDown}
				bounds={index === 0 ? {top:0} : {}}
				allowAnyClick={true}
				cancel='.toggle-complete-button'
				nodeRef={nodeRef}
			>
				<TaskContainer
					onClick={handleTaskDetailsClick}
					taskCompleted={task.completed}
					taskColor={task.color}
					ref={nodeRef}
				>
					<TaskTitleContainer>
						<p>{task.title}</p>
					</TaskTitleContainer>
					<ButtonsContainer>
						<DescriptionIcon>
							{(task.description !== '') ? <FaStream/> : <></>}
						</DescriptionIcon>
						<ToggleCompletedButton className='toggle-complete-button' onClick={(event) => {tasksData.ChangeCompleteStatus(task.id); event.stopPropagation()}}>
							{task.completed ? <FaRegDotCircle/> : <FaRegCircle/>}
						</ToggleCompletedButton>
					</ButtonsContainer>
				</TaskContainer>
			</Draggable>
		</TasksContext.Provider>
	);
}
 
export default Task;