import React from 'react';

const UserConnection = ({login}) => {
  return  (
    <a className="button is-info" onClick={login} >
      <span className="icon">
        <i className="zmdi zmdi-google"></i>
      </span>
      <span>Log In with Google</span>
    </a>
  );
}

export default UserConnection;
