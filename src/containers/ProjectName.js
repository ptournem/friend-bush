import {connect} from 'react-redux';
import {setProjectName} from '../actions';
import ProjectNameComponent from '../components/ProjectName';

const mapStateToProps = state => {
	return  {
		project : state.project
	};
}

const mapDispatchToProps = dispatch => {
	return {
    onSetProjectName: (name) => {
			dispatch(setProjectName(name));
		}
	}
}

const ProjectName = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectNameComponent)

export default ProjectName
