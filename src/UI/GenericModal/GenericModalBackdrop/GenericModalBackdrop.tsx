import React from 'react';

const Backdrop: React.FC<{ onClick: any, styles: any, className: any }> = (props) => {
  let height = document.getElementById('root')?.clientHeight
  
  // hacky fix for absolute modal pushing past the bottom of the body
  height = height? height + 100 : height;

  return (
    <div className={props.className} style={{...props.styles, height: height }} onClick={props.onClick}>
      {props.children}
    </div>
  );
};

export default Backdrop;

// Implement Generic Modal like so with the div modal being passed as a child 

//     <GenericModal styles={{ modalStyles: { position: 'absolute', top: '100', left: '100', width: '100vw', height: '100vh', backgroundColor: 'red' }, backdropStyles: {display: 'flex', position: 'absolute', top: '0', left: '0', backgroundColor: 'Red', width: '100vw', height: '100vh'} }} backdropOnClick={(props: any) => { console.log(props) }}>
//       <div className={styles.PostModal}>
//         <h1>Hello World</h1>
//       </div>
//     </GenericModal>