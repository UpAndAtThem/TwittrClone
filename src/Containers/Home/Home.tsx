import React, { Component } from 'react';
import HomeController from './HomeController/HomeController';
import PostsFeed from '../../Components/PostsFeed/PostsFeed';
import Post from '../../Interfaces/Post';

interface Props {
  makeTweetHandler: ((event: any) => void),
  mockPosts: Post[],
  tweetValue: string,
  onChangeTweetInput: ((event: any) => void)
}

class Home extends Component<Props, {}> {
  render() {
    return (
      <div>
        <HomeController onChangeTweetInput={this.props.onChangeTweetInput} tweetValue={this.props.tweetValue} makeTweetHandler={this.props.makeTweetHandler} />
        <PostsFeed {...this.props} />
      </div>
    );
  }
}

export default Home;