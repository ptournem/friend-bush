import {ADD_PAYEMENT, SET_PAYEMENT_COST, SET_PAYEMENT_LABEL,SET_PAYEMENT_PAID_BY, REMOVE_PAYEMENT} from '../actions';
import {combineReducers} from 'redux';

/**
 * [addPayementEntry Add a payement in byId]
 * @param {Object} state  [current state]
 * @param {Object} action [action to handle]
 */
function addPayementEntry(state,action){
	const {payLoad} = action ;
	const {id,label,cost } = payLoad;

	const payement =  {id : id, label : label, cost: cost, paidById : null,shares : []};

	return {
		...state,
		[id] : payement
	};
}

/**
 * [addPayementId Add a payement in allIds]
 * @param {Array} state  [current state]
 * @param {Object} action [action to handle]
 */
function addPayementId(state,action){
	const {payLoad} = action ;
	const {id} = payLoad;

	return state.concat(id);
}

/**
 * [removePayementEntry Remove a payement in byId]
 * @param {Array} state  [current state]
 * @param {Object} action [action to handle]
 */
function removePayementEntry(state,action){
	const {payLoad} = action ;
	const {id} = payLoad;

	return  Object.keys(state).filter(payementId=>  payementId!==id).reduce((obj,key)=>{
		obj[key]=state[key];
		return obj
	},{});
}

/**
 * [removePayementId Remove a payement from allIds]
 * @param {Array} state  [current state]
 * @param {Object} action [action to handle]
 */
function removePayementId(state,action){
	const {payLoad} = action ;
	const {id} = payLoad;

	return state.filter(payementId=> payementId!==id);
}

/**
 * [setPayementCost Update a payement cost ]
 * @param {Object} state  [current state]
 * @param {Object} action [action to handle]
 */
function setPayementCost(state,action){
	const {payLoad} = action;
	const{id,cost} = payLoad;

	return Object.keys(state).reduce((obj,key)=>{
		obj[key] =state[key];
		if(state[key].id === id){
			obj[key].cost = cost;
		}
		return obj;
	},{})
}

/**
 * [setPayementLabel Update a payement label]
 * @param {Object} state  [current state]
 * @param {Object} action [action to handle]
 */
function setPayementLabel(state,action){
	const {payLoad} = action;
	const{id,label} = payLoad;

	return Object.keys(state).reduce((obj,key)=>{
		obj[key] =state[key];
		if(state[key].id === id){
			obj[key].label = label;
		}
		return obj;
	},{})
}

/**
 * [setPayementPaidBy Update a payement paidById]
 * @param {Object} state  [current state]
 * @param {Object} action [action to handle]
 */
function setPayementPaidBy(state,action){
	const {payLoad} = action;
	const{id,paidById} = payLoad;

	return Object.keys(state).reduce((obj,key)=>{
		obj[key] =state[key];
		if(state[key].id === id){
			obj[key].paidById = paidById;
		}
		return obj;
	},{})
}


/**
 * [payementsById Handle action for byId object]
 * @param {Object} [state={}] [current state]
 * @param {Object} action [action to handle]
 * @return {Object}            [next state]
 */
function payementsById(state = {},action){
	switch (action.type) {
		case ADD_PAYEMENT: return addPayementEntry(state,action);
		case SET_PAYEMENT_COST: return setPayementCost(state,action);
		case SET_PAYEMENT_LABEL: return setPayementLabel(state,action);
		case SET_PAYEMENT_PAID_BY: return setPayementPaidBy(state,action);
		case REMOVE_PAYEMENT : return removePayementEntry(state,action);
		default: return state;

	}
}

/**
 * [allPayements Handle action for allIds object]
 * @param {Array} [state=[]]  [current state]
 * @param {Object} action [action to handle]
 * @return {Array}            [next state]
 */
function allPayements(state = [],action){
	switch (action.type) {
		case ADD_PAYEMENT: return addPayementId(state,action);
		case REMOVE_PAYEMENT : return removePayementId(state,action);
		default: return state;

	}
}

const payementsReducer = combineReducers({
	byId:  payementsById,
	allIds : allPayements
});

export default payementsReducer;
