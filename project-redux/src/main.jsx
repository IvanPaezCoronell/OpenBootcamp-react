import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import {createAppStore} from './store/config/storeConfig.js'
import { Provider } from 'react-redux';
// import { createAppAsyncStore } from './store/config/storeConfig.js';
//  import AppReduxSaga from './AppReduxSaga.jsx';

let appStore = createAppStore()
// let appAsyncStore = createAppAsyncStore()

ReactDOM.createRoot(document.getElementById('root')).render(
	<Provider store={appStore}>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</Provider>,
);
