import React from 'react'
import Card from './Card'
import Header from './Header'
import Logo from './Logo'

export default function (props) {
  return (
    <>
      <Header background='red'>
        <nav>
          <a href='#'>Link 1</a>
          <a href='#'>Link 1</a>
          <a href='#'>Link 1</a>
        </nav>
        <Logo />
      </Header>
      <main style={{ margin: '20px auto', width: '100%', maxWidth: '960px' }}>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </main>
    </>
  )
}
