import React from 'react'
import Tetris from "components/Tetris"
import { GlobalStyles } from 'common';


const App = () => {
  return (
    <div className="App">
      <GlobalStyles />
      <Tetris />
    </div>
  );
}

export default App
