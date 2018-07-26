import uuid from 'uuid/v1';

/*
 * Action types
 */

// user
export const SET_USER = "SET_USER";
export const SET_USER_PROJECTS = "SET_USER_PROJECTS";
export const SET_USER_CURRENT_PROJECT = "SET_USER_CURRENT_PROJECT";

// Project
export const SET_PROJECT_NAME = "SET_PROJECT_NAME";
export const SET_PROJECT_USERS = "SET_PROJECT_USERS";
export const LOAD_JSON = "LOAD_JSON";
export const RESET = "RESET";
export const SET_ADD_PROJECT_ID = "SET_ADD_PROJECT_ID";
export const SET_SHOW_PROJECT_SELECTOR = "SET_SHOW_PROJECT_SELECTOR";
export const SET_SHOW_SYNC_PROJECT = "SET_SHOW_SYNC_PROJECT";
export const SET_CURRENT_TAB = "SET_CURRENT_TAB";

// Friends
export const ADD_FRIEND = 'ADD_FRIEND';
export const SET_FRIEND_NAME = 'SET_FRIEND_NAME';
export const REMOVE_FRIEND = 'REMOVE_FRIEND';

// Payements
export const ADD_PAYEMENT = 'ADD_PAYEMENT';
export const SET_PAYEMENT_COST = 'SET_PAYEMENT_COST';
export const SET_PAYEMENT_LABEL = 'SET_PAYEMENT_LABEL';
export const SET_PAYEMENT_PAID_BY = 'SET_PAYEMENT_PAID_BY';
export const REMOVE_PAYEMENT = 'REMOVE_PAYEMENT';

// Shares
export const ADD_SHARE = 'ADD_SHARE';
export const SET_SHARE_WEIGHT = 'SET_SHARE_WEIGHT';
export const REMOVE_SHARE = 'REMOVE_SHARE';

/**
 * other constant
 */

const FRIEND_NAME = 'friend';
const PAYEMENT_NAME = 'payement';
const SHARE_NAME = 'share';



/**
 * [actionCreator create an action]
 * @param  {String} type    [type]
 * @param  {Object} payLoad [payLoad object]
 * @return {Object}    [Action]
 */
const actionCreator = (type,payLoad) => {
  return {
    type : type,
    payLoad : payLoad
  };
};

// Friends

/**
 * [addFriend action creator to add a friend ]
 * @return {Object}    [Action]
 */
export const addFriend = ()  => {
    return actionCreator(ADD_FRIEND,{
	    id : FRIEND_NAME + "_" + uuid()
    });
};

/**
 * [setFriendName action creator to set a friend name]
 * @param  {String} id [friend id]
 * @param {String} name [name]
 * @return {Object}    [Action]
 */
export const setFriendName = (id,name)  => {
    return actionCreator(SET_FRIEND_NAME,{
	    id : id,
      name : name
    });
};

/**
 * [removeFriend action creator to remove a friend]
 * @param  {String} id [friend id]
 * @return {Object}    [Action]
 */
export const removeFriend = id  => {
    return actionCreator(REMOVE_FRIEND,{
        id : id
    });
};

// Payements

/**
 * [addPayement action creator to create a payement]
 * @return {Object}    [Action]
 */
export const addPayement = ()=> {
  return actionCreator(ADD_PAYEMENT,{
	   id : PAYEMENT_NAME + "_" + uuid()
  });
};

/**
 * [setPayementCost action creator to set a payement cost]
 * @param {String} id   [payement id]
 * @param {Float} cost [cost]
 * @return {Object}    [Action]
 */
export const setPayementCost = (id,cost)=> {
  return actionCreator(SET_PAYEMENT_COST,{
    id : id,
    cost:cost
  });
};

/**
 * [setPayementLabel action creator to set a payement label]
 * @param {String} id    [payement id]
 * @param {String} label [label]
 * @return {Object}    [Action]
 */
export const setPayementLabel = (id,label)=> {
  return actionCreator(SET_PAYEMENT_LABEL,{
    id : id,
    label : label
  });
};

/**
 * [setPayementPaidBy action creator to set a payement paid by user id ]
 * @param {String} id       [payement id]
 * @param {String} paidById [Paid by user id]
 * @return {Object}    [Action]
 */
export const setPayementPaidBy = (id,paidById)=> {
  return actionCreator(SET_PAYEMENT_PAID_BY,{
    id : id,
    paidById : paidById
  });
};

/**
 * [removePayement action creator to remove a payement]
 * @param  {String} id [payement id]
 * @return {Object}    [Action]
 */
export const removePayement = (id)=> {
  return actionCreator(REMOVE_PAYEMENT,{
    id : id
  });
};

/**
 * [addShare action creator to create a share]
 * @param {String} payementId [payement id]
 * @param {String} owedById [owed by user id]
 * @param {int} weight   [weight]
 * @return {Object}    [Action]
 */
export const addShare = (payementId, owedById,weight)=> {
  return actionCreator(ADD_SHARE,{
	  id: SHARE_NAME + "_" + uuid(),
    owedById : owedById,
    payementId : payementId,
	  weight: weight
  });
};

/**
 * [setShareWeight action creator to update a share weight]
 * @param {String} id     [share id]
 * @param {Object} weight [share weight]
 * @return {Object}    [action]
 */
export const setShareWeight = (id,weight)=> {
  return actionCreator(SET_SHARE_WEIGHT,{
    id : id,
	weight: weight
  });
};

/**
 * [removeShare action creator to remove a share]
 * @param  {String} id [share id]
 * @return {Object}    [action]
 */
export const removeShare = (id)=> {
  return actionCreator(REMOVE_SHARE,{
    id : id
  });
};

/**
 * [setProjectName action creator to set project name]
 * @param  {String} name [project name]
 * @return {Object}    [action]
 */
export const setProjectName = (name)=> {
  return actionCreator(SET_PROJECT_NAME,{
    name
  });
};

/**
 * [loadJson action creator to load project from json data]
 * @param  {Object} data [project data]
 * @return {Object}    [action]
 */
export const loadJson = (data)=> {
  return actionCreator(LOAD_JSON,{
    data
  });
};

/**
 * [reset action creator to reset to new project]
 * @return {Object}    [action]
 */
export const reset = ()=> {
  return actionCreator(RESET,{});
};

/**
 * [set user ]
 * @param {Object} user [user object]
 * @return {Object}    [action]
 */
export const setUser = (user)=> {
  return actionCreator(SET_USER,{user});
};

/**
 * [set user projects]
 * @param {Object} projects [projects object]
 * @return {Object}    [action]
 */
export const setUserProjects = (projects)=> {
  return actionCreator(SET_USER_PROJECTS,{projects});
};

/**
 * [set user current project]
 * @param {Object} current [current_project string]
 * @return {Object}    [action]
 */
export const setUserCurrentProject = (current)=> {
  return actionCreator(SET_USER_CURRENT_PROJECT,{current});
};

/**
 * [set user current adding project id]
 * @param {Object} id [project_id string]
 * @return {Object}    [action]
 */
export const setAddProjectId  = (id)=> {
  return actionCreator(SET_ADD_PROJECT_ID,{id});
};

/**
 * Set user collaborating on this project
 * @param [Objects] users [users]
 * @return {Object}    [action]
 */
export const setProjectUsers = (users) =>{
  return actionCreator(SET_PROJECT_USERS,{users});
}

/**
 * Set the show project selector variable
 * @param [Boolean] show [show]
 * @return {Object}    [action]
 */
export const setShowProjectSelector = (show) =>{
  return actionCreator(SET_SHOW_PROJECT_SELECTOR,{show});
}

/**
 * Set the show sync project variable
 * @param [Boolean] show [show]
 * @return {Object}    [action]
 */
export const setShowSyncProject = (show) =>{
  return actionCreator(SET_SHOW_SYNC_PROJECT,{show});
}

/**
 * Set the current tab to show
 * @param [String] tab [tab]
 * @return {Object}    [action]
 */
export const setCurrentTab = (tab) =>{
  return actionCreator(SET_CURRENT_TAB,{tab});
}
