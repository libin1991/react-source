// @flow
import * as React from 'react';
import AppChildren from './appChildren';
import './App.less';
import SecondChildren from './secondChildren';

function concat(a: string, b: string) {
  return a + b;
}

concat('A', 'B'); // Works!
// concat(1, 2); // Error!

type Props = {
  children?: React.Node
};
type State = {
  a: number
};
class App extends React.Component<Props, State> {
  static defaultProps = {
    children: {}
  };

  constructor(props: Props) {
    super(props);
    this.state = {
      a: 1
    };
  }

  // method = (obj: { foo: string } | { bar: number }) => {
  //   if (obj.foo) {
  //     (obj.foo: string); // Error!
  //   }
  // };

  render() {
    const obj1: { foo: boolean } = { foo: true };
    const obj2: {
      foo: number,
      bar: boolean,
      baz: string
    } = {
      foo: 1,
      bar: true,
      baz: 'three'
    };
    console.log('obj', obj1, obj2);
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
