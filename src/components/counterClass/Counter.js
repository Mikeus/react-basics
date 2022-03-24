import React from 'react'
import Button from './Button'
import Number from './Number'

class Counter extends React.Component {
  constructor(props) {
    super(props)
    // this.state = '34'
    // this.state = {
    //   points: 5,
    //   goal: 11,
  }
  state = {
    points: 5,
    goal: 11,
    // this.setPoints = this.setPoints.bind(this)
  }

  setPoints = (point) => {
    this.setState(
      {
        ...this.state,
        points: point,
      },
      () => {
        if (this.state.goal === this.state.points) {
          this.setGoal(this.state.points * 2)
        }
      }
    )
  }
  setGoal = (goal) => {
    this.setState({
      ...this.state,
      goal: goal,
    })
  }
  render() {
    return (
      <div className='counter'>
        <Number digit={this.state.points} />
        <div className='counter__buttons'>
          <Button
            points={this.state.points}
            setPoints={this.setPoints}
            value='minus'
            goal={this.state.goal}
            setGoal={this.setGoal}
          >
            -
          </Button>
          <Button
            points={this.state.points}
            setPoints={this.setPoints}
            value='plus'
            goal={this.state.goal}
            setGoal={this.setGoal}
          >
            +
          </Button>
          Goal: {this.state.goal}
        </div>
      </div>
    )
  }
}

// const Counter = () => {
//   const [points, setPoints] = useState(0)
//   const [goal, setGoal] = useState(11)
//   useEffect(() => {
//     console.log('Run every single time thrres render and data chenges ')
//     console.log('A')
//   })
//   useEffect(() => {
//     console.log('Run on first render ')
//     console.log('B')
//   }, [])
//   useEffect(() => {
//     console.log('Run on first render and when goal changes ')
//     console.log('c')
//   }, [goal])
//   // console.log(useState(points))
//   return (
//     <div className='counter'>
//       <Number digit={points} />
//       <div className='counter__buttons'>
//         <Button
//           points={points}
//           setPoints={setPoints}
//           value='minus'
//           goal={goal}
//           setGoal={setGoal}
//         >
//           -
//         </Button>
//         <Button
//           points={points}
//           setPoints={setPoints}
//           value='plus'
//           goal={goal}
//           setGoal={setGoal}
//         >
//           +
//         </Button>
//         Goal: {goal}
//       </div>
//     </div>
//   )
// }

export default Counter
