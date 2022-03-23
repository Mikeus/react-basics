const Button = (props) => {
  const clickedButton = () => {
    if (props.goal === props.points) {
      props.setGoal(props.points * 2)
    }
    if (props.value === 'plus') {
      props.setPoints(props.points + 1)
    } else {
      props.setPoints(props.points - 1)
    }

    console.log('button clicked!')
  }

  return (
    <button className='counter__button' onClick={clickedButton}>
      {props.children}
    </button>
  )
}

export default Button
