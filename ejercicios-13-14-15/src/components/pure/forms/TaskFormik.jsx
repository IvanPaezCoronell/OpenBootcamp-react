import { useRef } from 'react';
import { LEVELS } from '../../../models/level.enum';
import { Task } from '../../../models/task.class';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from 'formik';

const TaskFormik = ({ add }) => {
	const taskSchema = Yup.object().shape({
		name: Yup.string().required('name is required'),
		description: Yup.string().required('description is required'),
	});



	const nameRef = useRef('');
	const descriptionRef = useRef('');
	const statusRef = useRef(false);
	const levelRef = useRef(LEVELS.NORMAL);

	function addTask(e) {
		e.preventDefault();
		const newTask = new Task(
			nameRef.current.value,
			descriptionRef.current.value,
			statusRef.current.value,
			levelRef.current.value
		);
		add(newTask)
	}

	return (
		<div>
			<Formik
				validationSchema={taskSchema}
				initialValues={{
					name: '',
					description: '',
					status: false,
					level: LEVELS.URGENT,
				}}
				onSubmit={addTask}
			>
				{({ errors, touched }) =>
					<Form>
						<label htmlFor="name">Name</label>
						<Field id="name" type="name" name="name" placeholder="example" />

						{/* Email errors */}
						{errors.name &&
							touched.name &&
							<ErrorMessage name="name" component="div" />}

						<label htmlFor="description">description</label>
						<Field
							id="description"
							type="text"
							name="description"
							placeholder="description"
						/>

						{/* Password errors */}
						{errors.description &&
							touched.description &&
							<ErrorMessage name="description" component="div" />}

						<label htmlFor="selectLevel" className="sr-only">
							<select
								className="form-control form-control-lg"
								ref={levelRef}
								defaultValue={LEVELS.NORMAL}
								id="selectLevel"
							>
								<option  value={LEVELS.NORMAL}>
									Normal
								</option>
								<option  value={LEVELS.URGENT}>
									Urgent
								</option>
								<option  value={LEVELS.BLOCKING}>
									Blocking
								</option>
							</select>
						</label>

						<button type="submit" className='btn btn-success btn-lg ms-2'>Add</button>
					</Form>}
			</Formik>
		</div>
	);
};

TaskFormik.propTypes = {
	add: PropTypes.func.isRequired,
};

export default TaskFormik;
