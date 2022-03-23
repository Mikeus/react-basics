const Button = (props) => {
  const clickedButton = () => {
    console.log('button clicked!')
  }

  return (
    <button className='counter__button' onClick={clickedButton}>
      {props.children}
    </button>
  )
}

export default Button
