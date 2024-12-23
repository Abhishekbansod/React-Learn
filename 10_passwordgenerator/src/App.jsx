import { useCallback, useEffect, useState, useRef } from 'react'
import './App.css'

function App() {

  const [length, setLength] = useState(10)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState('')


  // password generate method
  // useCallback uses the concept of momoization which means it stores the values/data in cache
  // so that whenever function/page re-rendered that data will be used
  const generatePassword = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (charAllowed) str += "0123456789"
    if (numberAllowed) str += "!@#$%^&*()_+"

    for (let i = 1; i < length; i++) {
      const char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)

  }, [length, charAllowed, numberAllowed])


  // to let users know that password is copied from text-box
  // UI modification
  const passwordRef = useRef(null)


  // method for copying the password from text-box
  const copyPassword = () => {
    window.navigator.clipboard.writeText(password)
    passwordRef.current?.select()
  }


  // whenever component/app is loaded or rendered then useEffect will be implemented first & whaterver is inside
  // of it, will be execured, e.g => API call, method call, function call
  // as soon as the dependencies are changed useEffect will come into the picture
  // and will re-run the generatePassword() method
  useEffect(() => {
    generatePassword()
  }, [length, numberAllowed, charAllowed])
 

  return (
    // w-full max-w-md mx-auto rounded-lg px-4 py-3 my-8 bg-orange-800 text-purple-800
    <div className='w-full max-w-lg mx-auto rounded-lg px-4 py-5 my-60 bg-orange-800'>

      <h1 className='text-white text-center my-3 mt-1 font-semibold'>
        Password Generator
      </h1>

      {/* for text box of password */}
      <div className='flex shadow rounded-md overflow-hidden mb-5'>
        <input
          type="text"
          value={password}
          className='outline-none w-full py-1 px-2'
          placeholder='password'
          readOnly
          ref={passwordRef} />

        <button onClick={copyPassword} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
      </div>

      {/* for range and checkboxes */}
      <div className='flex text-sm gap-x-3'>

        {/* for range */}
        <div className='flex items-center gap-x-1'>
          <input
            type="range"
            min={10}
            max={20}
            value={length}
            className='cursor-pointer'
            onChange={(e) => setLength(e.target.value)}
            name=""
            id="" />
          <label className='text-white' htmlFor="length">Length : {length} </label>
        </div>

        {/* for number checkbox */}
        <div className='flex items-center gap-x-1'>
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            onChange={() => {
              setNumberAllowed((prev) => !prev)
            }}
            name=""
            id="" />
          <label htmlFor="number" className='text-white'>Numbers</label>
        </div>

        {/* for character checkbox */}
        <div className='flex items-center gap-x-1'>
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            onChange={() => {
              setCharAllowed((prev) => !prev)
            }}
            name=""
            id="" />
          <label htmlFor="character" className='text-white'>Characters</label>
        </div>

      </div>
    </div>
  )
}

export default App
