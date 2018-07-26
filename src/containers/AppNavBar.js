import {connect} from 'react-redux';
import {setShowSyncProject,setShowProjectSelector} from '../actions';
import AppNavBarComponent from '../components/AppNavBar';

const mapStateToProps = (state,ownProps) => {
	return  {
    user : state.user.get('user')
	};
}

const mapDispatchToProps = dispatch => {
	return {
		onSetShowSyncProject : () => {
			dispatch(setShowSyncProject(true));
		},
		onSetShowProjectSelector : () => {
			dispatch(setShowProjectSelector(true));
		}
	};
}

const AppNavBar = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppNavBarComponent)

export default AppNavBar
