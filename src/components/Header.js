import React from 'react'

const Header = (props) => {
  return (
    <header
      style={{
        background:
          props.background === undefined ? 'yellow' : props.background,
        color: 'green',
        height: '100px',
        padding: '20px',
      }}
    >
      {props.children}
    </header>
  )
}

export default Header
