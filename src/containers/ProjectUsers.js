import {connect} from 'react-redux';
import ProjectUsersComponent from '../components/ProjectUsers';

const mapStateToProps = state => {
  const usersObject = state.project.get('users');
  const users = typeof usersObject === "object" ?Object.values(usersObject) : [];
	return  {users};
}

const mapDispatchToProps = dispatch => {
	return {};
}

const ProjectUsers = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectUsersComponent)

export default ProjectUsers;
