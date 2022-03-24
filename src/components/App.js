import React from 'react'
import Form from './form/Form'
import Header from './Header'
import Logo from './Logo'

const App = (props) => {
  return (
    <>
      <Header background='red'>
        <nav>
          <a href='/#'>Link 1</a>
          <a href='/#'>Link 1</a>
          <a href='/#'>Link 1</a>
        </nav>
        <Logo />
      </Header>
      <main
        style={{
          margin: '20px auto',
          width: '100%',
          maxWidth: '960px',
          padding: '20px 20px',
        }}
      >
        {/* <Counter /> */}
        <Form />
      </main>
    </>
  )
}
export default App
