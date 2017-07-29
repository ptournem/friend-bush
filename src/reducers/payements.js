import {ADD_PAYEMENT, SET_PAYEMENT_COST, SET_PAYEMENT_LABEL,SET_PAYEMENT_PAID_BY, REMOVE_PAYEMENT,ADD_SHARE, REMOVE_FRIEND} from '../actions';
import {combineReducers} from 'redux';
import {List,Map, fromJS} from 'immutable';

/**
 * [addPayementEntry Add a payement in byId]
 * @param {Map} state  [current state]
 * @param {Object} action [action to handle]
 */
function addPayementEntry(state,action){
	const {payLoad} = action ;
	const {id} = payLoad;

	const payement =  {id : id, label : null, cost: null, paidById : null,shares : []};

	return state.set(id,fromJS(payement));
}

/**
 * [addPayementId Add a payement in allIds]
 * @param {List} state  [current state]
 * @param {Object} action [action to handle]
 */
function addPayementId(state,action){
	const {payLoad} = action ;
	const {id} = payLoad;

	return state.push(id);
}

/**
 * [removePayementEntry Remove a payement in byId]
 * @param {Map} state  [current state]
 * @param {Object} action [action to handle]
 */
function removePayementEntry(state,action){
	const {payLoad} = action ;
	const {id} = payLoad;

	return  state.delete(id);
}

/**
 * [removePayementId Remove a payement from allIds]
 * @param {List} state  [current state]
 * @param {Object} action [action to handle]
 */
function removePayementId(state,action){
	const {payLoad} = action ;
	const {id} = payLoad;

	return state.delete(state.indexOf(id));
}

/**
 * [setPayementCost Update a payement cost ]
 * @param {Map} state  [current state]
 * @param {Object} action [action to handle]
 */
function setPayementCost(state,action){
	const {payLoad} = action;
	const{id,cost} = payLoad;

	return state.update(id, payement => payement.set('cost',cost));
}

/**
 * [setPayementLabel Update a payement label]
 * @param {Map} state  [current state]
 * @param {Object} action [action to handle]
 */
function setPayementLabel(state,action){
	const {payLoad} = action;
	const{id,label} = payLoad;

	return state.update(id, payement => payement.set('label',label));
}

/**
 * [setPayementPaidBy Update a payement paidById]
 * @param {Object} state  [current state]
 * @param {Object} action [action to handle]
 */
function setPayementPaidBy(state,action){
	const {payLoad} = action;
	const{id,paidById} = payLoad;

	return state.update(id, payement => payement.set('paidById',paidById));
}

/**
 * [setPayementShares add a payement share]
 * @param {Map} state  [current state]
 * @param {Object} action [action to handle]
 */
function setPayementShares(state,action){
	const {payLoad} = action;
	const{id,payementId} = payLoad;

	return state.update(payementId, p => p.update('shares', s => s.push(id)));
}

/**
 * [handleRemoveFriend handle remove friend]
 * @param  {Map} state  [current state]
 * @param  {Object} action [action to handle]
 */
function handleRemoveFriend(state,action){
	const {payLoad} = action;
	const{id} = payLoad;

	return state.map(p => {
		if(p.get('paidById') === id){
			return p.set('paidById', null);
		}
		return p;
	})
}

/**
 * [payementsById Handle action for byId object]
 * @param {Map} [state=null] [current state]
 * @param {Object} action [action to handle]
 * @return {Object}            [next state]
 */
function payementsById(state = null,action){
	if(state === null){
		state = Map();
	}
	switch (action.type) {
		case ADD_PAYEMENT: return addPayementEntry(state,action);
		case SET_PAYEMENT_COST: return setPayementCost(state,action);
		case SET_PAYEMENT_LABEL: return setPayementLabel(state,action);
		case SET_PAYEMENT_PAID_BY: return setPayementPaidBy(state,action);
		case REMOVE_PAYEMENT : return removePayementEntry(state,action);
		case ADD_SHARE : return setPayementShares(state,action);
		case REMOVE_FRIEND : return handleRemoveFriend(state,action);
		default: return state;

	}
}

/**
 * [allPayements Handle action for allIds object]
 * @param {List} [state=null]  [current state]
 * @param {Object} action [action to handle]
 * @return {Array}            [next state]
 */
function allPayements(state = null,action){
	if(state===null){
		state = List();
	}
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
