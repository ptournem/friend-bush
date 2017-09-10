import React from 'react';

const ProjectSelector = ({localProjects,onLoadFromId,deleteProject}) => {

  const projects = localProjects.map(project =>{
    const checked = project.id=== sessionStorage['current'];
    return (
        <li key={project.id}  className={checked?'active':''} >
          <span onClick={(e)=>{e.preventDefault(); onLoadFromId(project.id) }}>{project.name}</span>
          <button onClick={()=>deleteProject(project.id)}>x</button>
        </li>);
  });

  return (
    <ul className="recentProjects">
      {projects}
    </ul>
  );
}

export default ProjectSelector;
