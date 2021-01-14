import React from 'react'
import { StyledStartButton } from 'common'

const StartButton = ({ callback }) => {
  return (
    <StyledStartButton onClick={callback}>
      start game
    </StyledStartButton>
  )
}

export default StartButton
