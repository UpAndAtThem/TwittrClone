import React from 'react';
import styles from './Backdrop.module.css';

const Backdrop = (props: any) => {
  console.log(props.children);
  return (
    <div className={styles.Backdrop}>
      {props.children}
    </div>
  );
}


export default Backdrop;