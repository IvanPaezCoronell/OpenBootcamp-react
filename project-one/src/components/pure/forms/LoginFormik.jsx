import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const loginSchema = Yup.object().shape({
	email: Yup.string()
		.email('Invalid Email Format')
		.required('Email is Required'),
	password: Yup.string().required('Password is Required'),
});

const LoginFormik = () => {
	const initialCredentials = {
		email: '',
		password: '',
	};

	const navigate = useNavigate();

	return (
		<div>
			<h2>Login formik</h2>
			<Formik
				validationSchema={loginSchema}
				initialValues={initialCredentials}
				onSubmit={async values => {
					await new Promise(r => setTimeout(r, 1000));
					alert(JSON.stringify(values, null, 2));
					await localStorage.setItem('credentials', values);
					navigate('/profile')
				}}
			>
				{({ errors, touched, HandleBlur, values, isSubmitting }) =>
					<Form>
						<label htmlFor="email">Email</label>
						<Field
							id="email"
							type="email"
							name="email"
							placeholder="example@email.com"
						/>

						{/* Email errors */}
						{errors.email &&
							touched.email &&
							<ErrorMessage name="email" component="div" />}

						<label htmlFor="password">Password</label>
						<Field
							id="password"
							type="password"
							name="password"
							placeholder="Password"
						/>

						{/* Password errors */}
						{errors.password &&
							touched.password &&
							<ErrorMessage name="password" component="div" />}

						<button type="submit">Login</button>
						{isSubmitting ? <p>Login yor credentials...</p> : null}
					</Form>}
			</Formik>
		</div>
	);
};

export default LoginFormik;
