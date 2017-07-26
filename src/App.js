import React, { Component} from 'react';
import Friends from './containers/Friends';

class App extends Component {
  render() {
    return (
      <div className="App">
        <table>
          <Friends />
        </table>
      </div>
    );
  }
}


export default App;
