import React, { Component } from 'react';
import styles from './App.module.css';
import SideBar from './Components/Sidebar/Sidebar';
import Home from './Containers/Home/Home';
import User from './Interfaces/User';
import Post from './Interfaces/Post';
import TweetModal from './UI/TweetModal/TweetModal';

import {
  Switch,
  Route
} from "react-router-dom";

interface State {
  post: any;
  tweetInputPlaceholder: string;
  tweetInputValue: string;
  user: User;
  tweets: Array<Post>;
}

class App extends Component<{}, State> {
  constructor(props: any) {
    super(props);
    // console.log('App Component Renders');
    this.state = {
      post: undefined,
      tweetInputPlaceholder: 'Whats Happening?',
      tweetInputValue: '',
      user: this.getUser(),
      tweets: this.getTweets(this.getUser().userId)
    };
  }

  editTweet = (postId: any) => {
    console.log(this);
  };

  handleShow = (e?: any, post?: any, styles?: any, handleShow?: any, editTweet?: any) => {
    if (!post) {
      this.setState({post: undefined});
      return undefined;
    }
    let isUser = post.userId === this.state.user.userId ? true : false;
    const postElement = document.getElementById(String(post.id));

    let position = postElement?.getBoundingClientRect();

    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    let x = position?.x! - 210;
    let y = position?.y! + 20 + scrollTop;

    let top = `${Math.floor(y)}px`;
    let left = `${Math.floor(x)}px`;

    this.setState({post: <TweetModal isUser={isUser} editTweet={editTweet} top={top} left={left} postId={String(post.id)} styles={styles} handleShow={handleShow}/>});
  };


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

  getTweets = (userId: number): Post[] => {
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

    return [];
  };

  onChangeTweetInput = (event: any) => {
    this.setState({ tweetInputValue: event.target.value });
  }

  makeTweetHandler = (event: any) => {
    event.preventDefault();

    let newTweet: Post = {
      id: Math.max(...this.state.tweets.map(tweet => tweet.id)) + 1,
      userId: 1,
      isRetweet: false,
      retweetedPostId: undefined,
      userName: this.state.user.userName,
      handle: this.state.user.handle,
      date: new Date(),
      tweetText: this.state.tweetInputValue,
      image: this.state.user.avatarSrc,
      retweetCount: Math.floor((Math.random() * 50)),
      favoritesCount: Math.floor((Math.random() * 150)),
      replies: [],
      tweetVersion: 1
    };

    let tweetCopy = {...newTweet}
    
    newTweet.tweetVersions = [tweetCopy];
    
    this.setState({ tweets: this.state.tweets.concat([newTweet]) });
    this.setState({ tweetInputValue: '' });

    return null;
  };

  render() {
    return (
      <div className={styles.GridLayout}>
        {this.state.post}
        <SideBar />
        <Switch>
          <Route exact path="/home">
            <Home
              onChangeTweetInput={this.onChangeTweetInput}
              tweetInputPlaceholder={this.state.tweetInputPlaceholder}
              tweetInputValue={this.state.tweetInputValue}
              makeTweetHandler={this.makeTweetHandler}
              mockPosts={this.state.tweets}
              user={this.state.user}
              handleShow={this.handleShow}
              editTweet={this.editTweet}
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
