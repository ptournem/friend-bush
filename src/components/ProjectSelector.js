import React from 'react';

const ProjectSelector = ({localProjects, current, onLoadFromId,deleteProject}) => {

  const projects = localProjects.map(project =>{
    const checked = project.id === current;
    return (
        <li key={project.id}  className={checked?'active':''} >
          <span onClick={(e)=>{e.preventDefault(); onLoadFromId(project.id) }}>{checked ? 'x' : '>'} {""+project.name}</span>
          <button className="deleteProject" onClick={()=>deleteProject(project.id)}>x</button>
        </li>);
  });

  return (
    <ul className="recentProjects">
      {projects}
    </ul>
  );
}

export default ProjectSelector;
