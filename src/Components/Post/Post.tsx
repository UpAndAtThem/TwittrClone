import React, { useState } from 'react';
import styles from './Post.module.css';
import PostController from './PostController/PostController';
import PostInterface from '../../Interfaces/Post';
import GenericModal from '../../UI/GenericModal/GenericModal';
import User from '../../Interfaces/User';

interface Props {
  post: PostInterface;
  editTweetModalHandler: any;
  user: User;
}

const Post = (props: Props) => {
  // console.log('Post Renders');
  let post = props.post;

  const [editClicked, setEditClicked] = useState(false);
  const [showOptionsModal, setShowOptionsModal] = useState(false);

  const toggleOptionsModal = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    setShowOptionsModal(!showOptionsModal);
  }

  const editPostBackdropToggleHandler = (props: any) => {
    if (props.target.className === 'backdrop') {
      setEditClicked(!editClicked);
    }
  }

  let optionsModal = () => {
    let isUser = post.userId === props.user.userId ? true : false;
    const postElement = document.getElementById(String(post.id));

    let position = postElement?.getBoundingClientRect();

    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    let x = position?.x! - 210;
    if (isUser) { x += 50 }

    let y = position?.y! + 25 + scrollTop;

    let top = `${Math.floor(y)}px`;
    let left = `${Math.floor(x)}px`;

    const optionsModalContent = isUser ?
      (
        <>
          <div>
            <svg viewBox="0 0 24 24" className={styles.Delete}><g><path d="M20.746 5.236h-3.75V4.25c0-1.24-1.01-2.25-2.25-2.25h-5.5c-1.24 0-2.25 1.01-2.25 2.25v.986h-3.75c-.414 0-.75.336-.75.75s.336.75.75.75h.368l1.583 13.262c.216 1.193 1.31 2.027 2.658 2.027h8.282c1.35 0 2.442-.834 2.664-2.072l1.577-13.217h.368c.414 0 .75-.336.75-.75s-.335-.75-.75-.75zM8.496 4.25c0-.413.337-.75.75-.75h5.5c.413 0 .75.337.75.75v.986h-7V4.25zm8.822 15.48c-.1.55-.664.795-1.18.795H7.854c-.517 0-1.083-.246-1.175-.75L5.126 6.735h13.74L17.32 19.732z"></path><path d="M10 17.75c.414 0 .75-.336.75-.75v-7c0-.414-.336-.75-.75-.75s-.75.336-.75.75v7c0 .414.336.75.75.75zm4 0c.414 0 .75-.336.75-.75v-7c0-.414-.336-.75-.75-.75s-.75.336-.75.75v7c0 .414.336.75.75.75z"></path></g></svg>
            <p>Delete</p>
          </div>
          <div onClick={() => { setEditClicked(!editClicked) }}>
            <svg viewBox="0 0 24 24" className=""><g><path d="M20.75 22H3.25C2.01 22 1 20.99 1 19.75V4.25C1 3.01 2.01 2 3.25 2h17.5C21.99 2 23 3.01 23 4.25v15.5c0 1.24-1.01 2.25-2.25 2.25zM3.25 3.5c-.414 0-.75.337-.75.75v15.5c0 .413.336.75.75.75h17.5c.414 0 .75-.337.75-.75V4.25c0-.413-.336-.75-.75-.75H3.25z"></path><path d="M16.758 6.982h-5.806c-.414 0-.75.336-.75.75s.336.75.75.75h3.995L6.92 16.508c-.292.293-.292.768 0 1.06.147.147.34.22.53.22s.385-.072.53-.22l8.027-8.025v3.995c0 .414.336.75.75.75s.75-.336.75-.75V7.732c0-.414-.335-.75-.75-.75z"></path></g></svg>
            <p>Edit</p>
          </div>
          <div>
            <svg viewBox="0 0 24 24" className=""><g><path d="M12 22c-.414 0-.75-.336-.75-.75V2.75c0-.414.336-.75.75-.75s.75.336.75.75v18.5c0 .414-.336.75-.75.75zm5.14 0c-.415 0-.75-.336-.75-.75V7.89c0-.415.335-.75.75-.75s.75.335.75.75v13.36c0 .414-.337.75-.75.75zM6.86 22c-.413 0-.75-.336-.75-.75V10.973c0-.414.337-.75.75-.75s.75.336.75.75V21.25c0 .414-.335.75-.75.75z"></path></g></svg>
            <p>View Tweet activity</p>
          </div>
          <div>
            <svg viewBox="0 0 24 24" className=""><g><path d="M23.804 11.5l-6.496-7.25c-.278-.31-.752-.334-1.06-.06-.308.277-.334.752-.058 1.06L22.238 12l-6.047 6.75c-.275.308-.25.782.06 1.06.142.127.32.19.5.19.204 0 .41-.084.558-.25l6.496-7.25c.252-.28.258-.713 0-1zm-23.606 0l6.496-7.25c.278-.31.752-.334 1.06-.06.308.277.334.752.058 1.06L1.764 12l6.047 6.75c.277.308.25.782-.057 1.06-.143.127-.322.19-.5.19-.206 0-.41-.084-.56-.25L.197 12.5c-.252-.28-.257-.713 0-1zm9.872 12c-.045 0-.09-.004-.135-.012-.407-.073-.68-.463-.605-.87l3.863-21.5c.074-.407.466-.674.87-.606.408.073.68.463.606.87l-3.864 21.5c-.065.363-.38.618-.737.618z"></path></g></svg>
            <p>Embed Tweet</p>
          </div>
        </>
      )
      :
      (
        <>
          <div>
            <svg viewBox="0 0 24 24" className=""><g><path d="M12 22.75C6.072 22.75 1.25 17.928 1.25 12S6.072 1.25 12 1.25 22.75 6.072 22.75 12 17.928 22.75 12 22.75zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75z"></path><path d="M12 13.415c1.892 0 3.633.95 4.656 2.544.224.348.123.81-.226 1.035-.348.226-.812.124-1.036-.226-.747-1.162-2.016-1.855-3.395-1.855s-2.648.693-3.396 1.854c-.224.35-.688.45-1.036.225-.35-.224-.45-.688-.226-1.036 1.025-1.594 2.766-2.545 4.658-2.545zm4.216-3.957c0 .816-.662 1.478-1.478 1.478s-1.478-.66-1.478-1.478c0-.817.662-1.478 1.478-1.478s1.478.66 1.478 1.478zm-5.476 0c0 .816-.662 1.478-1.478 1.478s-1.478-.66-1.478-1.478c0-.817.662-1.478 1.478-1.478.817 0 1.478.66 1.478 1.478z"></path></g></svg>
            <p>Not interested in this Tweet</p>
          </div>
          <div>
            <svg viewBox="0 0 24 24" className={''}><g><path d="M23.25 3.25h-2.425V.825c0-.414-.336-.75-.75-.75s-.75.336-.75.75V3.25H16.9c-.414 0-.75.336-.75.75s.336.75.75.75h2.425v2.425c0 .414.336.75.75.75s.75-.336.75-.75V4.75h2.425c.414 0 .75-.336.75-.75s-.336-.75-.75-.75zM18.575 22H4.25C3.01 22 2 20.99 2 19.75V5.5c0-1.24 1.01-2.25 2.25-2.25h8.947c.414 0 .75.336.75.75s-.336.75-.75.75H4.25c-.413 0-.75.336-.75.75v14.25c0 .414.337.75.75.75h14.325c.413 0 .75-.336.75-.75v-8.872c0-.414.336-.75.75-.75s.75.336.75.75v8.872c0 1.24-1.01 2.25-2.25 2.25z"></path><path d="M16.078 9.583H6.673c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h9.405c.414 0 .75.336.75.75s-.336.75-.75.75zm0 3.867H6.673c-.414 0-.75-.337-.75-.75s.336-.75.75-.75h9.405c.414 0 .75.335.75.75s-.336.75-.75.75zm-4.703 3.866H6.673c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h4.702c.414 0 .75.336.75.75s-.336.75-.75.75z"></path></g></svg>
            <p>Add/remove from List</p>
          </div>
          <div>
            <svg viewBox="0 0 24 24" className=""><g><path d="M12 1.25C6.072 1.25 1.25 6.072 1.25 12S6.072 22.75 12 22.75 22.75 17.928 22.75 12 17.928 1.25 12 1.25zm0 1.5c2.28 0 4.368.834 5.982 2.207L4.957 17.982C3.584 16.368 2.75 14.282 2.75 12c0-5.1 4.15-9.25 9.25-9.25zm0 18.5c-2.28 0-4.368-.834-5.982-2.207L19.043 6.018c1.373 1.614 2.207 3.7 2.207 5.982 0 5.1-4.15 9.25-9.25 9.25z"></path></g></svg>
            <p>Block @user</p>
          </div>
          <div>
            <svg viewBox="0 0 24 24" className=""><g><path d="M19.25 2c-.414 0-.75.336-.75.75v.09c-.695-.245-1.423-.38-2.21-.38-1.453 0-2.876.417-4.25.82-1.334.39-2.592.76-3.83.76-.948 0-1.792-.225-2.58-.688-.234-.135-.52-.136-.753-.002-.233.132-.377.38-.377.65v9.77c0 .267.14.513.37.647 1.025.6 2.117.893 3.34.893 1.453 0 2.876-.417 4.25-.82 1.334-.39 2.592-.76 3.83-.76.802 0 1.527.17 2.21.5v7.02c0 .414.336.75.75.75s.75-.336.75-.75V2.75c0-.414-.336-.75-.75-.75zm-2.96 10.23c-1.453 0-2.876.416-4.25.82-1.333.39-2.592.76-3.83.76-.802 0-1.528-.162-2.21-.49V5.174c.694.245 1.425.366 2.21.366 1.453 0 2.875-.417 4.25-.82 1.333-.39 2.592-.76 3.83-.76.802 0 1.528.16 2.21.49v8.145c-.694-.244-1.425-.366-2.21-.366z"></path></g></svg>
            <p>Report Tweet</p>
          </div>
        </>
      )

    const showOptionsModalHandler = (): void => setShowOptionsModal(!showOptionsModal);

    return (
      <GenericModal className={'options-modal'} backdropOnClick={showOptionsModalHandler} styles={{ backdropStyles: { position: 'absolute', top: 0, left: 0, height: '100vh', width: '100vw', backgroundColor: 'rgba(0,0,0,0)' } }}>
        <div className={styles.TweetEditModal} style={{ position: 'absolute', top: top, left: left, width: 'fit-content', margin: 'auto' }}>
          {optionsModalContent}
        </div>
      </GenericModal>);
  };

  let editModal = (
    <GenericModal className={'edit'} backdropOnClick={editPostBackdropToggleHandler} styles={{ backdropStyles: { zIndex: '2', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'absolute', top: 0, left: 0, height: '100vh', width: '100vw', backgroundColor: 'rgba(0,0,0,0.5)' } }}>
      <div style={{ backgroundColor: 'white' }} key={post.id} className={styles.Post}>
        <div>
          <img className={styles.Avatar} src={post.image} alt="avatar" />
          <div className={styles.PostBody}>
            <div className={styles.PostHead}>
              <div className={styles.UserInfo}>
                <h1 className={styles.Username}>{post.userName}</h1>
                <p className={styles.Handle}>{post.handle}</p>
                <p className={styles.TimeTweeted}>{post.date.toDateString()}</p>
              </div>
              <svg id={String(post.id)} viewBox="0 0 24 24" onClick={() => { }} className={styles.DownArrow}><g><path d="M20.207 8.147c-.39-.39-1.023-.39-1.414 0L12 14.94 5.207 8.147c-.39-.39-1.023-.39-1.414 0-.39.39-.39 1.023 0 1.414l7.5 7.5c.195.196.45.294.707.294s.512-.098.707-.293l7.5-7.5c.39-.39.39-1.022 0-1.413z"></path></g></svg>
            </div>
            <p className={styles.PostContent}>{post.tweetText}</p>
          </div>
        </div>
        <div>
          <label htmlFor="editTweet">Edit Tweet</label>

          <textarea id="story" name="editTweet"
            rows={5} cols={33} defaultValue={post.tweetText}>
          </textarea>
        </div>
      </div>
    </GenericModal>
  );

  return (
    <div key={post.id} className={styles.Post}>
      <img className={styles.Avatar} src={post.image} alt="avatar" />
      <div className={styles.PostBody}>
        <div className={styles.PostHead}>
          <div className={styles.UserInfo}>
            <h1 className={styles.Username}>{post.userName}</h1>
            <p className={styles.Handle}>{post.handle}</p>
            <p className={styles.TimeTweeted}>{post.date.toDateString()}</p>
          </div>
          <svg id={String(post.id)} viewBox="0 0 24 24" onClick={toggleOptionsModal} className={styles.DownArrow}><g><path d="M20.207 8.147c-.39-.39-1.023-.39-1.414 0L12 14.94 5.207 8.147c-.39-.39-1.023-.39-1.414 0-.39.39-.39 1.023 0 1.414l7.5 7.5c.195.196.45.294.707.294s.512-.098.707-.293l7.5-7.5c.39-.39.39-1.022 0-1.413z"></path></g></svg>
        </div>
        <p className={styles.PostContent}>{post.tweetText}</p>
        <div className={styles.PostController}>
          <PostController></PostController>
        </div>
      </div>
      {editClicked ? editModal : null}
      {showOptionsModal ? optionsModal() : null}
    </div>
  );
}

export default Post;