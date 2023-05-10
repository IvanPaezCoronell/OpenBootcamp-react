// Ejemplo de uso del metodo de ciclo de vida en componente clase y el hook de ciclo de
// vida de un componente tipo funcion

import React, { Component, useEffect } from 'react';

export class DidMount extends Component {
	componentDidMount() {
		console.log(
			'antes de que el componente sea agregado al DOM (Renderice)',
		);
	}
	render() {
		return (
			<div>
				<h1>Didmount</h1>
			</div>
		);
	}
}



export const DidmountHook = () => {
	useEffect( () => {
			console.log('Comportamiento antes de que el componente sea agregado al DOM');
		},[],
);

	return <div>Hook</div>;
};
