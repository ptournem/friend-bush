import {SET_USER,SET_USER_PROJECTS} from '../actions';
import {fromJS} from 'immutable';

function getDefaultState(){
	const user = null;
	const projects = [];
	return fromJS({
    user,
		projects
  });
}

const setUser = (state,action) => {
  const {payLoad} = action;
  const {user} = payLoad;
  return state.set('user',user);
}

const setUserProjects = (state,action) => {
	const {payLoad} = action;
	const {projects} = payLoad;
	return state.set('projects', projects);
}

const userReducer = (state = null,action) => {
  if(state === null){
    state = getDefaultState();
  }
  switch(action.type){
    case SET_USER: return setUser(state,action);
		case SET_USER_PROJECTS: return setUserProjects(state,action);
    default : return state;
  }
};

export default userReducer;
