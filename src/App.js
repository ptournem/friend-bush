import React, { Component} from 'react';
import AppContainer from './containers/App';
import ProjectSelector from './containers/ProjectSelector';
import ProjectName from './containers/ProjectName';
import ResetProject from './containers/ResetProject';
import UserConnection from './containers/UserConnection';
import './assets/css/app.css';
import 'flexboxgrid/css/flexboxgrid.min.css';

class App extends Component {
  render() {
    return (
      <div className="row" id="main">
        <section id="leftPane" className="col-xs-3 col-md-2">
          <div id="logoBlock">
            <h1>Friend<span>Bush</span></h1>
          </div>
          <div id="user-box">
            <UserConnection  />
          </div>
          <div id="projectSelector">
            <ProjectSelector />
          </div>
        </section>
        <div id="center" className="col-xs-9 col-md-10">
            <div className="row">
              <header>
                <div className="row">
                    <div className="col-xs-9">
                        <ProjectName />
                    </div>
                    <div className="col-xs-3">
                        <ResetProject />
                    </div>
                </div>                              
              </header>
            </div>
            <AppContainer />
        </div>
      </div>
    );
  }
}


export default App;
