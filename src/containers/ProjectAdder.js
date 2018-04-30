import {connect} from 'react-redux';
import ProjectAdderComponent from '../components/ProjectAdder';
import {setAddProjectId,setShowSyncProject} from '../actions';
import {auth,database} from '../firebase';

const mapStateToProps = (state) => {
  const projectId = state.user.get('projectId');
  return {
    user : state.user.get('user'),
    projectId
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
