import {connect} from 'react-redux';
import AppPageComponent from '../components/AppPage';

const mapStateToProps = (state,ownProps) => {
	return  {
		project: state.project
	};
}

const mapDispatchToProps = dispatch => {
	return {};
}

const AppPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppPageComponent)

export default AppPage
