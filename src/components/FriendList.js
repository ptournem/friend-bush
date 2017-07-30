import React from 'react';
import Friend from './Friend';
import AddFriend from '../containers/AddFriend';

const FriendList =  ({friends, onSetFriendName, onRemoveFriend, account }) => {
  const header = account ?['']:['Payement', 'Cost', 'Paid by'];
  const append = account ? 'Total' :<AddFriend /> ;

  return (
    <thead>
      <tr>
        {header.map(name => <th key={name}>{name}</th>)}
        {friends.map(friend => (
           <Friend key={friend.get("id")} friend={friend}
             onSetFriendName={(name)=>onSetFriendName(friend.get('id'),name)}
             onRemoveFriend={()=>onRemoveFriend(friend.get('id'))} account={account} />
        ))}
        <td>{append}</td>

      </tr>
    </thead>
  )
}

export default FriendList;
