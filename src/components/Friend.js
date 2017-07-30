import React from 'react';

const Friend = ({ onRemoveFriend, onSetFriendName, friend , account }) => {
  let input = null ;
  let display = friend.get('name')===null?"":friend.get('name');
  if(!account){
    display = <input type="text"
      value={display}
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
      />;
  }

  return(
  <th>
    {display}
    {!account &&
      <button onClick={()=>{
          onRemoveFriend()
        }}>
        x
      </button>
    }
  </th>);
}

export default Friend;
