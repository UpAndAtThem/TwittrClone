import React from 'react';
import styles from './Post.module.css';
import PostController from './PostController/PostController';

const PostsFeed = (props: any) => {
  let mockPosts = [
    {
      id: 1,
      userId: 1,
      isRetweet: false,
      reTweetedPostId: null,
      userName: 'Jason Nelson',
      handle: '@json_nlson',
      date: new Date(),
      tweetText: 'Hello World!!!!1',
      image: 'default_profile_normal.png',
      tweetContentUrl: null,
      retweetCount: 5,
      favoritesCount: 14,
      replies: []
    },
    {
      id: 1,
      userId: 2,
      isRetweet: false,
      reTweetedPostId: null,
      userName: 'Erika Wannigman',
      handle: '@e_wan',
      date: new Date(),
      tweetText: 'This is my first tweet!',
      image: 'default_profile_normal.png',
      tweetContentUrl: null,
      retweetCount: 5,
      favoritesCount: 14,
      replies: []
    }
  ];

  console.log(mockPosts[0]);

  let JSXPosts = mockPosts.map((post) => (
    <div key={post.id} className={styles.Post}>
      <img className={styles.Avatar} src={post.image} alt="" />
      <div className={styles.PostBody}>
        <div className={styles.PostHead}>
          <div className={styles.UserInfo}>
            <h1 className={styles.Username}>{post.userName}</h1>
            <p className={styles.Handle}>{post.handle}</p>
            <p className={styles.TimeTweeted}>{post.date.toDateString()}</p>
          </div>
          <svg viewBox="0 0 24 24" className={styles.DownArrow}><g><path d="M20.207 8.147c-.39-.39-1.023-.39-1.414 0L12 14.94 5.207 8.147c-.39-.39-1.023-.39-1.414 0-.39.39-.39 1.023 0 1.414l7.5 7.5c.195.196.45.294.707.294s.512-.098.707-.293l7.5-7.5c.39-.39.39-1.022 0-1.413z"></path></g></svg>
        </div>
        <p className={styles.PostContent}>{post.tweetText}</p>
        <div className={styles.PostController}>
          <PostController></PostController>
        </div>
      </div>
    </div>
  ));

  return (
    <div>
      {JSXPosts}
    </div>
  );
}

export default PostsFeed;