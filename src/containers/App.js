import {connect} from 'react-redux';
import AppComponent from '../components/App';

const mapStateToProps = (state,ownProps) => {
	const current = state.user.get('current')?state.user.get('current').split('_')[1]:'';
	return  {
		user: state.user.get('user'),
		current
	};
}

const mapDispatchToProps = dispatch => {
	return {};
}

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppComponent)

export default App
