import React from 'react';

const ProjectUsers = ({users}) => {
  const list =  users.map(user=>{
    return (<li className="users-item" key={user.photo} title={user.name}>
      <img src={user.photo} alt={user.name} />
    </li>
    );
  })
  return <ul id="users-container"> {list} </ul>;
}

export default ProjectUsers;
