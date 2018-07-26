import {connect} from 'react-redux';
import MainComponent from '../components/Main';

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

const Main = connect(
  mapStateToProps,
  mapDispatchToProps
)(MainComponent)

export default Main
