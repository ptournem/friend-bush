import React from 'react';

const ProjectAdder=  ({projectId, onSetProjectId, onValidate})=> {
  return (
    <div className="project-adder">
      <h4> Ajouter un projet</h4>
      <input type="text" value={projectId} onChange={onSetProjectId} />
      <button title="Reset" onClick={()=>onValidate(projectId)}> Ajouter </button>
    </div>
  );
}

export default ProjectAdder;
