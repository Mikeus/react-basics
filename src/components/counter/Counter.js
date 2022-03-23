import { useState } from 'react'
import Button from './Button'
import Number from './Number'

const Counter = () => {
  const [points, setPoints] = useState(0)
  console.log(useState(points))
  return (
    <div className='counter'>
      <Number digit={points} />
      <div className='counter__buttons'>
        <Button points={points} setPoints={setPoints} value='minus'>
          -
        </Button>
        <Button points={points} setPoints={setPoints} value='plus'>
          +
        </Button>
      </div>
    </div>
  )
}

export default Counter
