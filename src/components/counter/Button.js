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

    // console.log('button clicked!')
  }

  const mouseEnters = (e) => {
    console.log('Mouse went on top of button')
    console.log(e)
  }
  const mouseleave = (e) => {
    console.log('Mouse went on top of leave')
    console.log(e)
  }

  return (
    <button
      className='counter__button'
      onClick={clickedButton}
      onMouseEnter={mouseEnters}
      onMouseLeave={mouseleave}
    >
      {props.children}
    </button>
  )
}

export default Button
