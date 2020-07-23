import React from 'react';
import styles from './Post.module.css';

const PostsFeed = (props: any) => {
  return (
    <div className={styles.Post}>
      <img className={styles.Avatar} src="burr_profile_avatar.jpeg" alt="" />
      <div className={styles.PostBody}>
        <div className={styles.PostHead}>
          <div className={styles.UserInfo}>
            <h1 className={styles.Username}>Bill Burr</h1>
            <p className={styles.Handle}>@billburr</p>
            <p className={styles.TimeTweeted}>4hr</p>
          </div>
          <svg viewBox="0 0 24 24" className={styles.DownArrow}><g><path d="M20.207 8.147c-.39-.39-1.023-.39-1.414 0L12 14.94 5.207 8.147c-.39-.39-1.023-.39-1.414 0-.39.39-.39 1.023 0 1.414l7.5 7.5c.195.196.45.294.707.294s.512-.098.707-.293l7.5-7.5c.39-.39.39-1.022 0-1.413z"></path></g></svg>
        </div>
        <p className={styles.PostContent}>I ramble about gift cards, high school, and being a douche.</p>
      </div>
    </div>
  );
}

export default PostsFeed;