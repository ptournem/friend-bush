import React from 'react';

const ProjectAdder=  ({user,projectId, onSetProjectId, onValidate})=> {
  // si non connecté
  if(!user){
    return null;
  }


  return (
    <div className="project-adder">
      <h4> Ajouter un projet</h4>
      <input type="text" value={projectId} onChange={onSetProjectId} />
      <button title="Reset" onClick={()=>onValidate(projectId)}> Ajouter </button>
    </div>
  );
}

export default ProjectAdder;
