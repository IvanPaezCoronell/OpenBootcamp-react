import React, { useEffect, useState } from 'react';
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/level.enum';
import TaskComponent from '../pure/TaskComponent';
import '../../styles/task.scss';
import TaskForm from '../pure/forms/taskForm';

const TaskList = () => {
	const defaultTask = new Task(
		'Angular',
		'Default description',
		true,
		LEVELS.URGENT,
	);

	const defaultTask1 = new Task(
		'React',
		'Default description',
		false,
		LEVELS.NORMAL,
	);

	const defaultTask2 = new Task(
		'Next.js',
		'Default description',
		true,
		LEVELS.BLOCKING,
	);

	// Estado del componente
	const [tasks, setTasks] = useState([defaultTask, defaultTask1, defaultTask2]);
	const [loading, setLoading] = useState(true);

	// Control del ciclo de vida
	useEffect(
		() => {
			console.log('Task state has been modified');

			setTimeout(() => {
				setLoading(false);
			}, 2000);
			return () => {
				console.log('TaskList component is going to unmount...');
			};
		},
		[tasks],
	);

	function completedTask(task) {
		console.log('Completed this task: ', task);
		const index = tasks.indexOf(task);
		const temTasks = [...tasks];
		temTasks[index].completed = !temTasks[index].completed;

		setTasks(temTasks);
	}

	function deleteTask(task) {
		console.log('Deleted this task: ', task);
		const index = tasks.indexOf(task);
		const temTasks = [...tasks];
		temTasks.splice(index, 1);
		setTasks(temTasks);
	}

	function addTask(task) {
		console.log('Deleted this task: ', task);

		const temTasks = [...tasks];
		temTasks.push(task);
		setTasks(temTasks);
	}

	const Table = () => {
		return (
			<table>
				<thead>
					<tr>
						<th scope="col">Title</th>
						<th scope="col">Description</th>
						<th scope="col">Priority</th>
						<th scope="col">Actions</th>
					</tr>
				</thead>
				<tbody>
					{/* Aplicar un FOR/MAP para renderizar una lista */}

					{tasks.map((task, index) => {
						return (
							<TaskComponent
								key={index}
								task={task}
								complete={completedTask}
								remove={deleteTask}
							>
								{' '}
							</TaskComponent>
						);
					})}
				</tbody>
			</table>
		);
	};

	let tasksTable;

	if (tasks.length > 0) {
		tasksTable = <Table />;
	} else {
		tasksTable = (
			<div>
				<h3>There are no task to show</h3>
				<h5>Please, create one</h5>
			</div>
		);
	}

	const loadingStyle = {
		color: 'gray',
		fontWidth: 'bold',
	};

	return (
		<div>
			<TaskForm add={addTask} length={tasks.length} />
			<div className="col-12">
				<div className="card">
					<div className="card-header p-3">
						<h5>Your Task:</h5>
					</div>
					<div
						className="card-body"
						dta-mdb-perfect-scrollbar="true"
						style={{ position: 'relative', height: '40px' }}
					/>

					{loading ? <p style={loadingStyle}>Loading...</p> : tasksTable}
				</div>
			</div>
		</div>
	);
};

export default TaskList;
