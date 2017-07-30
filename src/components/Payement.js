import React from 'react';
import Share from '../containers/Share';

const Payement = ({ onRemovePayement, onSetPayementLabel, onSetPayementCost,onSetPayementPaidBy, payement, friends }) => {
  let labelInput;
  let costInput;
  let paidBySelect;

  return(
  <tr>
    <td>
      <input type="text"
        value={payement.get('label')===null?"":payement.get('label')}
        onChange={(e)=>{
          e.preventDefault()
          if(labelInput.value === ''){
              onSetPayementLabel(labelInput.value);
              return;
          }
          if(!labelInput.value.trim()){
            return;
          }
          onSetPayementLabel(labelInput.value);
        }}
        ref={node => {labelInput = node;}}
        />
    </td>
    <td>
    <input type="text"
      value={Number.isFinite(payement.get('cost'))?payement.get('cost').toFixed(2):'0.00'}
      onChange={(e)=>{
        e.preventDefault()
        if(!parseFloat(costInput.value.trim())){
          onSetPayementCost("");
          return;
        }
        onSetPayementCost(parseFloat(costInput.value));
      }}
      ref={node => {costInput = node;}}
      />
    </td>
    <td>
      <select value={payement.get('paidById')==null?"":payement.get('paidById')}
        onChange={(e)=>{
          onSetPayementPaidBy(paidBySelect.value===""?null:paidBySelect.value);
        }}
        ref={node => {paidBySelect = node;}}>
          <option value={""}>----------</option>
        {friends.map(friend =>(
          <option key={friend.get("id")} value={friend.get("id")}>{friend.get('name')}</option>
        ))}
      </select>
    </td>
    {friends.map(friend =>
      <Share key={payement.get('id') + "_" + friend.get('id')} payementId={payement.get('id')} friendId={friend.get('id')}/>
    )}

    <td>
      <button onClick={()=>{
          onRemovePayement()
        }}>
        x
      </button>
    </td>
  </tr>);
}

export default Payement;
