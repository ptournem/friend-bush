import {connect} from 'react-redux';
import {removeFriend, setFriendName} from '../actions';
import FriendList from '../components/FriendList';

const mapStateToProps = state => {
	return  {
		friends : state.friends.allIds.map(id=> state.friends.byId.get(id))
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
