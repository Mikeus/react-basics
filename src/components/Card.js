import React from 'react'

export default function (props) {
  return (
    <div className='ui link cards'>
      <div className='card'>
        <div className='image'>
          <img src='https://images.unsplash.com/photo-1647008975500-649c27351ecf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80' />
        </div>
        <div className='content'>
          <div className='header'>Matt Giampietro</div>
          <div className='meta'>
            <a>Friends</a>
          </div>
          <div className='description'>
            Matthew is an interior designer living in New York.
          </div>
        </div>
        <div className='extra content'>
          <span className='right floated'>Joined in 2013</span>
          <span>
            <i className='user icon' />
            75 Friends
          </span>
        </div>
      </div>
    </div>
  )
}
