import React from 'react'
import ReactDOM from 'react-dom'

let name = 'john'
let lname = 'santos'
let age = 21
let logedIn = true
let width = 600
let styles = {
  box: {
    width: `${(width * 3) / 2}px`,
    height: '300px',
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
  },
}

const App = (props) => {
  // console.log(props)
  const printAlert = (message) => {
    alert(message)
  }
  let showAccount = () => {
    return <div>You are log in.</div>
  }
  return (
    <div>
      <h1
        style={{
          background: 'red',
          color: 'white',
          textAlign: 'center',
        }}
      >
        Welcome {name + ' ' + lname}
      </h1>
      <h2>You are {age * 2} years old.</h2>
      {logedIn ? showAccount() : ''}

      {/* <h3 onClick={() => props.printAlert('Hello Alert')}>Text H3</h3> */}

      <Heading
        content='text content'
        periods={['', '.', '..', '...']}
        printAlert={printAlert}
      ></Heading>
      {/* <Heading content='text2 content'></Heading> */}
    </div>
  )
}
const Heading = (props) => {
  console.log(props)
  return (
    <h1 onClick={props.printAlert.bind(null, 'HI WORLD')}>
      {props.content} {props.periods === undefined ? '' : props.periods[3]}
    </h1>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
