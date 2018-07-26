import React from 'react';

const ResetProject=  ({onReset})=> {
  return (
    <button className="button" onClick={onReset} title="Reset">
      <span className="icon">
        <i className="zmdi zmdi-plus"></i>
      </span>      
    </button>
  );
}

export default ResetProject;
