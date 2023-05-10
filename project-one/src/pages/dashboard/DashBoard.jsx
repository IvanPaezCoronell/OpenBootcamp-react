import { Button } from '@mui/material';
import React from 'react';
import Copyright from '../../components/pure/Copyright';
import { Navigate, useNavigate } from 'react-router-dom';

const DashBoard = () => {

const navigate = useNavigate();

	const logout = () => {
		navigate('/login')
	}

	const navigateToTask = () => {
		navigate('/task')
	}


	return (
		<div>
			<Button variant="contained" onClick={navigateToTask}>Task Page</Button>
		
			<Button variant="contained" onClick={logout}>Logout</Button>
			
		
			<Copyright/>
		</div>
	);x
};

export default DashBoard;
