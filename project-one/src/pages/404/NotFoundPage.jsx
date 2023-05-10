import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFoundPage = () => {

	const navigate = useNavigate();
	return (
		<div>
			<h2>404 - Pagina No Encontrada</h2>
			<button onClick={() => navigate('/')} >Go Home</button>
			<button onClick={() => navigate(-1)} >Go back</button>
			
		</div>
	)
}

export default NotFoundPage

