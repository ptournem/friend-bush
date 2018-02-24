import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import App from './App';
import friendBushApp from './reducers';
import registerServiceWorker from './registerServiceWorker';
import firebaseStorage from './middleware/firebaseStorage';
import {setUser,setUserProjects} from './actions';
import {auth,database} from './firebase';

let store = createStore(
	friendBushApp,
	applyMiddleware(firebaseStorage)
);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>
	, document.getElementById('root'));
registerServiceWorker();

auth.onAuthStateChanged((user) => {
			store.dispatch(setUser(user));
			
			// si l'user est connecté
			if(user !== null){
				// on récupere sa liste de projets
				database.ref('users/'+user.uid+'/projects').on('value',function(snapshot){
						const val = snapshot.val()
						if(val === null){
							store.dispatch(setUserProjects([]));
							return;
						}
						const projects=Object.keys(val).map((key) => {return {id : key, name: val[key] }} );
						store.dispatch(setUserProjects(projects));
				});
			}
});
