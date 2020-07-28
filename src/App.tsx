import React, { Component } from 'react';
import styles from './App.module.css';
import SideBar from './Components/Sidebar/Sidebar';
import Home from './Containers/Home/Home';
import User from './Interfaces/User';
import Post from './Interfaces/Post';

import {
  Switch,
  Route
} from "react-router-dom";

interface State {
  tweetInputPlaceholder: string;
  user: User;
  tweets: Array<Post>
}

class App extends Component<{}, State> {
  constructor(props: any) {
    super(props);

    this.state = {
      tweetInputPlaceholder: 'Whats Happening?',
      user: this.getUser(),
      tweets: this.getTweets(this.getUser().userId)
    };
  }

  getUser: any = (): User => {
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

  getTweets: any = (userId: number): Post[] | undefined => {
    if (userId) {
      return (
        [
          {
            id: 1,
            userId: 1,
            isRetweet: false,
            retweetedPostId: undefined,
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
            retweetedPostId: undefined,
            userName: 'Erika Wannigman',
            handle: '@e_wan',
            date: new Date(),
            tweetText: 'Hello World!!!!1',
            image: 'burr_profile_avatar.jpeg',
            retweetCount: 5,
            favoritesCount: 14,
            replies: []
          }
        ]
      );
    }
  };

  onChangeTweetInput: any = (event: any) => {
    this.setState({ tweetInputPlaceholder: event.target.value });
  }

  makeTweetHandler: any = (event: any) => {
    event.preventDefault();
    console.log(this.state);
    return null;
  };

  render() {
    return (
      <div className={styles.GridLayout}>
        <SideBar />
        <Switch>
          <Route exact path="/home">
            <Home
              onChangeTweetInput={this.onChangeTweetInput}
              tweetInputPlaceholder={this.state.tweetInputPlaceholder}
              makeTweetHandler={this.makeTweetHandler}
              mockPosts={this.state.tweets}
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
