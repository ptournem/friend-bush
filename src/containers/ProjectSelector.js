import {connect} from 'react-redux';
import {loadJson,reset} from '../actions';
import {database,auth} from '../firebase';
import ProjectSelectorComponent from '../components/ProjectSelector';

const mapStateToProps = state => {
	
	return  {
		localProjects : state.user.get('projects')
	};
}

const mapDispatchToProps = dispatch => {
	return {
    onLoadFromId : (id) => {
			database.ref('projects/'+id).once('value').then(snapshot=>{
				if(snapshot.val() !== null){
					dispatch(loadJson(JSON.parse(snapshot.val())));
				}
			})
			
		},
    deleteProject : (id)=>{
			console.log('remove');
			dispatch(reset());
			database.ref('users/'+auth.currentUser.uid+'/projects/'+id).remove();
    }
	}
}

const ProjectSelector = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectSelectorComponent)

export default ProjectSelector
