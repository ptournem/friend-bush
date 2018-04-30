import React from 'react';

import ResetProject from '../containers/ResetProject';
import UserDeconnection from '../containers/UserDeconnection';

const AppNavBar = ({user, current, onSetShowSyncProject, onSetShowProjectSelector}) => {
	const NavBarMenuAction = (<div id="navbar-menu-action" className="is-pulled-right">
		<div className="navbar-item">
			<button className="button" onClick={onSetShowProjectSelector}>
				<span className="icon">
					<i className="zmdi zmdi-apps"/>
				</span>
			</button>
			<button className="button" onClick={onSetShowSyncProject}>
				<span className="icon">
					<i className="zmdi zmdi-cloud-download"/>
				</span>
			</button>
			<ResetProject />
			<UserDeconnection />
		</div>
	</div>);


	return (
		<div className="navbar is-fixed-top">
			{user ? NavBarMenuAction : null}
			<div className="navbar-brand">
				<div className="navbar-item is-brand-name">
					Friend<span>Bush</span>
				</div>
			</div>
		</div>
	);

};

export default AppNavBar;
