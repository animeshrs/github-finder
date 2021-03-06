import './App.css';
import { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import axios from 'axios';
import Search from './components/users/Search';

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

  clearUsers = () => {
    this.setState({
      users: [],
      loading: false
    })
  }

  render() {
    const name = 'GitHub Finder';
    const { users, loading } = this.state;


    return (
      <div className="App">
        <Navbar title={name} icon={"fab fa-github"} />
        <div className="container">
          <Search searhUsers={this.searchUsers} clearUsers={this.clearUsers}
            showClear={users.length > 0} />
          <Users loading={loading} users={users} />
        </div>
      </div>
    )
  };
}

export default App;
