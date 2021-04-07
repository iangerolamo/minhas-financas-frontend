import { useState } from 'react';

function App() {

  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [total, setTotal] = useState(0);

 function calculateTotal() {
   setTotal(number1 + number2);
 }

  return (
    <div>
      <label>First number: </label>
        <input 
          type="number" 
          value={number1}
          onChange={e => setNumber1(+e.target.value)}
          
        />
      <br />
      <label>Second number: </label>
        <input 
          type="number"
          value={number2}
          onChange={e => setNumber2(+e.target.value)}
        />
      <br />
      <button onClick={calculateTotal}>
        Add them!
      </button>
      
      <h2>{total}</h2>
    </div>
  );
}

export default App;
