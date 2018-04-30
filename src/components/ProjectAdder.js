import React from 'react';

const ProjectAdder=  ({user, users, projectId, current, onSetProjectId, onValidate, onSetHideSyncProject})=> {
  // si non connecté
  if(!user){
    return null;
  }

  const list =  users.map(user=>{
    return (<li key={user.photo} title={user.name}>
      <div className="level is-mobile ">
        <div className="level-left">
          <div className="level-item">
            <img className="image rounded is-48x48" src={user.photo} alt={user.name} />
          </div>
        </div>
        <div className="level-item">{user.name}</div>
      </div>
    </li>
    );
  })

  return (
    <div className="modal is-active">
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Project informations</p>
          <button className="delete" onClick={onSetHideSyncProject} aria-label="close"></button>
        </header>
        <section></section>
        <section className="modal-card-body">
          <h5 className="is-size-4">Share the project</h5>
          Send this id to your friend : <em>{current}</em>
          <hr />
          <h5 className="is-size-4">Add your friend project</h5>
          <div className="field has-addons">
            <p className="control is-expanded">
              <input className="input" value={projectId} onChange={onSetProjectId} type="text" placeholder="fill a project id"/>
            </p>
            <p className="control">
              <button className="button is-primary" title="Reset" onClick={()=>onValidate(projectId)}>
                <span className="icon">
                  <i className="zmdi zmdi-plus"></i>
                </span>
              </button>
            </p>
          </div>
          <hr />
          <ul id="project-sync-users-list">
            {list}
          </ul>
        </section>
      </div>
    </div>
  );
}

export default ProjectAdder;
