import React, { useState } from 'react';
import styles from './Post.module.css';
import PostController from './PostController/PostController';
import PostInterface from '../../Interfaces/Post';
import GenericModal from '../../UI/GenericModal/GenericModal';

const Post = (props: { post: PostInterface, handleShow: any, editTweet: any }) => {
  // console.log('Post Renders');
  let post = props.post;

  const [editClicked, setEditClicked] = useState(false);
  const modalConfig = {setEditClicked, editClicked};
  console.log(modalConfig);

  const tweetInfoHandler = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    props.handleShow(e, post, styles, props.handleShow, props.editTweet, modalConfig);
  }

  let editModal = (
    <GenericModal backdropOnClick={() => {setEditClicked(!editClicked)}} styles={{ backdropStyles: {display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'absolute', top: 0, left: 0, height: '100vh', width: '100vw', backgroundColor: 'rgba(0,0,0,0.5)'} }}>
      <div style={{backgroundColor: 'white'}} key={post.id} className={styles.Post}>
        <img className={styles.Avatar} src={post.image} alt="avatar" />
        <div className={styles.PostBody}>
          <div className={styles.PostHead}>
            <div className={styles.UserInfo}>
              <h1 className={styles.Username}>{post.userName}</h1>
              <p className={styles.Handle}>{post.handle}</p>
              <p className={styles.TimeTweeted}>{post.date.toDateString()}</p>
            </div>
            <svg id={String(post.id)} viewBox="0 0 24 24" onClick={tweetInfoHandler} className={styles.DownArrow}><g><path d="M20.207 8.147c-.39-.39-1.023-.39-1.414 0L12 14.94 5.207 8.147c-.39-.39-1.023-.39-1.414 0-.39.39-.39 1.023 0 1.414l7.5 7.5c.195.196.45.294.707.294s.512-.098.707-.293l7.5-7.5c.39-.39.39-1.022 0-1.413z"></path></g></svg>
          </div>
          <p className={styles.PostContent}>{post.tweetText}</p>
        </div>
      </div>
    </GenericModal>
  );

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
          <svg id={String(post.id)} viewBox="0 0 24 24" onClick={tweetInfoHandler} className={styles.DownArrow}><g><path d="M20.207 8.147c-.39-.39-1.023-.39-1.414 0L12 14.94 5.207 8.147c-.39-.39-1.023-.39-1.414 0-.39.39-.39 1.023 0 1.414l7.5 7.5c.195.196.45.294.707.294s.512-.098.707-.293l7.5-7.5c.39-.39.39-1.022 0-1.413z"></path></g></svg>
        </div>
        <p className={styles.PostContent}>{post.tweetText}</p>
        <div className={styles.PostController}>
          <PostController></PostController>
        </div>
      </div>
      { editClicked ? editModal : null }
    </div>


  return (
    mockPost
  );
}

export default Post;