import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  return (
    <>
      <Header background='red'>
        <nav>
          <a href='#'>Link 1</a>
          <a href='#'>Link 1</a>
          <a href='#'>Link 1</a>
        </nav>
        Logo
      </Header>
      <Header background='blue'>Logo</Header>
      <Header>
        <Logo>Logo3eee</Logo>
      </Header>
    </>
  )
}
const Logo = (props) => {
  return <>{props.children}</>
}

const Header = (props) => {
  return (
    <header
      style={{
        background:
          props.background === undefined ? 'yellow' : props.background,
        color: 'green',
        height: '100px',
      }}
    >
      {props.children}
    </header>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
