import React from 'react'

const Button = ({onToggle}) => {
  return (
    <div>
      <button onClick={onToggle}>Connect to wallet</button>
    </div>
  )
}

export default Button
