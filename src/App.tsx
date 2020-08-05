import React, { Component } from 'react';
import styles from './App.module.css';
import SideBar from './Components/Sidebar/Sidebar';
import Home from './Containers/Home/Home';
import User from './Interfaces/User';


import {
  Switch,
  Route
} from "react-router-dom";

interface State {
  user: User;
}

class App extends Component<{}, State> {
  constructor(props: any) {
    super(props);
    // console.log('App Component Renders');
    this.state = {
      user: this.getUser(),
    };
  }

  componentDidMount() {
  }

  getUser = (): User => {
    return (
      {
        userId: 1,
        userName: 'Jason Nelson',
        handle: '@json_nlson',
        dateCreated: new Date(2015),
        avatarSrc: "/default_profile_normal.png",
        email: 'billburr@gmail.com'
      }
    )
  };

  render() {
    return (
      <div className={styles.GridLayout}>
        <SideBar />
        <Switch>
          <Route exact path="/home">
            <Home
              user={this.state.user}
            />
          </Route>
          <Route path="/users">

          </Route>
          <Route path="/">

          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
