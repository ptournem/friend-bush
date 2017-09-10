import {connect} from 'react-redux';
import {loadJson} from '../actions';
import ProjectSelectorComponent from '../components/ProjectSelector';

const mapStateToProps = state => {
  let projects = [];
	for(let i = 0; i<window.localStorage.length; i++){
		var key = window.localStorage.key(i);
		var data = window.localStorage.getItem(key);
		try {
			const parsed = JSON.parse(data)
			projects.push(parsed.project)
		} catch(e) {
			continue;
		}

		;
	}
	return  {
		localProjects : projects
	};
}

const mapDispatchToProps = dispatch => {
	return {
    onLoadFromId : (id) => {
			if(!window.localStorage.getItem(id)){
				return ;
			}
			const data = JSON.parse(window.localStorage.getItem(id));
			dispatch(loadJson(data));
		},
    deleteProject : (id)=>{
      if(window.localStorage.getItem(id) && sessionStorage['current'] !== id){
        window.localStorage.removeItem(id);
      }
    }
	}
}

const ProjectSelector = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectSelectorComponent)

export default ProjectSelector
