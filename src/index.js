import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

ReactDOM.render(
	<BrowserRouter>
		<Provider
			store={createStore(
				reducers,
				composeEnhancers(applyMiddleware(reduxThunk))
			)}
		>
			<App />
		</Provider>
	</BrowserRouter>,
	document.getElementById('root')
);

reportWebVitals();
