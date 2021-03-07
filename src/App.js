import './App.css';
import { Component, Fragment } from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import axios from 'axios';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './components/pages/About';


class App extends Component {
  state = {
    users: [],
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
    const { users, loading, alert } = this.state;


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
            </Switch>
          </div>
        </div>
      </Router>
    )
  };
}

export default App;
