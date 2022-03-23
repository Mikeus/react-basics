import { useState, useEffect } from 'react'
import Button from './Button'
import Number from './Number'

const Counter = () => {
  const [points, setPoints] = useState(0)
  const [goal, setGoal] = useState(11)
  useEffect(() => {
    console.log('Run every single time thrres render and data chenges ')
    console.log('A')
  })
  useEffect(() => {
    console.log('Run on first render ')
    console.log('B')
  }, [])
  useEffect(() => {
    console.log('Run on first render and when goal changes ')
    console.log('c')
  }, [goal])
  // console.log(useState(points))
  return (
    <div className='counter'>
      <Number digit={points} />
      <div className='counter__buttons'>
        <Button
          points={points}
          setPoints={setPoints}
          value='minus'
          goal={goal}
          setGoal={setGoal}
        >
          -
        </Button>
        <Button
          points={points}
          setPoints={setPoints}
          value='plus'
          goal={goal}
          setGoal={setGoal}
        >
          +
        </Button>
        Goal: {goal}
      </div>
    </div>
  )
}

export default Counter
