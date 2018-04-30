import React from 'react';
import Friends from '../containers/Friends';
import Payements from '../containers/Payements';
import Accounts from '../containers/Accounts';
import ProjectName from '../containers/ProjectName';

const App = ({user, current}) => {
	return (
		<div>
			<div>
				<ProjectName />
			</div>
			<table className="table is-striped is-fullwidth">
				<Friends account={false}/>
				<Payements />
			</table>
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
		</div>
	);
};

export default App;
