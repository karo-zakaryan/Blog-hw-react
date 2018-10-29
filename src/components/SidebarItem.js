import Radium from 'radium';
import React from 'react';

const SidebatItem = (props) => {
  return (
    <div style={{
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      backgroundColor: '#dfedd6',
      cursor: 'pointer',
      padding: '20px',
      ':hover': {
        backgroundColor: "#cbe8ba"
      },
      ':focus': {
        backgroundColor: "#cbe8ba"
      }
    }} {...props} />
  )
}

export default Radium(SidebatItem);