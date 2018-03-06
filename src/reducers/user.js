import {SET_USER,SET_USER_PROJECTS, LOAD_JSON,RESET, SET_ADD_PROJECT_ID} from '../actions';
import {fromJS} from 'immutable';

function getDefaultState(){
	const user = null;
	const projects = [];
	const projectId = "";
	const current = null;
	return fromJS({
    user,
		projects,
		current,
		projectId
  });
}

const setUser = (state,action) => {
  const {payLoad} = action;
  const {user} = payLoad;

	if(user === null){
		return getDefaultState();
	}

  return  state.set('user',user);
}

const setUserProjects = (state,action) => {
	const {payLoad} = action;
	const {projects} = payLoad;
	return state.set('projects', projects);
}

const loadJson = (state,action) =>{
	const {payLoad} = action;
	const{data} = payLoad;
	const{id} = data;
	return state.set('current',id);
}

const setProjectId = (state,action) => {
	const {payLoad} = action;
	const{id} = payLoad;
	return state.set('projectId',id);
}

const reset = (state,action) => {
	return state.set('current',null);
}

const userReducer = (state = null,action) => {
  if(state === null){
    state = getDefaultState();
  }
  switch(action.type){
    case SET_USER: return setUser(state,action);
		case SET_USER_PROJECTS: return setUserProjects(state,action);
		case LOAD_JSON: return loadJson(state,action);
		case RESET : return reset(state,action);
		case SET_ADD_PROJECT_ID : return setProjectId(state,action);
    default : return state;
  }
};

export default userReducer;
