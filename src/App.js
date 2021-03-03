import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
import { Component } from 'react';
import Navbar from './components/layout/Navbar';
import UserItem from './components/users/UserItem';

class App extends Component {
  render() {
    const name = 'Github Finder';

    return (
      <div className="App">
        <Navbar title={name} icon={"fab fa-github"} />
        <UserItem />
      </div>
    )
  };
}

export default App;
