import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Draggable from 'react-draggable';
import { FaRegDotCircle, FaRegCircle, FaStream} from 'react-icons/fa';

import { TaskContainer, 
	TaskTitleContainer,
	ButtonsContainer, 
	DescriptionIcon,
	ToogleCompletedButton } from './styles';

const Task = ({index, task, handleChangeComplete, handleChangeOrder}) => {
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
			handleChangeOrder(index, (ui.y > 0));
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
		<Draggable
			axis="y"
			onDrag={handleDrag}
			onStop={handleStopDrag}
			onMouseDown={handleTouchDown}
			bounds={index === 0 ? {top:0} : {}}
			allowAnyClick={true}
			cancel=".toogle-complete-button"
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
					<ToogleCompletedButton className='toogle-complete-button' onClick={(event) => {handleChangeComplete(task.id); event.stopPropagation()}}>
						{task.completed ? <FaRegDotCircle/> : <FaRegCircle/>}
					</ToogleCompletedButton>
				</ButtonsContainer>
			</TaskContainer>
		</Draggable>
	);
}
 
export default Task;