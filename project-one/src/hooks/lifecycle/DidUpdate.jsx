//  Eejmplo de uso de metodo didUpdate en componente tipo clase y uso de hook en componente tipo funcion

import React, { Component, useEffect } from 'react';

export class DidUpdate extends Component {
	componentDidUpdate() {
		console.log(
			'Comportamiento cuando el componente recibe nuevos props o cambios en su estado',
		);
	}
	render() {
		return (
			<div>
				<h1>DidUpdate</h1>
			</div>
		);
	}
}

export const DidupdateHook = () => {
	useEffect(() => {
		console.log(
			'Comportamiento cuando el componente recibe nuevos props o cambios en el estado',
		);
	});

	return (
		<div>
			<h1>DidUpdate</h1>
		</div>
	);
};
