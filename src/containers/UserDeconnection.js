import {connect} from 'react-redux';
import UserDeconnectionComponent from '../components/UserDeconnection';
import {setUser} from '../actions';
import {auth} from '../firebase';

const mapStateToProps = state => {
	return  {
    user : state.user.get('user')
	};
};

const mapDispatchToProps = dispatch => {
	return {
		logout : () => {
			auth.signOut()
	        .then(() => {
	          setUser(null);
	        });
		}
	}
}

const UserDeconnection = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserDeconnectionComponent)


export default UserDeconnection;
