import {connect} from 'react-redux';
import UserConnectionComponent from '../components/UserConnection';
import {setUser} from '../actions';
import {auth,provider} from '../firebase';

const mapStateToProps = state => {
	return {};
};

const mapDispatchToProps = dispatch => {
	return {
    login : () => {
			auth.signInWithPopup(provider)
	    .then((result) => {
	      setUser(result.user);
	    });
		}
	};
};

const UserConnection = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserConnectionComponent)


export default UserConnection;
