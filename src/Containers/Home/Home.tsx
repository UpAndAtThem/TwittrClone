import React, { Component } from 'react';
import HomeController from './HomeController/HomeController';
import PostsFeed from '../../Components/PostsFeed/PostsFeed';
import Post from '../../Interfaces/Post';
import User from '../../Interfaces/User';

interface Props {
  user: User,
}

interface State {
  tweetInputValue: string;
  tweets: any;
}

class Home extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      ...this.state,
      tweetInputValue: '',
      tweets: this.getTweets(this.props.user.userId)
    };
  }

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

  makeTweetHandler = (event: any) => {
    event.preventDefault();

    let newTweet: Post = {
      id: Math.max(...this.state.tweets.map((tweet: any) => tweet.id)) + 1,
      userId: 1,
      isRetweet: false,
      retweetedPostId: undefined,
      userName: this.props.user.userName,
      handle: this.props.user.handle,
      date: new Date(),
      tweetText: this.state.tweetInputValue,
      image: this.props.user.avatarSrc,
      retweetCount: Math.floor((Math.random() * 50)),
      favoritesCount: Math.floor((Math.random() * 150)),
      replies: [],
      tweetVersion: 1
    };

    let tweetCopy = { ...newTweet }

    newTweet.tweetVersions = [tweetCopy];

    this.setState({ tweets: this.state.tweets.concat([newTweet]) });
    this.setState({ tweetInputValue: '' });

    return null;
  };


  onChangeTweetInput = (event: any) => {
    this.setState({ tweetInputValue: event.target.value });
  }

  editTweetModalHandler = (post: Post) => {
    const editTwtHandler =  (event: any) => {
      let tweet = this.state.tweets.find((twt: any) => {
        return twt.id === Number(post.id);
      });
      return tweet;
      
      // toggle the editTweetModal
    };

    editTwtHandler.bind(this);

    return editTwtHandler;
  };


  render() {
    // console.log('Home Component Renders');
    return (
      <div>
        <HomeController
          user={this.props.user}
          onChangeTweetInput={this.onChangeTweetInput}
          tweetInputValue={this.state.tweetInputValue}
          makeTweetHandler={this.makeTweetHandler}
        />
        <PostsFeed
          user={this.props.user}
          posts={this.state.tweets}
          editTweetModalHandler={this.editTweetModalHandler}
        />
      </div>
    );
  }
}

export default Home;