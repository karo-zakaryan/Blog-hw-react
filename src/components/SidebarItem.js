import React from 'react'

const SidebatItem = (props) => {
  return (
    <div style={{
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      padding: '5px 10px'
    }} {...props} />
  )
}

export default SidebatItem;
