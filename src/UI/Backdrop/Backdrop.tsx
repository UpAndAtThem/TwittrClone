import React from 'react';
import styles from './Backdrop.module.css';

const Backdrop = (props: any) => {
  let bodyHeight = document.querySelector('body')?.offsetHeight || 0;
  bodyHeight += 100;

  const onClose = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    props.handleShow();
  }

  return (
    <div style={{height: bodyHeight}} onClick={ onClose } className={styles.Backdrop}>
      {props.children}
    </div>
  );
}


export default Backdrop;