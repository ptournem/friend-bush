import {connect} from 'react-redux';
import {loadJson,reset, setProjectUsers, setShowProjectSelector} from '../actions';
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
			// récupération du projet courant
			database.ref('users/'+auth.currentUser.uid+'/current').once('value').then(snapshot=>{
				// si il y en a un, on se desabonne des changements
				if(snapshot.val()!= null){
					database.ref('projects/'+snapshot.val()).off();
				}

				// on s'abonne ensuite au project sélectionné
				database.ref('projects/'+id).on('value',snapshot=>{
					if(snapshot.val() !== null){
						dispatch(loadJson(JSON.parse(snapshot.val().data)));
						dispatch(setProjectUsers(snapshot.val().users));
					}
				});

				dispatch(setShowProjectSelector(false));
			})
		},
    deleteProject : (id)=>{
			dispatch(reset());
			const updates = {};
			updates['users/'+auth.currentUser.uid+'/projects/'+id] = null;
			updates['projects/'+ id + '/users/'+auth.currentUser.uid] = null;
			database.ref().update(updates);
    },
		onHideProjectSelector : () => {
			dispatch(setShowProjectSelector(false));
		}
	}
}

const ProjectSelector = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectSelectorComponent)

export default ProjectSelector
