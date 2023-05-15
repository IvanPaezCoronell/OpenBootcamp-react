import createSagaMiddleware from 'redux-saga';
import {
	legacy_createStore as createStore,
	compose,
	applyMiddleware,
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from '../reducers/rootReducer';
import { watcherSaga } from '../sagas/sagas';

export const createAppStore = () => {
	let store = createStore(rootReducer, composeWithDevTools());

	return store;
};

export const createAppAsyncStore = () => {
	const sagaMiddleware = createSagaMiddleware();

	let store = createStore(
		rootReducer,
		compose(applyMiddleware(sagaMiddleware), composeWithDevTools()),
	);

	sagaMiddleware.run(watcherSaga);

	return store;
};
