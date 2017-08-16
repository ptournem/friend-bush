import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import App from './App';
import friendBushApp from './reducers';
import registerServiceWorker from './registerServiceWorker';
import Saver from './middleware/localStorage';
import {loadJson} from './actions';

let store = createStore(
	friendBushApp,
	applyMiddleware(Saver)
);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>
	, document.getElementById('root'));
registerServiceWorker();

// chargement des données en localStorage si elles existent
if(window.sessionStorage['current'] && window.localStorage[window.sessionStorage['current']]){
	try {
		const data = JSON.parse(window.localStorage[window.sessionStorage['current']]);
		store.dispatch(loadJson(data));
	} catch(e){}
}
