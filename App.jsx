import { useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0); // Corrected useState usage

  const yes = () => {
    console.log("clicked", counter);
    setCounter(counter + 1);
  };

  const no = () => {
    console.log("clicked", counter);
    if(counter>0){
    setCounter(counter - 1);
    }else{
      console.log('counter value cannot be negative');
    }
  };

  return (
    <>
      <h1>Do you think it is fair for rich people to pay a bigger percentage tax?</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={yes}>Agree</button>
      <br/>
      <button onClick={no}>Disagree</button>
    </>
  );
}

export default App;

