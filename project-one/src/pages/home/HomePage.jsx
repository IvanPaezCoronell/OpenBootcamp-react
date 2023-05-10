import React from 'react'
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
	const navigate = useNavigate();

	return (
		<div>
			<h1>Home</h1>
			<h2>Dashboard</h2>
			<div>
				<button onClick={() => navigate('/profile')} >profile</button>
				
				<button onClick={() => navigate(-1)} >Back</button>
				
			</div>

		</div>
	)
}

export default HomePage
