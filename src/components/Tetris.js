import React from 'react'
import { createStage } from 'utils/gameHelpers'
import Display from './Display'
import Stage from './Stage'
import StartButton from './StartButton'

const Tetris = () => {
  return (
    <div>
      <Stage stage={createStage()} />
      <aside>
        <div>
          <Display text='score' />
          <Display text='rows' />
          <Display text='level' />
        </div>
        <StartButton />
      </aside>
    </div>
  )
}

export default Tetris
