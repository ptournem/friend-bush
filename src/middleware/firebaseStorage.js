import {database,auth} from '../firebase';

/**
 * Save next result in the local store
 *
 */
const firebaseStorage = store => next => action => {
	let result = next(action);
	const {friends,shares,project,payements} = store.getState();

	if(friends.byId.size === 0 && shares.byId.size === 0 && payements.byId.size === 0){
		return result;
	}

	// save in local storage
	const id = project.get('id');
	const name = project.get('name');
	const data = {friends,shares,payements,id,name};
	// save current project
	const updates = {};
	updates['projects/'+id + '/data'] =JSON.stringify(data);
	updates['projects/'+id + '/name'] = name;
	updates['projects/'+id + '/users/' + auth.currentUser.uid] = {
			name : auth.currentUser.displayName,
			photo : auth.currentUser.photoURL
	}
	updates['users/' + auth.currentUser.uid + '/projects/'+id] = name;
	updates['users/' + auth.currentUser.uid + '/current'] = id;
	database.ref().update(updates);

	return result;

}

export default firebaseStorage;
