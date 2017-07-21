import {ADD_FRIEND, REMOVE_FRIEND } from '../actions';
import {combineReducers} from 'redux';

function addFriendEntry(state,action){
	const {payLoad} = action ;
	const {id,name } = payLoad;

	const friend =  {id : id, name : name};

	return {
		...state,
		[id] : friend
	};
}

function addFriendId(state,action){
	const {payLoad} = action ;
	const {id} = payLoad;

	return state.concat(id);
}

function removeFriendEntry(state,action){
	const {payLoad} = action ;
	const {id} = payLoad;

	const res =  Object.keys(state).filter(friendId=>  friendId===id).reduce((obj,key)=>{
		obj[key]=state[key];
		return obj
	},{});

	return res;
}

function removeFriendId(state,action){
	const {payLoad} = action ;
	const {id} = payLoad;

	return state.filter(friendId=> friendId!==id);
}




function friendsById(state = {},action){
	switch (action.type) {
		case ADD_FRIEND: return addFriendEntry(state,action);
		case REMOVE_FRIEND : return removeFriendEntry(state,action);
		default: return state;

	}
}

function allFriends(state = [],action){
	switch (action.type) {
		case ADD_FRIEND: return addFriendId(state,action);
		case REMOVE_FRIEND : return removeFriendId(state,action);
		default: return state;

	}
}

const friendsReducer = combineReducers({
	byId:  friendsById,
	allIds : allFriends
});

export default friendsReducer;
