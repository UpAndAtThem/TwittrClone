import React, { Component } from 'react';
import HomeController from './HomeController/HomeController';
import PostsFeed from '../../Components/PostsFeed/PostsFeed';
import Post from '../../Interfaces/Post';
import User from '../../Interfaces/User';

interface Props {
  makeTweetHandler: ((event: any) => void),
  mockPosts: Post[],
  tweetInputPlaceholder: string,
  tweetInputValue: string
  onChangeTweetInput: ((event: any) => void),
  user: User,
  handleShow: any,
  editTweet: any
}

class Home extends Component<Props, {}> {
  render() {
    // console.log('Home Component Renders');
    return (
      <div>
        <HomeController
          user={this.props.user}
          onChangeTweetInput={this.props.onChangeTweetInput}
          tweetInputPlaceholder={this.props.tweetInputPlaceholder}
          tweetInputValue={this.props.tweetInputValue}
          makeTweetHandler={this.props.makeTweetHandler}
        />
        <PostsFeed handleShow={this.props.handleShow } mockPosts={this.props.mockPosts} editTweet={this.props.editTweet} />
      </div>
    );
  }
}

export default Home;