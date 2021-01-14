import React from 'react'
import { createStage } from 'utils/gameHelpers'
import Display from './Display'
import Stage from './Stage'
import StartButton from './StartButton'
import { StyledTetrisWrapper, StyledTetris} from 'common'

const Tetris = () => {
  return (
    <StyledTetrisWrapper>
      <StyledTetris>
        <Stage stage={createStage()} />
        <aside>
          <div>
            <Display text='score' />
            <Display text='rows' />
            <Display text='level' />
          </div>
          <StartButton />
        </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  )
}

export default Tetris
