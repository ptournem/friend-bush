import React from 'react';

const Account = ({accounts}) => {

  let totalPaid = 0;
  let totalOwed = 0;
  accounts.forEach(acc=>{
    totalPaid += parseFloat(acc.get('paid').toFixed(2));
    totalOwed += parseFloat(acc.get('owed').toFixed(2));
  })
  return (
  <tbody>
    <tr>
      <td>Paid</td>
      {accounts.valueSeq().map(acc => {
        return (
          <td key={acc.get('id')}>
            {acc.get('paid').toFixed(2)}
          </td>
        )}
      )}
      <td>{totalPaid.toFixed(2)}</td>
    </tr>
    <tr>
      <td>Owed</td>
      {accounts.valueSeq().map(acc => {
        return (
          <td key={acc.get('id')}>
            {acc.get('owed').toFixed(2)}
          </td>
        )}
      )}
      <td>{totalOwed.toFixed(2)}</td>
    </tr>
    <tr>
      <td>Rest</td>
      {accounts.valueSeq().map(acc => {
        return (
          <td key={acc.get('id')}>
            {(acc.get('paid') -  acc.get('owed')).toFixed(2)}
          </td>
        )}
      )}
      <td>{(totalPaid -totalOwed).toFixed(2)}</td>
    </tr>
  </tbody>
)}

export default Account;
