import {ADD_SHARE, REMOVE_SHARE,SET_SHARE_WEIGHT} from '../actions';
import {combineReducers} from 'redux';

/**
 * [addShareEntry Add a share in byId]
 * @param {Object} state  [current state]
 * @param {Object} action [action to handle]
 */
function addShareEntry(state,action){
	const {payLoad} = action ;
	const {id,owedById,payementId,weight } = payLoad;

	const share =  {id : id, owedById : owedById, payementId: payementId, weight : weight};

	return {
		...state,
		[id] : share
	};
}

/**
 * [addShareId Add a share in allIds]
 * @param {Array} state  [current state]
 * @param {Object} action [action to handle]
 */
function addShareId(state,action){
	const {payLoad} = action ;
	const {id} = payLoad;

	return state.concat(id);
}


/**
 * [removeShareId Remove a share in byId]
 * @param {Array} state  [current state]
 * @param {Object} action [action to handle]
 */
function removeShareEntry(state,action){
	const {payLoad} = action ;
	const {id} = payLoad;

	return  Object.keys(state).filter(shareId=>  shareId!==id).reduce((obj,key)=>{
		obj[key]=state[key];
		return obj;
	},{});
}

/**
 * [removeShareId Remove a share from allIds]
 * @param {Array} state  [current state]
 * @param {Object} action [action to handle]
 */
function removeShareId(state,action){
	const {payLoad} = action ;
	const {id} = payLoad;

	return state.filter(shareId=> shareId!==id);
}

/**
 * [setShareWeight Update a share weight ]
 * @param {Object} state  [current state]
 * @param {Object} action [action to handle]
 */
function setShareWeight(state,action){
	const {payLoad} = action;
	const{id,weight} = payLoad;

	return Object.keys(state).reduce((obj,key)=>{
		obj[key] =state[key];
		if(state[key].id === id){
			obj[key].weight = weight;
		}
		return obj;
	},{})
}


/**
 * [sharesById Handle action for byId object]
 * @param {Object} [state={}] [current state]
 * @param {Object} action [action to handle]
 * @return {Object}            [next state]
 */
function sharesById(state = {},action){
	switch (action.type) {
		case ADD_SHARE: return addShareEntry(state,action);
		case SET_SHARE_WEIGHT: return  setShareWeight(state,action);
		case REMOVE_SHARE : return  removeShareEntry(state,action);
		default: return state;

	}
}

/**
 * [allShares Handle action for allIds object]
 * @param {Array} [state=[]]  [current state]
 * @param {Object} action [action to handle]
 * @return {Array}            [next state]
 */
function allShares(state = [],action){
	switch (action.type) {
		case ADD_SHARE: return addShareId(state,action);
		case REMOVE_SHARE : return  removeShareId(state,action);
		default: return state;

	}
}

const sharesReducer = combineReducers({
	byId:  sharesById,
	allIds : allShares
});

export default sharesReducer;
