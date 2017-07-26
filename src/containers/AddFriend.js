import {connect} from 'react-redux';
import {addFriend} from '../actions';
import React from 'react';

let AddFriend = ({dispatch}) => {
	return (
			<form onSubmit={e=> {
				e.preventDefault();
				dispatch(addFriend());
				}}>
				<button type="submit">
					+
				</button>
			</form>
	);
}

AddFriend  = connect()(AddFriend);

export default AddFriend;
