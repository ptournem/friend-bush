import React, { Component} from 'react';
import AppContainer from './containers/App';
import ProjectSelector from './containers/ProjectSelector';
import UserMenuAction from './containers/UserMenuAction';
import ProjectAdder from './containers/ProjectAdder';
import './assets/css/app.css';
import 'flexboxgrid/css/flexboxgrid.min.css';

class App extends Component {
  render() {
    return (
      <div className="row" id="main">
        <section id="leftPane" className="col-xs-3 col-md-2">
          <div className="logoBlock">
            <h1>Friend<span>Bush</span></h1>
          </div>
          <div id="user-box">
            <UserMenuAction />
          </div>
          <div id="projectSelector">
            <ProjectSelector />
          </div>
          <ProjectAdder />
        </section>
        <div id="center" className="col-xs-9 col-md-10">
            <AppContainer />
        </div>
      </div>
    );
  }
}


export default App;
