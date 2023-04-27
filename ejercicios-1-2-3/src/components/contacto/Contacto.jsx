/** @format */

import PropTypes from 'prop-types';
import { ContactoInfo } from './contacto.class';

const Contacto = ({ info }) => {
	return (
		<>
			<h3>Nombre: {info.nombre}</h3>
			<h3>Apellido: {info.apellido}</h3>
			<h3>Apellido: {info.email}</h3>
			<h3>Estado: {info.estado ? 'Contacto en linea' : 'Contacto no disponible'}</h3>
		</>
	);
}


Contacto.propTypes = {
	info: PropTypes.instanceOf(ContactoInfo)
};


export default Contacto;
