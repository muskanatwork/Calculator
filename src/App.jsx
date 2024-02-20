import { useState } from 'react'
import './App.css'

function App() {
  const [calculator, setCalculator] = useState("")

  function handleclick(e) {
    setCalculator(calculator + e.target.value);
  }
  function CleanDisplay() {
    setCalculator('')
  }

  function calculate() {
    setCalculator(eval(calculator))
  }

  function cut() {
    setCalculator(calculator.slice(0, -1))
  }

  return (
    <div className='container'>
      <div className='calculator'>
        <form>
          <div>
            <input type="text" value={calculator} onChange={handleclick} />
          </div>
          <div>
            <input type="button" value="C" onClick={CleanDisplay} />
            <input type="button" value="X" onClick={cut} />
            <input type="button" value="." onClick={handleclick} />
            <input type="button" value="/" onClick={handleclick} />
          </div>
          <div>
            <input type="button" value="7" onClick={handleclick} />
            <input type="button" value="8" onClick={handleclick} />
            <input type="button" value="9" onClick={handleclick} />
            <input type="button" value="*" onClick={handleclick} />
          </div>
          <div>
            <input type="button" value="4" onClick={handleclick} />
            <input type="button" value="5" onClick={handleclick} />
            <input type="button" value="6" onClick={handleclick} />
            <input type="button" value="+" onClick={handleclick} />
          </div>
          <div>
            <input type="button" value="1" onClick={handleclick} />
            <input type="button" value="2" onClick={handleclick} />
            <input type="button" value="3" onClick={handleclick} />
            <input type="button" value="-" onClick={handleclick} />
          </div>
          <div>
            <input type="button" value="0" onClick={handleclick} />
            <input type="button" value="=" onClick={calculate} />
          </div>
        </form>
      </div>
    </div>
  )
}

export default App
