import React, { Component } from 'react';
import AppChildren from './appChildren';
import './App.css';
import SecondChildren from './secondChildren';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      a: 1
    };
  }

  render() {
    const { children } = this.props;
    const { a } = this.state;
    console.log(children);
    console.log(this.props);
    console.log(a);
    return (
      <div className="App">
        <header className="App-header">
          <AppChildren>
            <SecondChildren />
            <SecondChildren />
          </AppChildren>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
