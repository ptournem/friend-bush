/**
 * Save next result in the local store 
 *
 */
const LocalStorage = store => next => action => {
	let result = next(action);
	const data = store.getState();
	// save in local storage
	window.localStorage[data.project.get('id')] = JSON.stringify(data);
	// save current project
	window.sessionStorage['current'] = data.project.get('id');
	return result;

}

export default LocalStorage;
