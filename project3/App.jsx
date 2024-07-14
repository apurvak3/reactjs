import { useState, useEffect, useCallback } from 'react';

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);//concatenate
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  useEffect(() => { //by using butto0n also we can do this <button 
  /* className='outline-none bg-white text-black px-3 py-0.5 shrink-0'
    onClick={passwordGenerator}
  >
    Generate
  </button>*/
    passwordGenerator();
  }, [passwordGenerator]);

  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 m-4 text-orange-500 bg-gray-700'>
      <h1 className='text-black text-center my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input
          type='text'
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='password'
          readOnly
        />
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input
            type='range'
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => setLength(Number(e.target.value))}
          />
          <label>length: {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input
            type='checkbox'
            checked={numberAllowed}
            id='numberInput'
            onChange={() => setNumberAllowed((prev) => !prev)}
          />
          <label htmlFor='numberInput'>Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input
            type='checkbox'
            checked={charAllowed}
            id='characterInput'
            onChange={() => setCharAllowed((prev) => !prev)}
          />
          <label htmlFor='characterInput'>Characters</label>
        </div>
      </div>
    </div>
  );
}

export default App;
