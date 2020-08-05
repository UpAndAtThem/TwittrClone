import React from 'react';
import Post from '../Post/Post';
import User from '../../Interfaces/User';

interface Props {
  user: User;
  mockPosts: typeof Post[];
  editTweet: any;
};

const PostsFeed: React.FC<any> = (props: any) => {
  // console.log('PostsFeed Renders');
  let JSXPosts = props.mockPosts.map((post: any) => {
    return (<Post user={props.user} key={post.id} post={post} editTweet={props.editTweet}></Post>);
  });
  
  return (
    JSXPosts
  );
}

export default PostsFeed;