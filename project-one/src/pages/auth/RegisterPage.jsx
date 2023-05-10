import { Button } from '@mui/material';
import React from 'react'
import RegisterFormik from '../../components/pure/forms/RegisterFormik'
import { useNavigate } from 'react-router-dom'

const RegisterPage = () => {

	const navigate = useNavigate();

	const navigateToLogin = () => {
		navigate('/login')
	}
	return (
		<div>
			<h1>Register page</h1>
			<RegisterFormik />
			<Button variant="contained" onClick={navigateToLogin}> Login </Button>
			
		</div>
	)
}

export default RegisterPage
