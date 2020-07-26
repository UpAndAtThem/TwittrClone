import React, { Component } from 'react';
import HomeController from './HomeController/HomeController';
import PostsFeed from '../../Components/PostsFeed/PostsFeed';
import Post from '../../Interfaces/Post';

interface Props {
  makeTweetHandler: Function,
  mockPosts: Post[]
}

class Home extends Component<Props, {}> {
  render() {
    return (
      <div>
        <HomeController {...this.props} />
        <PostsFeed {...this.props} />
      </div>
    );
  }
}

export default Home;