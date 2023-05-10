import React, { useEffect } from 'react';

const Allcycles = () => {
	useEffect(() => {
		console.log('Componente creado');

		const intervalID = setInterval(() => {
			document.title = `${new Date()}`
			console.log('Actualizacion del componente');
		}, 100);

		return () => {
			console.log('Componente va a desaparecer');
			document.title = 'Tiempo detenido'
			clearInterval(intervalID);
		};
	}, []);

	return (
		<>


		
		</>
	)
};

export default Allcycles;
