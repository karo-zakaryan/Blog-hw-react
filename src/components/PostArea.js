import React from 'react'

const PostArea = (props) => {
  return (
    <div style={{
      float: 'left',
      width: 'calc(100% - 738px)',
      overflow: 'auto'
    }} >
      <div style={{ padding: '20px' }} {...props} />
    </div>
  )
}

export default PostArea;
