import React from 'react'

const Main = (props) => {
  return (
    <div style={{
      flex: 1,
      height: '100vh',
      overflow: 'auto'
    }} >
      <div style={{ padding: '20px' }} {...props} />
    </div>
  )
}

export default Main;
