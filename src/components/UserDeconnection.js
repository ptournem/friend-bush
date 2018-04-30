import React from 'react';

const UserDeconnection = ({user,logout}) => {
  return (
    <div className="button" onClick={logout}>
      <span className="icon">
        <i className="zmdi zmdi-power"></i>
      </span>
    </div>
  );
}

export default UserDeconnection;
