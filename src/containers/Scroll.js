import React, { Component} from 'react';

// class Scroll extends Component {
//
// }

const Scroll = (props) => {
  return (
    <div style={{ overflowY:'scroll',
      border: '1px solid black',
      padding: '2rem',
      height: '46.5rem'}}>
      {props.children}
    </div>
  );
};

export default Scroll;
