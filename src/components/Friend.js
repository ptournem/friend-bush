import React from 'react';

const Friend = ({ onRemoveFriend, onSetFriendName, name }) => {
  let input ;

  return(
  <th>
    <input type="text"
      value={name===null?"":name}
      onChange={(e)=>{
        e.preventDefault()
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
