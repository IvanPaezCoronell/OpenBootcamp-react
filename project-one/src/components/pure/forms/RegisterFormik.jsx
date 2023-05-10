import React from 'react';
import { User } from '../../../models/user.class';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { ROLES } from '../../../models/roles.enum';

const RegisterFormik = () => {
	let user = new User();

	const initialValues = {
		username: '',
		email: '',
		password: '',
		confirm: '',
		role: ROLES.USER,
	};

	const registerSchema = Yup.object().shape({
		username: Yup.string()
			.min(4, 'Username too short')
			.max(12, 'Username to long')
			.required('Username is required'),
		email: Yup.string()
			.email('Invalid Email Format')
			.required('Email is Required'),
		password: Yup.string()
			.min(6, 'Password too short')
			.required('Password is required'),
		role: Yup.string()
			.oneOf([ROLES.USER, ROLES.ADMIN], 'You must select a Role: User / Admin')
			.required('Role is required'),
		confirm: Yup.string()
			.when('password', {
				is: value => (value && value.lenght > 0 ? true : false),
				then: Yup.string().oneOf([Yup.ref('password')], 'Password must match!'),
			})
			.required('You must confirm the password'),
	});

	const submit = values => {
		alert.log('register user');
	};

	return (
		<div>
			<h4>Register Form</h4>
			<Formik
				initialValues={initialValues}
				validationSchema={registerSchema}
				onSubmit={async values => {
					await new Promise(r => setTimeout(r, 1000));
					alert(JSON.stringify(values, null, 2));
				}}
			>
				{({ values, touched, errors, isSubmitting, handleBlur }) =>
					<Form>
						<label htmlFor="email">Username</label>
						<Field
							id="username"
							type="username"
							name="username"
							placeholder="example"
						/>
						{errors.username &&
							touched.username &&
							<ErrorMessage name="username" component="div" />}

						<label htmlFor="email">Email</label>
						<Field
							id="email"
							type="email"
							name="email"
							placeholder="example@email.com"
						/>
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
						{errors.password &&
							touched.password &&
							<ErrorMessage name="password" component="div" />}

						<label htmlFor="confirm">Confirm password</label>
						<Field
							id="confirm"
							type="password"
							name="confirm"
							placeholder="Confirm Password"
						/>
						{errors.confirm &&
							touched.confirm &&
							<ErrorMessage name="confirm" component="div" />}

						<button type="submit">Login</button>
						{isSubmitting ? <p>Sending yor credentials...</p> : null}
					</Form>}
			</Formik>
		</div>
	);
};

export default RegisterFormik;
