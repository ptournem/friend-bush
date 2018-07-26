import React from 'react';
import Payement from './Payement';
import AddPayement from '../containers/AddPayement';

const PayementList =  ({payements, friends, friendsById, onSetPayementLabel, onSetPayementCost, onRemovePayement, onSetPayementPaidBy }) => (
  <tbody>
      {payements.map(payement => (
         <Payement key={payement.get('id')} payement={payement}
           friends={friends}
           onSetPayementLabel={(label)=>onSetPayementLabel(payement.get('id'),label)}
           onSetPayementCost={(cost)=>onSetPayementCost(payement.get('id'),cost)}
           onSetPayementPaidBy={(paidById)=>onSetPayementPaidBy(payement.get('id'),paidById)}
           onRemovePayement={()=>onRemovePayement(payement.get('id'))} />
      ))}

      <tr>
        <td colSpan={friends.length + 4}>
          <AddPayement />
        </td>
      </tr>
  </tbody>

)

export default PayementList;
