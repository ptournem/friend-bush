import React from 'react';
import UserConnection from '../containers/UserConnection';
import UserDeconnection from '../containers/UserDeconnection';

const UserMenuAction = ({user}) => {
  if(user){
    return <UserDeconnection />;
  }

  return <UserConnection />;
}

export default UserMenuAction;
