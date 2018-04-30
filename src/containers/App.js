import {connect} from 'react-redux';
import {setCurrentTab} from '../actions';
import AppComponent from '../components/App';

const mapStateToProps = (state,ownProps) => {
	return  {
		user: state.user.get('user'),
		currentTab : state.project.get('currentTab')
	};
}

const mapDispatchToProps = dispatch => {
	return {
		onChangeTab : (tabId)=> {
			dispatch(setCurrentTab(tabId))
		}
	};
}

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppComponent)

export default App
