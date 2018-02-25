import {connect} from 'react-redux';
import {loadJson,reset} from '../actions';
import {database,auth} from '../firebase';
import ProjectSelectorComponent from '../components/ProjectSelector';

const mapStateToProps = state => {
	
	return  {
		localProjects : state.user.get('projects'),
		current : state.user.get('current')
	};
}

const mapDispatchToProps = dispatch => {
	return {
    onLoadFromId : (id) => {
			database.ref('projects/'+id + '/data').once('value').then(snapshot=>{
				if(snapshot.val() !== null){
					dispatch(loadJson(JSON.parse(snapshot.val())));
				}
			})
			
		},
    deleteProject : (id)=>{
			dispatch(reset());
			const updates = {};
			updates['users/'+auth.currentUser.uid+'/projects/'+id] = null;
			updates['projects/'+ id + '/users/'+auth.currentUser.uid] = null;
			database.ref().update(updates);
    }
	}
}

const ProjectSelector = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectSelectorComponent)

export default ProjectSelector
