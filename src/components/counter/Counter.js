import { useState } from 'react'

import Button from './Button'
import Number from './Number'

const Counter = () => {
  return (
    <div className='counter'>
      <Number digit={100} />
      <div className='counter__buttons'>
        <Button>-</Button>
        <Button>+</Button>
      </div>
    </div>
  )
}

export default Counter
