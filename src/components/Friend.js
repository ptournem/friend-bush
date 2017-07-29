import React from 'react';

const Friend = ({ onRemoveFriend, onSetFriendName, friend }) => {
  let input ;

  return(
  <th>
    <input type="text"
      value={friend.get("name")===null?"":friend.get("name")}
      onChange={(e)=>{
        e.preventDefault()
        if(input.value === ""){
            onSetFriendName('');
            return;
        }

        if(!input.value.trim()){
          return;
        }

        onSetFriendName(input.value);
      }}
      ref={node => {input = node;}}
      />
    <button onClick={()=>{
        onRemoveFriend()
      }}>
      x
    </button>
  </th>);
}

export default Friend;
