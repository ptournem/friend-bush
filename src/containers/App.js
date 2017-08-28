import {connect} from 'react-redux';
import {setProjectName, reset, loadJson} from '../actions';
import AppComponent from '../components/App';

const mapStateToProps = (state,ownProps) => {
	// get localProjects
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
		project : state.project,
		localProjects: projects,
	};
}

const mapDispatchToProps = dispatch => {
	return {
		onSetProjectName: (name) => {
			dispatch(setProjectName(name));
		},
		onReset : () => {
			dispatch(reset());
		},
		onLoadFromId : (id) => {
			if(!window.localStorage.getItem(id)){
				return ;
			}
			const data = JSON.parse(window.localStorage.getItem(id));
			dispatch(loadJson(data));
		}
	}
}

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppComponent)

export default App
