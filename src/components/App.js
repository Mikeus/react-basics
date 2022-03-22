import React from 'react'
import Button from './Button'
import Card from './Card'
import Header from './Header'
import Logo from './Logo'

// let data = {
//   fullName: 'Julia Reto',
//   description: 'jakis tam zwod',
//   joinedYear: 2004,
//   totalFriends: 235,
//   status: 'Friend of Friend',
//   imageUrl:
//     'https://images.unsplash.com/photo-1647008975500-649c27351ecf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
// }

let data = [
  {
    fullName: 'Julia Reto',
    description: 'jakis tam zwod',
    joinedYear: 2004,
    totalFriends: 235,
    status: 'Friend of Friend',
    imageUrl:
      'https://images.unsplash.com/photo-1647008975500-649c27351ecf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
  },
  {
    fullName: 'David Jablo',
    description: 'pilkarz',
    joinedYear: 2000,
    totalFriends: 5,
    status: 'Friend only',
    imageUrl:
      'https://images.unsplash.com/photo-1647008975500-649c27351ecf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
  },
  {
    fullName: 'Peter Nowy',
    description: 'Designer from new york usa',
    joinedYear: 2020,
    totalFriends: 333,
    status: 'Friend',
    imageUrl:
      'https://images.unsplash.com/photo-1647008975500-649c27351ecf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
  },
]

const App = (props) => {
  const printCards = () => {
    // let items = []
    // for (let index = 0; index < data.length; index++) {
    //   items.push(<Card userData={data[index]} />)
    // }
    // return items

    return data.map((item, index) => {
      return <Card userData={item} key={index} />
    })
  }

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
        {/* <div className='ui link cards'>{printCards()}</div> */}
        <div className='counter'>
          <div className='counter__number'>0</div>
          <div className='counter__buttons'>
            <button className='counter__plus'>+</button>
            <button className='counter__minus'>-</button>
          </div>
        </div>
        <Button>Button</Button>
      </main>
    </>
  )
}
export default App
