import {ADD_FRIEND, REMOVE_FRIEND, SET_FRIEND_NAME } from '../actions';
import {combineReducers} from 'redux';
import {List,Map, fromJS} from 'immutable';

/**
 * [addFriendEntry Add an friend in byId]
 * @param {Map} state  [current state]
 * @param {Object} action [action to handle]
 */
function addFriendEntry(state,action){
	const {payLoad} = action ;
	const {id} = payLoad;

	const friend =  {id : id, name : null};

	return state.set(id,fromJS(friend));
}

/**
 * [addFriendId Add a friend in allIds]
 * @param {List} state  [current state]
 * @param {Object} action [action to handle]
 */
function addFriendId(state,action){
	const {payLoad} = action ;
	const {id} = payLoad;

	return state.push(id);
}

/**
 * [removeFriendEntry Remove a friend from byId]
 * @param {Map} state  [current state]
 * @param {Object} action [action to handle]
 */
function removeFriendEntry(state,action){
	const {payLoad} = action ;
	const {id} = payLoad;

	return state.delete(id);
}

/**
 * [removeFriendId Remove a friend from allIds]
 * @param {List} state  [current state]
 * @param {Object} action [action to handle]
 */
function removeFriendId(state,action){
	const {payLoad} = action ;
	const {id} = payLoad;

	return state.delete(state.indexOf(id));
}

/**
 * [setFriendName Update a friend label ]
 * @param {Map} state  [current state]
 * @param {Object} action [action to handle]
 */
function setFriendName(state,action){
	const {payLoad} = action;
	const{id,name} = payLoad;

	return state.update(id,friend => friend.set("name",name));
}



/**
 * [friendsById Handle action for byId object]
 * @param {Map} [state=null]  [current state]
 * @param {Object} action [action to handle]
 * @return {Object}            [next state]
 */
function friendsById(state = null,action){
	if(state === null){
		state = Map();
	}
	switch (action.type) {
		case ADD_FRIEND: return addFriendEntry(state,action);
		case REMOVE_FRIEND : return removeFriendEntry(state,action);
		case SET_FRIEND_NAME : return setFriendName(state,action);
		default: return state;

	}
}

/**
 * [allFriends description]
 * @param {List} [state=null]  [current state]
 * @param {Object} action [action to handle]
 * @return {Array}            [next state]
 */
function allFriends(state = null,action){
	if(state===null){
		state = List();
	}

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
