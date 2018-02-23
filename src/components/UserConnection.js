import React from 'react';

const UserConnection = ({user,login,logout}) => {
  if(!user ){
    return   <button onClick={login} > Log In</button>;
  }

  return (
    <div>
    <img src={user.photoURL} alt="user"/>
    <button onClick={logout}> Log out</button>
    </div>
  );

}

export default UserConnection;
