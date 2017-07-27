import React from 'react';

const Payement = ({ onRemovePayement, onSetPayementLabel, onSetPayementCost,onSetPayementPaidBy, label,cost, paidById, friends, friendsById }) => {
  let labelInput;
  let costInput;
  let paidBySelect;

  return(
  <tr>
    <td>
      <input type="text"
        value={label===null?"":label}
        onChange={(e)=>{
          e.preventDefault()
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
      value={cost===null?"":cost}
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
      <select value={paidById==null?"":paidById}
        onChange={(e)=>{
          onSetPayementPaidBy(paidBySelect.value);
        }}
        ref={node => {paidBySelect = node;}}>
          <option value={""}>----------</option>
        {friends.map(friend =>(
          <option key={friend} value={friend}>{friendsById[friend].name}</option>
        ))}
      </select>
    </td>
    {friends.map(friend =>(
      <td key={friend}></td>
    ))}
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
