import React from 'react';
import Friend from './Friend';
import AddFriend from '../containers/AddFriend';

const FriendList =  ({friends, onSetFriendName, onRemoveFriend }) => (
  <thead>
    <tr>
      <th>Payement</th>
      <th>Cost</th>
      <th>Paid By</th>
      {friends.map(friend => (
         <Friend key={friend.get("id")} friend={friend}
           onSetFriendName={(name)=>onSetFriendName(friend.get('id'),name)}
           onRemoveFriend={()=>onRemoveFriend(friend.get('id'))} />
      ))}

      <th>
        <AddFriend />
      </th>
    </tr>
  </thead>

)

export default FriendList;
