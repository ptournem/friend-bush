import {connect} from 'react-redux';
import Account from '../components/Account';
import {Map,fromJS} from 'immutable';

function getAccounts(state){
	let accounts = Map();
	state.friends.byId.forEach(f => {
		accounts = accounts.set(f.get('id'), fromJS({id:f.get('id'), paid : 0, owed : 0}));
	})

	state.payements.byId.forEach(p =>{
		if(p.get('paidById') != null && Number.isFinite(p.get('cost'))){
			accounts = accounts.update(p.get('paidById'),
				a => a.update('paid',
					paid => paid + p.get('cost')
				)
			);
		}

		let totalWeight = 0;
		p.get('shares').forEach(s => {
			totalWeight+= state.shares.byId.get(s).get('weight');
		});

		if(totalWeight > 0){
			p.get('shares').forEach( s =>{
				accounts = accounts.update(state.shares.byId.get(s).get('owedById'),
					a => a.update('owed',
						owed => owed + ((p.get('cost')/totalWeight)* state.shares.byId.get(s).get('weight'))
					)
				)
			})
		}
	})
	return accounts;
}


const mapStateToProps = (state) => {
	return  {
		accounts : getAccounts(state),
		friends : state.friends.allIds.map(id=> state.friends.byId.get(id))
	};
}

const Accounts = connect(
  mapStateToProps
)(Account)

export default Accounts
