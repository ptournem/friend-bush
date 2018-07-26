import {connect} from 'react-redux';
import {setPayementCost, setPayementLabel, removePayement, setPayementPaidBy} from '../actions';
import PayementList from '../components/PayementList';

const mapStateToProps = state => {
	return  {
		payements : state.payements.allIds.map(id=> state.payements.byId.get(id)),
		friends : state.friends.allIds.map(id=> state.friends.byId.get(id))
	};
}

const mapDispatchToProps = dispatch => {
	return {
		onRemovePayement: (id) => {
			dispatch(removePayement(id));
		},
		onSetPayementLabel: (id, label)=> {
			dispatch(setPayementLabel(id,label));
		},
		onSetPayementCost: (id, cost)=> {
			dispatch(setPayementCost(id,cost));
		},
    onSetPayementPaidBy: (id,paidById)=>{
      dispatch(setPayementPaidBy(id,paidById));
    }
	}
}

const Payements = connect(
  mapStateToProps,
  mapDispatchToProps
)(PayementList)

export default Payements
