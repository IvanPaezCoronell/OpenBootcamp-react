// Ejemplo de uso del metodo componentWillUnMount para componente tipo clase y hook tipo funcional

import React, { Component, useEffect } from 'react';

export class WillUnMount extends Component {
	componentWillUnmount() {
		console.log('Comportamiento antes de que el componente desaparezca');
	}
	render() {
		return (
			<div>
				<h1>WillUnMount</h1>
			</div>
		);
	}
}

export const WillunmountHook = () => {
	useEffect(() => {
		return () => {
			console.log(
				'Comportamiento antes de que el componente desaparezca',
			);
		};
	}, []);

	return <div />;
};
