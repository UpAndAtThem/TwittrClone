import React from 'react';
import Backdrop from '../Backdrop/Backdrop';

const TweetModal = (props: { postId: string, top: any, left: any, styles: any }) => {
  return (
    <Backdrop>
        <div style={{position: 'absolute', top: props.top, left: props.left, height: '200px'}} className={props.styles.TweetModal}>
          HELLO WORLD
        </div>
      </Backdrop>
  );
}

export default TweetModal;