
// packages / libraries
import { useState } from 'react'

// styling
import '../styles/QuantityInput.css'

function QuantityInput({ id, name }) {
  // react states
  const [value, setValue] = useState(1)

  // value mutator
  function updateValue(val) {
    if (val > 0) {
      setValue(val)
    }
  }

  return (
    <div className='quantity-input'>
      <label htmlFor={name}>Quantity:</label>
      <div>
        <button onClick={() => updateValue(value - 1)}>
          <div className="symbol">-</div>
        </button>
        <input 
          type="number" 
          id={id} 
          name={name} 
          value={value} 
          onChange={(event) => updateValue(event.target.value)}>
        </input>
        <button onClick={() => updateValue(value + 1)}>
          <div className="symbol">+</div>
        </button>
      </div>
    </div>
  )
}

export default QuantityInput
