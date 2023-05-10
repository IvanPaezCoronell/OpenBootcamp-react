import React from 'react'
import LoginFormik from '../../components/pure/forms/LoginFormik'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {

	const navigate = useNavigate();

	const navigateToRegister = () => {
		navigate('/register')
	}


	return (
		<div>
			<h1>Login</h1>
			<LoginFormik/>
			<Button variant="contained" onClick={navigateToRegister}>Register</Button>
		</div>
	)
}

export default LoginPage
