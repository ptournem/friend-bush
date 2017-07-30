import React, { Component} from 'react';
import Friends from './containers/Friends';
import Payements from './containers/Payements';
import Accounts from './containers/Accounts';

class App extends Component {
  render() {
    return (
      <div className="App">
        <table>
          <Friends />
          <Payements />
        </table>
        <br />
        <table>
          <Friends account={true} />
          <Accounts />
        </table>
      </div>
    );
  }
}


export default App;
