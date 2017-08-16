import { combineReducers } from 'redux';
import friends from './friends';
import payements from './payements';
import shares from './shares';
import project from './project';

const friendBushApp = combineReducers({
	friends,
	payements,
	shares,
	project
});

export default friendBushApp;
