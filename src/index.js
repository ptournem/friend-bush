import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import App from './App';
import friendBushApp from './reducers';
import registerServiceWorker from './registerServiceWorker';
import {loadJson, setUser} from './actions';
import {auth} from './firebase';

let store = createStore(
	friendBushApp,
	applyMiddleware()
);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>
	, document.getElementById('root'));
registerServiceWorker();

auth.onAuthStateChanged((user) => {
			store.dispatch(setUser(user));
});
