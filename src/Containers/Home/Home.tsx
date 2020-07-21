import React, { Component } from 'react';
import HomeController from './HomeController/HomeController';
import PostsFeed from '../../Components/PostsFeed/PostsFeed';
import Post from '../../Interfaces/Post';

interface Props {
  makeTweet: Function,
  mockPosts: Post[]
}

class Home extends Component<Props, {}> {
  render() {
    return (
      <div>
        <HomeController />
        <PostsFeed />
      </div>
    );
  }
}

export default Home;