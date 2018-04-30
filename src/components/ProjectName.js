import React from 'react';

const ProjectName=  ({project,onSetProjectName})=> {
  return (
    <input className="input" placeholder="Nom de l'évènement" id="projectName" type="text" value={project.get('name')} onChange={(evt)=> onSetProjectName(evt.target.value)}/>
  );
}

export default ProjectName;
