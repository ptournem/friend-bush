import { combineReducers } from 'redux';
import friends from './friends';
import payements from './payements';
import shares from './shares';
import project from './project';
import user from './user';

const friendBushApp = combineReducers({
	friends,
	payements,
	shares,
	project,
	user
});

export default friendBushApp;
