import {ADD_PAYEMENT, SET_PAYEMENT_COST, SET_PAYEMENT_LABEL,SET_PAYEMENT_PAID_BY, REMOVE_PAYEMENT} from '../actions';
import {combineReducers} from 'redux';

function addPayementEntry(state,action){
	const {payLoad} = action ;
	const {id,label,cost } = payLoad;

	const payement =  {id : id, label : label, cost: cost};

	return {
		...state,
		[id] : payement
	};
}

function addPayementId(state,action){
	const {payLoad} = action ;
	const {id} = payLoad;

	return state.concat(id);
}

function removePayementEntry(state,action){
	const {payLoad} = action ;
	const {id} = payLoad;

	const res =  Object.keys(state).filter(payementId=>  payementId===id).reduce((obj,key)=>{
		obj[key]=state[key];
		return obj
	},{});

	return res;
}

function removePayementId(state,action){
	const {payLoad} = action ;
	const {id} = payLoad;

	return state.filter(payementId=> payementId!==id);
}

function payementsById(state = {},action){
	switch (action.type) {
		case ADD_PAYEMENT: return addPayementEntry(state,action);
		case SET_PAYEMENT_COST: return state;
		case SET_PAYEMENT_LABEL: return state;
		case SET_PAYEMENT_PAID_BY: return state;
		case REMOVE_PAYEMENT : return removePayementEntry(state,action);
		default: return state;

	}
}

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
