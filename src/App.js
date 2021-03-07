import './App.css';
import { Component, Fragment } from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import User from './components/users/User';
import axios from 'axios';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './components/pages/About';


class App extends Component {
  state = {
    users: [],
    user: {},
    loading: false,
    alert: null
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

  getUser = async (userName) => {
    this.setState({ loading: true, user: {} });
    const res = await axios.get(`https://api.github.com/users/${userName}`);
    setTimeout(() => {
      this.setState({
        loading: false,
        user: res.data
      });
    }, 1000);
  }

  clearUsers = () => {
    this.setState({
      users: [],
      loading: false
    })
  }

  setAlert = (msg, type) => {
    this.setState({
      alert: { msg, type }
    });

    setTimeout(() => {
      this.setState({
        alert: null
      });
    }, 3000);
  }

  render() {
    const name = 'GitHub Finder';
    const { users, loading, alert, user } = this.state;


    return (
      <Router>
        <div className="App">
          <Navbar title={name} icon={"fab fa-github"} />
          <div className="container">
            <Alert alert={alert} />
            <Switch>
              <Route exact path="/" render={props => (
                <Fragment>
                  <Search searhUsers={this.searchUsers} clearUsers={this.clearUsers}
                    showClear={users.length > 0}
                    setAlert={this.setAlert} />
                  <Users loading={loading} users={users} />
                </Fragment>
              )} />
              <Route exact path="/about" component={About} />
              <Route exact path="/user/:login" render={props => (
                <User {...props} getUser={this.getUser} user={user}
                  loading={loading} />
              )} />
            </Switch>
          </div>
        </div>
      </Router>
    )
  };
}

export default App;
