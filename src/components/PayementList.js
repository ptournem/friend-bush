import React from 'react';
import Payement from './Payement';
import AddPayement from '../containers/AddPayement';

const PayementList =  ({payementsById, payements, friends, friendsById, onSetPayementLabel, onSetPayementCost, onRemovePayement, onSetPayementPaidBy }) => (
  <tbody>
      {payements.map(payement => (
         <Payement key={payement} {...payementsById[payement]}
           friends={friends}
           friendsById={friendsById}
           onSetPayementLabel={(label)=>onSetPayementLabel(payement,label)}
           onSetPayementCost={(cost)=>onSetPayementCost(payement,cost)}
           onSetPayementPaidBy={(paidById)=>onSetPayementPaidBy(payement,paidById)}
           onRemovePayement={()=>onRemovePayement(payement)} />
      ))}

      <tr>
        <td colSpan={friends.length + 4}>
          <AddPayement />
        </td>
      </tr>
  </tbody>

)

export default PayementList;
