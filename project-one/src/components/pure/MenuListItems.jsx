import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Home, Settings } from '@mui/icons-material';
import { Navigate, useNavigate } from 'react-router-dom';

const getIcon = icon => {
	switch (icon) {
		case 'HOME':
			return <Home />;
			break;
		case 'TASKS':
			return <Home />;
			break;
		case 'SETTINGS':
			return <Settings />;
			break;
		default:
			break;
	}
};

const MenuListItems = ({list}) => {

	const navigate = useNavigate();

	const navigateTo = (path) => {
		<Navigate to={path}/>

		return (
			<List>
				{list.map( ({text, path, icon}, index) => (
					<ListItem key={index} onClick={() => navigateTo(path)}>
						<ListItemIcon>
							{getIcon(icon)}
						</ListItemIcon>
						<ListItemText primary={text}/>

					</ListItem>
				))}
			</List>
		)

	}
};

export default MenuListItems;
