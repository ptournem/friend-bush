import {SET_PROJECT_NAME, LOAD_JSON, RESET } from '../actions';
import {fromJS} from 'immutable';
import uuid from 'uuid/v1';

const defaultName = "Nouveau Projet";

/**
 * [getDefaultState generate a default state]
 */
function getDefaultState(){
	const id = "project_" + uuid();
	return 	fromJS({
			id,
			name : defaultName,
		});
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
	const{project} = data;
	return fromJS(project);
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
		default: return state;

	}
}

export default projectReducer;
