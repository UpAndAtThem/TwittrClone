import React, { Component } from 'react';
import HomeController from './HomeController/HomeController';
import PostsFeed from '../../Components/PostsFeed/PostsFeed';
import Post from '../../Interfaces/Post';
import User from '../../Interfaces/User';

interface Props {
  user: User,
}

interface State {
  post: any;
  tweetInputValue: string;
  tweets: any;
}

class Home extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      post: undefined,
      tweetInputValue: '',
      tweets: this.getTweets(this.props.user.userId)
    };
  }

  // handleShow = (e?: any, post?: any, styles?: any, handleShow?: any, editTweet?: any, modalConfig?: any) => {
  //   if (!post) {
  //     this.setState({ post: undefined });
  //     return undefined;
  //   }
  //   let isUser = post.userId === this.props.user.userId ? true : false;
  //   const postElement = document.getElementById(String(post.id));

  //   let position = postElement?.getBoundingClientRect();

  //   let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  //   let x = position?.x! - 210;
  //   let y = position?.y! + 20 + scrollTop;

  //   let top = `${Math.floor(y)}px`;
  //   let left = `${Math.floor(x)}px`;

  //   this.setState({ post: <TweetModal modalConfig={modalConfig} isUser={isUser} editTweet={editTweet} top={top} left={left} postId={String(post.id)} styles={styles} handleShow={handleShow} /> });
  // };

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

  editTweet = (postId: any) => {
    let tweet = this.state.tweets.find((twt: any) => {
      return twt.id === Number(postId);
    });

    console.log(tweet);
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
          mockPosts={this.state.tweets}
          editTweet={this.editTweet}
        />
      </div>
    );
  }
}

export default Home;