import React from 'react';

const ProjectAdder=  ({user,projectId, onSetProjectId, onValidate})=> {
  // si non connecté
  if(!user){
    return null;
  }


  return (
    <div className="project-adder">
      <h4> Add a friend project</h4>
      <input type="text" value={projectId} onChange={onSetProjectId} />
      <button title="Reset" onClick={()=>onValidate(projectId)}> Add </button>
    </div>
  );
}

export default ProjectAdder;
