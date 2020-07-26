import React, { Component, MouseEvent, MouseEventHandler } from 'react';
import styles from './App.module.css';
import SideBar from './Components/Sidebar/Sidebar';
import Home from './Containers/Home/Home';
import User from './Interfaces/User';

import {
  Switch,
  Route
} from "react-router-dom";

class App extends Component {
  makeTweetHandler: MouseEventHandler = (event: MouseEvent) => {
    console.log(this);
    console.log(event);
    return null;
  };

  user: User = {
    userId: 1,
    userName: 'Jason Nelson',
    handle: '@json_nlson',
    dateCreated: new Date(2015),
    avatarSrc: 'https://pbs.twimg.com/profile_images/482747445512638464/PMVg3H2y_400x400.jpeg',
    email: 'billburr@gmail.com'
  };

  mockPosts = [
    {
      id: 1,
      userId: 1,
      isRetweet: false,
      reTweetedPostId: null,
      userName: 'Jason Nelson',
      handle: '@json_nlson',
      date: new Date(),
      tweetText: 'Hello World!!!!1',
      image: 'default_profile_normal.png',
      retweetCount: 5,
      favoritesCount: 14,
      replies: []
    },
    {
      id: 2,
      userId: 2,
      isRetweet: false,
      reTweetedPostId: null,
      userName: 'Erika Wannigman',
      handle: '@e_wan',
      date: new Date(),
      tweetText: 'Hello World!!!!1',
      image: 'burr_profile_avatar.jpeg',
      retweetCount: 5,
      favoritesCount: 14,
      replies: []
    }
  ];

  render() {

    return (
      <div className={styles.GridLayout}>
        <SideBar />
        <Switch>
          <Route exact path="/home">
            <Home makeTweetHandler={this.makeTweetHandler} mockPosts={this.mockPosts} />
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
