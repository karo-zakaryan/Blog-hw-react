import React from 'react'

const Sidebar = (props) => {
  return (
    <aside style={{
      width: '390px',
      height: 'fit-content',
      float: 'left',
      background: '#dfedd6'
    }} {...props} />
  )
}

export default Sidebar;