import {connect} from 'react-redux';
import {reset} from '../actions';
import ResetProjectComponent from '../components/ResetProject';

const mapStateToProps = state => {
	return  {};
}

const mapDispatchToProps = dispatch => {
	return {
    onReset : () => {
			dispatch(reset());
		}
	}
}

const ResetProject = connect(
  mapStateToProps,
  mapDispatchToProps
)(ResetProjectComponent)

export default ResetProject
