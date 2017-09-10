import {connect} from 'react-redux';
import FriendList from '../components/FriendList';

const mapStateToProps = (state,ownProps) => {
	return  {
		friends : state.friends.allIds.map(id=> state.friends.byId.get(id)),
		account : ownProps.account
	};
}

const mapDispatchToProps = dispatch => {
	return {}
}

const Friends = connect(
  mapStateToProps,
  mapDispatchToProps
)(FriendList)

export default Friends
