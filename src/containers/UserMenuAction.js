import {connect} from 'react-redux';
import UserMenuActionComponent from '../components/UserMenuAction';

const mapStateToProps = state => {
	return  {
    user : state.user.get('user')
	};
};

const mapDispatchToProps = dispatch => {
	return {};
};

const UserMenuAction = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserMenuActionComponent)


export default UserMenuAction;
