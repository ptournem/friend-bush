import React from 'react';

const Friend = ({ onRemoveFriend, onSetFriendName, friend , account }) => {
  let input = null ;
  let display = friend.get('name')===null?"":friend.get('name');
  if(account===true){
    display = <input type="text"
      value={display}
      placeholder="no name"
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
  <div>
    {display}
    {account === true &&
      <button onClick={()=>{
          onRemoveFriend()
        }}>
        x
      </button>
    }
  </div>);
}

export default Friend;
