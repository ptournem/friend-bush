import {connect} from 'react-redux';
import {addPayement} from '../actions';
import React from 'react';

import {connect} from 'react-redux';
import {addFriend} from '../actions';
import React from 'react';

const mapStateToProps = state => {
	return  {
		friends : state.friends.byId
	};
}

const mapDispatchToProps = dispatch => {
	return {
		onAddPayementClick: (label,cost) => {
			dispatch(addPayement)
		}
	}
}
