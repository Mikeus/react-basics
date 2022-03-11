import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  return (
    <>
      <Header background='red'>Logo</Header>
      <Header background='blue'>Logo</Header>
      <Header>Logo3</Header>
    </>
  )
}
const Header = (props) => {
  return (
    <header
      style={{
        background:
          props.background === undefined ? 'yellow' : props.background,
        color: 'white',
        height: '100px',
      }}
    >
      {props.children}
    </header>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
