import React, { useContext, useReducer } from 'react';

const AppContext = React.createContext();

const useAppContext = () => {
	return useContext(AppContext);
};

const initialState = {
	tasks: [],
};

const taskReducer = (state, action) => {
	console.log(action);
	switch (action.type) {
		case 'ADD_TASK':
			return {
				...state,
				tasks: [...state.tasks, action.value],
			};
	}
	return state;
};

const AppProvider = ({ children }) => {

	const [state, dispatch] = useReducer(taskReducer, initialState);

	return (
		<AppContext.Provider value={{ tasks: state.tasks, dispatch }}>
			{children}
		</AppContext.Provider>
	);
};

export { AppProvider, useAppContext };
