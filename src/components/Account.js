import React from 'react';
import AddFriend from '../containers/AddFriend';
import Friend from '../containers/Friend';

const Account = ({accounts, friends}) => {

  let totalPaid = 0;
  let totalOwed = 0;
  accounts.forEach(acc=>{
    totalPaid += parseFloat(acc.get('paid').toFixed(2));
    totalOwed += parseFloat(acc.get('owed').toFixed(2));
  })
  const row = friends.map(friend => {
    const acc = accounts.get(friend.get('id'));
    const rest = acc.get('paid')-acc.get('owed');
    return (
      <tr key={friend.get('id')}>
        <td> <Friend id={friend.get('id')} account={true} /></td>
        <td>{acc.get('paid').toFixed(2)}</td>
        <td>{acc.get('owed').toFixed(2)}</td>
        <td>{rest.toFixed(2)}</td>
      </tr>
    )
  })

  return (
    <tbody>
      {row}
      <tr>
        <td>Total</td>
        <td>{totalPaid.toFixed(2)}</td>
        <td>{totalOwed.toFixed(2)}</td>
        <td>{(totalPaid - totalOwed).toFixed(2)}</td>
      </tr>
      <tr>
        <td colSpan="4"><AddFriend /></td>
      </tr>
    </tbody>
  );
}

export default Account;
