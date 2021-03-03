import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
import { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';

class App extends Component {
  render() {
    const name = 'Github Finder';

    return (
      <div className="App">
        <Navbar title={name} icon={"fab fa-github"} />
        <div className="container">
          <Users />
        </div>
      </div>
    )
  };
}

export default App;
