import {ADD_FRIEND, REMOVE_FRIEND } from '../actions';
import {combineReducers} from 'redux';

/**
 * [addFriendEntry Add an friend in byId]
 * @param {Object} state  [current state]
 * @param {Object} action [action to handle]
 */
function addFriendEntry(state,action){
	const {payLoad} = action ;
	const {id,name } = payLoad;

	const friend =  {id : id, name : name};

	return {
		...state,
		[id] : friend
	};
}

/**
 * [addFriendId Add a friend in allIds]
 * @param {Array} state  [current state]
 * @param {Object} action [action to handle]
 */
function addFriendId(state,action){
	const {payLoad} = action ;
	const {id} = payLoad;

	return state.concat(id);
}

/**
 * [removeFriendEntry Remove a friend from byId]
 * @param {Object} state  [current state]
 * @param {Object} action [action to handle]
 */
function removeFriendEntry(state,action){
	const {payLoad} = action ;
	const {id} = payLoad;

	return  Object.keys(state).filter(friendId=> friendId!==id).reduce((obj,key)=>{
		obj[key]=state[key];
		return obj
	},{});
}

/**
 * [removeFriendId Remove a friend from allIds]
 * @param {Array} state  [current state]
 * @param {Object} action [action to handle]
 */
function removeFriendId(state,action){
	const {payLoad} = action ;
	const {id} = payLoad;

	return state.filter(friendId=> friendId!==id);
}



/**
 * [friendsById Handle action for byId object]
 * @param {Object} [state={}]  [current state]
 * @param {Object} action [action to handle]
 * @return {Object}            [next state]
 */
function friendsById(state = {},action){
	switch (action.type) {
		case ADD_FRIEND: return addFriendEntry(state,action);
		case REMOVE_FRIEND : return removeFriendEntry(state,action);
		default: return state;

	}
}

/**
 * [allFriends description]
 * @param {Array} [state=[]]  [current state]
 * @param {Object} action [action to handle]
 * @return {Array}            [next state]
 */
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
