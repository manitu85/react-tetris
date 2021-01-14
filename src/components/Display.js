import { StyledDisplay } from 'common'
import React from 'react'

const Display = ({ gameOver, text}) => {
  return (
    <StyledDisplay gameOver={gameOver}>
      {text}
    </StyledDisplay>
  )
}

export default Display
