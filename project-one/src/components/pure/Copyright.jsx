import React from 'react'
import { Link, Typography } from '@mui/material'

const Copyright = () => {
	return (
		<Typography variant='body2' color={'GrayText'} align='center'>
			{'Copyright (C) '}
			<Link color={'inherit'} href='https://formacion.com'>
			Formacion
			
			</Link>
			{''}

			{new Date().getFullYear() }
		</Typography>
	)
}

export default Copyright
