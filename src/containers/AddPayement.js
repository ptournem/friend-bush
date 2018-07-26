import {connect} from 'react-redux';
import {addPayement} from '../actions';
import React from 'react';

let AddPayement = ({dispatch}) => {
	return (
			<form onSubmit={e=> {
				e.preventDefault();
				dispatch(addPayement());
				}}>
				<button type="submit">
					+
				</button>
			</form>
	);
}

AddPayement  = connect()(AddPayement);

export default AddPayement;
