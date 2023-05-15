import { combineReducers } from 'redux';
import { todosReducer } from './todoReducer';
import { filterReducer } from './filterReducer';
import { userReducer } from './userReducer';

export const rootReducer = combineReducers({
	// State name: Reducer that will control it
    todosState: todosReducer,
    filterState: filterReducer,

    // async example
    userState: userReducer,
});
