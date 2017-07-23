import { combineReducers } from 'redux';
import friends from './friends';
import payements from './payements';
import shares from './shares';

const friendBushApp = combineReducers({
	friends,
	payements,
	shares
});

export default friendBushApp;
