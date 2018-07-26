import React from 'react';
import AppContainer from '../containers/App';
import AppNavbar from '../containers/AppNavBar';
import ProjectSelector  from '../containers/ProjectSelector';
import ProjectAdder  from '../containers/ProjectAdder';

const AppPage = ({project}) => {
	return (
		<div>
						<AppNavbar />
						<AppContainer />
						{project.get('showSelectProject')?<ProjectSelector />:''}
						{project.get('showSyncProject')?<ProjectAdder />:''}
		</div>
	);
};

export default AppPage;
