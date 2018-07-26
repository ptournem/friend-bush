import {connect} from 'react-redux';
import {removeFriend, setFriendName} from '../actions';
import FriendComponent from '../components/Friend';

const mapStateToProps = (state,ownProps) => {
	return  {
		friend : state.friends.byId.get(ownProps.id),
		account : ownProps.account
	};
}

const mapDispatchToProps = (dispatch,ownProps) => {
	return {
		onRemoveFriend: () => {
			dispatch(removeFriend(ownProps.id));
		},
		onSetFriendName: (name)=> {
			dispatch(setFriendName(ownProps.id,name));
		}
	}
}

const Friend = connect(
  mapStateToProps,
  mapDispatchToProps
)(FriendComponent);

export default Friend;
