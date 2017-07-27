import React, { Component} from 'react';
import Friends from './containers/Friends';
import Payements from './containers/Payements';

class App extends Component {
  render() {
    return (
      <div className="App">
        <table>
          <Friends />
          <Payements />
        </table>
      </div>
    );
  }
}


export default App;
