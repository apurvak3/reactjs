import { useState } from 'react';// This imports the useState hook from React, which allows you to add state to functional components.
import './App.css';

function App() {
  const [counter, setCounter] = useState(0); // This line initializes a state variable counter with a value of 0. The setCounter function is used to update the value of counter.

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

  return (         //This part of the function returns the JSX to be rendered.
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

