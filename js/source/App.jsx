import React from 'react';
import Logo from './components/Logo';
import '../../css/app.css';

class App extends React.Component {
  render() {
    return (
      <h1>
        <Logo /> Welcome to The App!
      </h1>
    );
  }
}

export default App;
