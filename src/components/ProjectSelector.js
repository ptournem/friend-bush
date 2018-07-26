import React from 'react';

const ProjectSelector = ({localProjects, current, onLoadFromId, deleteProject, onHideProjectSelector}) => {

  const projects = localProjects.map(project =>{
    const checked = project.id === current;
    return (
        <tr key={project.id}  className={checked?'is-selected':''}  onClick={(e)=>{e.preventDefault(); onLoadFromId(project.id) }}>
          <td > {project.name}</td>
          <td style={{'width': '20px'}}>
            <button className="button" onClick={()=>deleteProject(project.id)}>
              <span className="icon">
                <i className="zmdi zmdi-delete"></i>
              </span>
            </button>
          </td>
        </tr>);
  });

  return (
    <div className="modal is-active">
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Projects</p>
          <button className="delete" onClick={onHideProjectSelector} aria-label="close"></button>
        </header>
        <section className="modal-card-body">
          <table className="table is-fullwidth is-hoverable">
            <tbody>
              {projects}
            </tbody>
          </table>


        </section>
      </div>
    </div>
  );
}

export default ProjectSelector;
