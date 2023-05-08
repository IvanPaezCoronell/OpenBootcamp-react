import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/level.enum';

const TaskComponent = ({ task, complete, remove }) => {
	useEffect(
		() => {
			console.log('Created task ');
			return () => {
				console.log(`Task: ${task.name} is going to unmount`);
			};
		},
		[task],
	);

	function taskLevelBadge() {
		switch (task.level) {
			case LEVELS.NORMAL:
				return (
					<h6 className="mb-0">
						<span className="badge bg-primary">
							{task.level}
						</span>
					</h6>
				);
				break;
			case LEVELS.URGENT:
				return (
					<h6 className="mb-0">
						<span className="badge bg-warning">
							{task.level}
						</span>
					</h6>
				);
				break;
			case LEVELS.BLOCKING:
				return (
					<h6 className="mb-0">
						<span className="badge bg-danger">
							{task.level}
						</span>
					</h6>
				);
				break;
			default:
				break;
		}
	}

	function taskIconCompleted() {
		if (task.completed) {
			return (
				<i
					onClick={() => complete(task)}
					className="bi-toggle-on task-action"
					style={{ color: 'green' }}
				/>
			);
		} else {
			return (
				<i
					onClick={() => complete(task)}
					className="bi-toggle-off task-action"
					style={{ color: 'grey' }}
				/>
			);
		}
	}

	const taskCompleted = {
		color: 'green',
		fontWeight: 'bold',
		textDecoration: 'line-through',
	};

	const taskPending = {
		color: 'red',
		fontWeight: 'bold',
	};

	return (
		<tr
			className="fw-normal"
			style={task.completed ? taskCompleted : taskPending}
		>
			<th>
				<span className="ms-2">
					{task.name}
				</span>
			</th>
			<td className="align-middle">
				<span>
					{task.description}
				</span>
			</td>

			<td className="align-middle">
				{taskLevelBadge()}
			</td>

			<td className="align-middle">
				{taskIconCompleted()}

				<i
					className="bi-trash task-action"
					onClick={() => remove(task)}
					style={{ color: 'tomato' }}
				/>
			</td>
		</tr>
	);
};

TaskComponent.propTypes = {
	task: PropTypes.instanceOf(Task).isRequired,
	complete: PropTypes.func.isRequired,
	remove: PropTypes.func.isRequired,
};

export default TaskComponent;
