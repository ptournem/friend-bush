import React from 'react';
import {setUser} from '../actions';
import {auth,provider} from '../firebase';

const UserConnection = ({user}) => {
  const login = () => {
    auth.signInWithPopup(provider)
    .then((result) => {
      setUser(result.user);
    });
  };

  const logout = () => {
    auth.signOut()
        .then(() => {
          setUser(null);
        });
  };

  if(!user ){
    return   <button onClick={login} > Log In</button>;
  }


  return (
    <div>
    <img src={user.photoURL} />
    <button onClick={logout}> Log out</button>
    </div>
  );

}

export default UserConnection;
