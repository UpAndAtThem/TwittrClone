import React, { Component } from 'react';
import HomeController from './HomeController/HomeController';
import PostsFeed from '../../Components/PostsFeed/PostsFeed';
import Post from '../../Interfaces/Post';
import User from '../../Interfaces/User';

interface Props {
  makeTweetHandler: ((event: any) => void),
  mockPosts: Post[],
  tweetInputPlaceholder: string,
  onChangeTweetInput: ((event: any) => void),
  user: User
}

class Home extends Component<Props, {}> {
  render() {
    return (
      <div>
        <HomeController
          user={this.props.user}
          onChangeTweetInput={this.props.onChangeTweetInput}
          tweetInputPlaceholder={this.props.tweetInputPlaceholder}
          makeTweetHandler={this.props.makeTweetHandler}
        />
        <PostsFeed mockPosts={this.props.mockPosts} />
      </div>
    );
  }
}

export default Home;