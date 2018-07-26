import {connect} from 'react-redux';
import Account from '../components/Account';
import {Map,fromJS} from 'immutable';

function getAccounts(state){
	// init de la variable
	let accounts = Map();

	// on met à 0 chaque compte
	state.friends.byId.forEach(f => {
		accounts = accounts.set(f.get('id'), fromJS({id:f.get('id'), paid : 0, owed : 0}));
	})

	// on traite chaque payement
	state.payements.byId.forEach(p =>{
		let cost = parseFloat(("" + p.get('cost')).replace(',','.'));
		cost = cost ? cost : 0;

		// on ajoute au payeur
		if(p.get('paidById') != null && Number.isFinite(cost)){
			accounts = accounts.update(p.get('paidById'),
				a => {
					if(a!== null && typeof a !== 'undefined'){
							return a.update('paid',paid => paid + cost);
					}
					return a;

				}
			);
		}

		let totalWeight = 0;
		p.get('shares').forEach(s => {
			// on ajoute au poids total que les share dont l'user existe encore
			const share = state.shares.byId.get(s);
			const weight = share.get('weight');
			if(typeof weight === "number" && state.friends.byId.has(share.get('owedById'))){
				totalWeight+= weight;
			}
		});

		if(totalWeight > 0){
			p.get('shares').forEach( s =>{
				accounts = accounts.update(state.shares.byId.get(s).get('owedById'),
					a => {
						if(a!== null && typeof a !== 'undefined'){
								return a.update('owed', owed => owed + ((cost/totalWeight)* state.shares.byId.get(s).get('weight')));
						}
						return a;
					}
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
