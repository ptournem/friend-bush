import {SET_PROJECT_NAME, LOAD_JSON, RESET, SET_PROJECT_USERS,SET_SHOW_SYNC_PROJECT, SET_SHOW_PROJECT_SELECTOR} from '../actions';
import {fromJS} from 'immutable';
import uuid from 'uuid/v1';

const defaultName = "";

/**
 * [getDefaultState generate a default state]
 */
function getDefaultState(){
	const id = "project_" + uuid();
	const ret =	fromJS({
			id,
			name : defaultName,
			showSelectProject : false,
			showSyncProject : false
		});
	return ret.set('users',{});
}

/**
 * [setProjectName set the project name]
 * @param {Map} state  [current state]
 * @param {Object} action [action to handle]
 */
function setProjectName(state,action){
	const {payLoad} = action ;
	const {name} = payLoad;
	return state.set('name',name);
}

/**
 * [loadFromJSON load project from json]
 * @param {Map} state  [current state]
 * @param {Object} action [action to handle]
 */
function loadFromJSON(state,action){
	const{payLoad} = action;
	const{data} = payLoad;
	const{id,name} = data;
	return fromJS({
		id,
		name
	});
}

/**
 * [setProjectUsers set users collaborating on this project]
 * @param {Map} state  [current state]
 * @param {Object} action [action to handle]
 */
function setProjectUsers(state,action){
	const {payLoad} = action;
	const {users} = payLoad;

	return state.set('users', users);
}

/**
 * [setShowSyncProject set show sync project]
 * @param {Map} state  [current state]
 * @param {Object} action [action to handle]
 */
function setShowSyncProject(state,action){
	const {payLoad} = action;
	const {show} = payLoad;

	return state.set('showSyncProject',show);
}

/**
 * [setShowProjectSelector set show sync project]
 * @param {Map} state  [current state]
 * @param {Object} action [action to handle]
 */
function setShowProjectSelector(state,action){
	const {payLoad} = action;
	const {show} = payLoad;

	return state.set('showSelectProject',show);
}

/**
 * [reset reset project]
 * @param {Map} state  [current state]
 * @param {Object} action [action to handle]
 */
function reset(state,action){
	return getDefaultState();
}

const  projectReducer = (state = null,action) => {
	if(state === null){
		state = getDefaultState();
	}

	switch (action.type) {
		case SET_PROJECT_NAME: return setProjectName(state,action);
		case LOAD_JSON : return loadFromJSON(state,action);
		case RESET : return(reset(state,action));
		case SET_PROJECT_USERS : return(setProjectUsers(state,action));
		case SET_SHOW_SYNC_PROJECT : return setShowSyncProject(state,action);
		case SET_SHOW_PROJECT_SELECTOR : return setShowProjectSelector(state,action);
		default: return state;

	}
}

export default projectReducer;
