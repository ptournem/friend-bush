import React from 'react';
import Friend from './Friend';

const FriendList =  ({friends, onSetFriendName, onRemoveFriend, account }) => {
  const header = ['Payement', 'Price', 'Paid by'];
  const append = [''];
  return (
    <thead>
      <tr>
        {header.map(name => <th key={name}>{name}</th>)}
        {friends.map(friend => (
           <th key={friend.get("id")}>
             <Friend  friend={friend}
               onSetFriendName={(name)=>onSetFriendName(friend.get('id'),name)}
               onRemoveFriend={()=>onRemoveFriend(friend.get('id'))} account={account} />
           </th>
        ))}
        {append.map( label=> <th key={label}>{label}</th>)}

      </tr>
    </thead>
  )
}

export default FriendList;
