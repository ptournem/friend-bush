import React from 'react';

const ProjectAdder=  ({user,projectId, onSetProjectId, onValidate, onSetHideSyncProject})=> {
  // si non connecté
  if(!user){
    return null;
  }


  return (
    <div className="modal is-active">
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Sync a project</p>
          <button className="delete" onClick={onSetHideSyncProject} aria-label="close"></button>
        </header>
        <section className="modal-card-body">
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
        </section>
      </div>
    </div>
  );
}

export default ProjectAdder;
