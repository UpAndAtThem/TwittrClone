import React from 'react';

import Post from '../Post/Post';

import {default as PostInterface} from '../../Interfaces/Post';
import User from '../../Interfaces/User';

interface Props {
  user: User;
  posts: PostInterface[];
  editTweetModalHandler: any;
};

const PostsFeed: React.FC<Props> = (props: Props) => {
  // console.log('PostsFeed Renders');

  let JSXPosts = props.posts.map((post: PostInterface) => {
    return (<Post user={props.user} key={post.id} post={post} editTweetModalHandler={props.editTweetModalHandler}></Post>);
  });
  
  return (
    <>  
      {JSXPosts}
    </>
  );
}

export default PostsFeed;