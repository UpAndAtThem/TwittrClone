import React from 'react';
import Post from '../Post/Post';

interface Props {
  mockPosts: typeof Post[];
};

const PostsFeed: React.FC<any> = (props: any) => {
  let JSXPosts = props.mockPosts.map((post: any) => {
    return (<Post key={post.id} {...post}></Post>);
  });
  
  return (
    JSXPosts
  );
}

export default PostsFeed;