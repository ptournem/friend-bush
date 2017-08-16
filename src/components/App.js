import React from 'react';
import Friends from '../containers/Friends';
import Payements from '../containers/Payements';
import Accounts from '../containers/Accounts';

const App = ({project, onSetProjectName, onReset, localProjects,onLoadFromId}) => {
	// show all local projects
	const projects = localProjects.map((project =>{
		const checked = project.id=== sessionStorage['current'];
		return (
			<li>
				<a href="#" onClick={(e)=>{e.preventDefault; onLoadFromId(project.id) }}>{project.name}</a>
				{checked?' (current)':''}
			</li>);
	}));
	return (
		<div className="App">
			<input type="text" value={project.get('name')} onChange={(evt)=> onSetProjectName(evt.target.value)}/>
			<button onClick={onReset}> Reset </button>
          <table>
            <Friends />
            <Payements />
          </table>
          <br />
          <table>
            <Friends account={true} />
            <Accounts />
          </table>

		  <ul>
			  {projects}
		  </ul>
        </div>
	);
};

export default App;
