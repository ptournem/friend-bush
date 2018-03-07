import React from 'react';
import Friends from '../containers/Friends';
import Payements from '../containers/Payements';
import Accounts from '../containers/Accounts';
import ProjectName from '../containers/ProjectName';
import ResetProject from '../containers/ResetProject';

const App = ({user, current}) => {
	if(!user){
		return (
			<div className="App row">
				<div className="col-md-12" id="not-connected">
					<div className="logoBlock">
						<h1>Friend<span>Bush</span></h1>
					</div>
					<h1>
						You have to be connected to use the application
					</h1>
				</div>
			</div>
		)
	}

	return (
		<div>
			<div className="row">
				<header>
					<div className="row">
							<div className="col-xs-9">
									<ProjectName />
							</div>
							<div className="col-xs-3">
									<ResetProject />
							</div>
					</div>
				</header>
			</div>
			<div className="projectId">
				{current}
			</div>
			<div className="App row">
				<div className="col-md-8">
					<div className="panel">
						<table>
							<Friends account={false}/>
							<Payements />
						</table>
					</div>
				</div>
	      <div className="col-md-4">
					<div className="panel">
						<table>
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
	      </div>
	    </div>
		</div>
	);
};

export default App;
