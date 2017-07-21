import { combineReducers } from 'redux';
import friends from './friends';
import payements from './payements';

const friendBushApp = combineReducers({
	friends,
	payements
});

export default friendBushApp;
