import {connect} from 'react-redux';
import {removeFriend, setFriendName} from '../actions';
import FriendList from '../components/FriendList';

const mapStateToProps = state => {
	return  {
		friendsById : state.friends.byId,
		friends : state.friends.allIds
	};
}

const mapDispatchToProps = dispatch => {
	return {
		onRemoveFriend: (id) => {
			dispatch(removeFriend(id));
		},
		onSetFriendName: (id, name)=> {
			dispatch(setFriendName(id,name));
		}
	}
}

const Friends = connect(
  mapStateToProps,
  mapDispatchToProps
)(FriendList)

export default Friends
