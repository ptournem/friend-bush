import {connect} from 'react-redux';
import ProjectAdderComponent from '../components/ProjectAdder';
import {setAddProjectId,setShowSyncProject} from '../actions';
import {auth,database} from '../firebase';

const mapStateToProps = (state) => {
  const current = state.user.get('current')?state.user.get('current').split('_')[1]:'';
  const projectId = state.user.get('projectId');
  const usersObject = state.project.get('users');
  const users = typeof usersObject === "object" ?Object.values(usersObject) : [];
  return {
    user : state.user.get('user'),
    projectId,
    current,
    users
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSetProjectId : (event) => {
      dispatch(setAddProjectId(event.target.value));
    },
    onValidate : (id) =>{
      database.ref('projects/project_'+id).once('value').then(snapshot => {
        if(snapshot.val() !== null){
          const updates = {};
          updates['users/'+auth.currentUser.uid+'/projects/project_'+id]= (snapshot.val().name ? snapshot.val().name : 'no-name');
          updates['projects/project_'+id + "/users/"+auth.currentUser.uid+"/name"] = auth.currentUser.displayName;
          updates['projects/project_'+id + "/users/"+auth.currentUser.uid+"/photo"] = auth.currentUser.photoURL;
          database.ref().update(updates);
          dispatch(setAddProjectId(''));
          dispatch(setShowSyncProject(false));
        }
      })
    },
		onSetHideSyncProject : () => {
			dispatch(setShowSyncProject(false));
		},
  };
};

const ProjectAdder = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectAdderComponent);

export default ProjectAdder;
