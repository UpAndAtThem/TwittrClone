import React, { Component } from 'react';
import styles from './App.module.css';
import SideBar from './Components/Sidebar/Sidebar';
import Home from './Containers/Home/Home';
import User from './Interfaces/User';
import TweetModal from './UI/TweetModal/TweetModal';

import {
  Switch,
  Route
} from "react-router-dom";

interface State {
  post: any;
  user: User;
}

class App extends Component<{}, State> {
  constructor(props: any) {
    super(props);
    // console.log('App Component Renders');
    this.state = {
      post: undefined,
      user: this.getUser(),
    };
  }

  handleShow = (e?: any, post?: any, styles?: any, handleShow?: any, editTweet?: any, modalConfig?: any) => {
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

    this.setState({post: <TweetModal modalConfig={modalConfig} isUser={isUser} editTweet={editTweet} top={top} left={left} postId={String(post.id)} styles={styles} handleShow={handleShow}/>});
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


  
  render() {
    return (
      <div className={styles.GridLayout}>
        {this.state.post}
        <SideBar />
        <Switch>
          <Route exact path="/home">
            <Home
              user={this.state.user}
              handleShow={this.handleShow}
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
