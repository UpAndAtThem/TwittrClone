import React from 'react';
import styles from './Backdrop.module.css';

const Backdrop = (props: any) => {
  let bodyHeight = document.querySelector('body')?.offsetHeight || 0;
  bodyHeight += 100;

  return (
    <div style={{height: bodyHeight}} onClick={() => props.handleShow()} className={styles.Backdrop}>
      {props.children}
    </div>
  );
}


export default Backdrop;