import React from 'react';
import Backdrop from '../Backdrop/Backdrop';
import styles from './TweetModal.module.css';

const TweetModal = (props: { isUser: boolean, postId: string, top: any, left: any, styles: any, handleShow: any }) => {
  let modalContent = props.isUser ?
    (
      <>
        <div>EDIT TWEET</div>
        <div>DELETE TWEET</div>
        <div>ADD / REMOVE FROM LIST</div>
      </>
    )
    :
    (
      <>
        <div>NOT INTERESTED</div>
        <div>ADD / REMOME FROM LIST</div>
        <div>BLOCK</div>
        <div>REPORT</div>
      </>
    )

  return (
    <Backdrop handleShow={props.handleShow}>
      <div className={styles.TweetEditModal} style={{ position: 'absolute', top: props.top, left: props.left }}>
        {modalContent}
      </div>
    </Backdrop>
  );
}

export default TweetModal;