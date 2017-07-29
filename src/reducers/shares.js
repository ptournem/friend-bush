import {ADD_SHARE, REMOVE_SHARE,SET_SHARE_WEIGHT} from '../actions';
import {combineReducers} from 'redux';
import {List,Map, fromJS} from 'immutable';

/**
 * [addShareEntry Add a share in byId]
 * @param {Map} state  [current state]
 * @param {Object} action [action to handle]
 */
function addShareEntry(state,action){
	const {payLoad} = action ;
	const {id,owedById,payementId,weight } = payLoad;

	const share =  {id : id, owedById : owedById, payementId: payementId, weight : weight};

	return state.set(id,fromJS(share));
}

/**
 * [addShareId Add a share in allIds]
 * @param {list} state  [current state]
 * @param {Object} action [action to handle]
 */
function addShareId(state,action){
	const {payLoad} = action ;
	const {id} = payLoad;

	return state.push(id);
}


/**
 * [removeShareId Remove a share in byId]
 * @param {Map} state  [current state]
 * @param {Object} action [action to handle]
 */
function removeShareEntry(state,action){
	const {payLoad} = action ;
	const {id} = payLoad;

	return  state.delete(id);
}

/**
 * [removeShareId Remove a share from allIds]
 * @param {List} state  [current state]
 * @param {Object} action [action to handle]
 */
function removeShareId(state,action){
	const {payLoad} = action ;
	const {id} = payLoad;

	return state.delete(state.indexOf(id));
}

/**
 * [setShareWeight Update a share weight ]
 * @param {Map} state  [current state]
 * @param {Object} action [action to handle]
 */
function setShareWeight(state,action){
	const {payLoad} = action;
	const{id,weight} = payLoad;

	return state.update(id,share => share.set('weight',weight));
}


/**
 * [sharesById Handle action for byId object]
 * @param {Map} [state=null] [current state]
 * @param {Object} action [action to handle]
 * @return {Object}            [next state]
 */
function sharesById(state = null,action){
	if(state === null){
		state = Map();
	}
	switch (action.type) {
		case ADD_SHARE: return addShareEntry(state,action);
		case SET_SHARE_WEIGHT: return  setShareWeight(state,action);
		case REMOVE_SHARE : return  removeShareEntry(state,action);
		default: return state;

	}
}

/**
 * [allShares Handle action for allIds object]
 * @param {List} [state=null]  [current state]
 * @param {Object} action [action to handle]
 * @return {Array}            [next state]
 */
function allShares(state = null,action){
	if(state === null){
		state = List();
	}
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
