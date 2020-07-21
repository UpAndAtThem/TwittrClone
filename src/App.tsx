import React, { Component, MouseEvent, MouseEventHandler } from 'react';
import styles from './App.module.css';
import SideBar from './Components/Sidebar/Sidebar';
import Home from './Containers/Home/Home';

import {
  Switch,
  Route
} from "react-router-dom";

class App extends Component {
  makeTweet: MouseEventHandler = (event: MouseEvent) => {
    return null;
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
      image: null,
      tweetContentUrl: null,
      retweetCount: 5,
      favoritesCount: 14,
      replies: []
    },
    {
      id: 1,
      userId: 2,
      isRetweet: false,
      reTweetedPostId: null,
      userName: 'Erika Wannigman',
      handle: '@e_wan',
      date: new Date(),
      tweetText: 'Hello World!!!!1',
      image: null,
      tweetContentUrl: null,
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
          <Home makeTweet={this.makeTweet} mockPosts={ this.mockPosts } />
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
