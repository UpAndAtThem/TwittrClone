import React, { useState } from 'react';
import styles from './Post.module.css';
import PostController from './PostController/PostController';
import PostInterface from '../../Interfaces/Post';
import TweetModal from '../../UI/TweetModal/TweetModal';

const Post = (props: PostInterface) => {
  let post = { ...props };
  let [show, setShow] = useState(false);

  const handleClose = () => show = false;
  const toggleShow = () => setShow(!show);
  
  const handleShow = () => {
    const postElement = document.getElementById(String(post.id));
    
    let position = postElement?.getBoundingClientRect();

    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    let x = position?.x! - 45;
    let y = position?.y! + 20 + scrollTop;

    let top = `${Math.floor(y)}px`;
    let left = `${Math.floor(x)}px`;

    return <div style={{position: 'absolute', top: top, left: left, backgroundColor: 'white'}} className={styles.PostModal}><TweetModal postId={String(post.id)} handleClose={handleClose} /></div>
  };

  let tweetModal = show ?  handleShow() : null;

  let mockPost =
    <div key={post.id} className={styles.Post}>
      <img className={styles.Avatar} src={post.image} alt="avatar" />
      <div className={styles.PostBody}>
        <div className={styles.PostHead}>
          <div className={styles.UserInfo}>
            <h1 className={styles.Username}>{post.userName}</h1>
            <p className={styles.Handle}>{post.handle}</p>
            <p className={styles.TimeTweeted}>{post.date.toDateString()}</p>
          </div>
          <svg id={String(post.id)} viewBox="0 0 24 24" onClick={toggleShow} className={styles.DownArrow}><g><path d="M20.207 8.147c-.39-.39-1.023-.39-1.414 0L12 14.94 5.207 8.147c-.39-.39-1.023-.39-1.414 0-.39.39-.39 1.023 0 1.414l7.5 7.5c.195.196.45.294.707.294s.512-.098.707-.293l7.5-7.5c.39-.39.39-1.022 0-1.413z"></path></g></svg>
        </div>
        <p className={styles.PostContent}>{post.tweetText}</p>
        <div className={styles.PostController}>
          <PostController></PostController>
        </div>
      </div>
      {tweetModal}
    </div>


  return (
    mockPost
  );
}

export default Post;