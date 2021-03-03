import './App.css';
import { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import axios from 'axios';

class App extends Component {
  state = {
    users: [],
    loading: false
  }
  async componentDidMount() {
    this.setState({ loading: true });
    const res = await axios.get("https://api.github.com/users");
    this.setState({
      loading: false,
      users: res.data
    });
  };

  render() {
    const name = 'Github Finder';

    return (
      <div className="App">
        <Navbar title={name} icon={"fab fa-github"} />
        <div className="container">
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    )
  };
}

export default App;