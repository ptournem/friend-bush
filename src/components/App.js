import React from 'react';
import Friends from '../containers/Friends';
import Payements from '../containers/Payements';
import Accounts from '../containers/Accounts';
import ProjectName from '../containers/ProjectName';

const App = ({user, current, currentTab, onChangeTab}) => {

	const tabs = [];
	tabs[0] = (
		<table className="table is-striped is-fullwidth">
			<Friends account={false}/>
			<Payements />
		</table>
	);

	tabs[1] = (
		<table className="table is-striped is-fullwidth">
			<thead>
				<tr>
					<th>Friend</th>
					<th>Paid</th>
					<th>Owed</th>
					<th>Rest</th>
				</tr>
			</thead>
			<Accounts/>
		</table>
	)

	return (
		<div>
			<div>
				<ProjectName />
			</div>
			<div className="tabs is-centered">
			  <ul>
			    <li className={currentTab === 0 ? 'is-active' : ''}><a onClick={()=>{onChangeTab(0)}}>Payements</a></li>
			    <li className={currentTab === 1 ? 'is-active' : ''}><a onClick={()=>{onChangeTab(1)}}>Friends</a></li>
			  </ul>
			</div>
			{tabs[currentTab]}


		</div>
	);
};

export default App;
