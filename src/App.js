import React, { useState } from 'react'
import './App.css';

function App() {
  const [value, setValue] = useState(1)
  const fizzNumber = 3
  const buzzNumber = 5

  const addValue = () => {
    setValue((value) => {
      let newValue = value + 1
      return newValue
    })
  }

  const readValue = () => {
    if ((Number.isInteger(value / fizzNumber)) && (Number.isInteger(value / buzzNumber))) {
      return 'Fizz-Buzz'
    }
    if (Number.isInteger(value / fizzNumber)) {
      return 'Fizz'
    }
    if (Number.isInteger(value / buzzNumber)) {
      return 'Buzz'
    }
    else {
      return value
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Fizz Buzz Game</h1>
        <p>Click the button below to begin</p>
        <button onClick={addValue}>Count</button>
      </header>
      <main className='App-content'>
        <h2>
          {readValue(value)}
        </h2>
      </main>
    </div>
  );
}

export default App;
