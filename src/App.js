import './App.css';
import { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import axios from 'axios';
import Search from './components/users/Search';
import PropTypes from 'prop-types';

class App extends Component {
  state = {
    users: [],
    loading: false
  }

  // async componentDidMount() {
  //   this.setState({ loading: true });
  //   const res = await axios.get("https://api.github.com/users");
  //   setTimeout(() => {
  //     this.setState({
  //       loading: false,
  //       users: res.data
  //     });
  //   }, 2000);

  // };

  static propTypes = {
    searhUsers: PropTypes.func.isRequired
  }

  searchUsers = async (text) => {
    this.setState({ loading: true, users: [] });
    const res = await axios.get(`https://api.github.com/search/users?q=${text}`);
    setTimeout(() => {
      this.setState({
        loading: false,
        users: res.data.items
      });
    }, 1000);
  }

  render() {
    const name = 'GitHub Finder';

    return (
      <div className="App">
        <Navbar title={name} icon={"fab fa-github"} />
        <div className="container">
          <Search searhUsers={this.searchUsers} />
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    )
  };
}

export default App;
