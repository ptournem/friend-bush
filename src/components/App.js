import React from 'react';
import Friends from '../containers/Friends';
import Payements from '../containers/Payements';
import Accounts from '../containers/Accounts';

const App = ({onReset}) => {
	return (
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
	);
};

export default App;
