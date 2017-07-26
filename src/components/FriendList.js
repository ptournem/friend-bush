import React from 'react';
import Friend from './Friend';
import AddFriend from '../containers/AddFriend';

const FriendList =  ({friendsById, friends, onSetFriendName, onRemoveFriend }) => (
  <thead>
    <tr>
      {friends.map(friend => (
         <Friend key={friendsById[friend].id} {...friendsById[friend]}
           onSetFriendName={(name)=>onSetFriendName(friend,name)}
           onRemoveFriend={()=>onRemoveFriend(friend)} />
      ))}

      <th>
        <AddFriend />
      </th>
    </tr>
  </thead>

)

export default FriendList;
