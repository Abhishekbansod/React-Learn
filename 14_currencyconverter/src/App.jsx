import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useCurrency from './hooks/useCurrency'
import { InputBox } from './components/index.js'


function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('inr')
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrency(from)
  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => {
    setConvertedAmount(Math.round((amount * currencyInfo[to]) * 100)/100)
  }

  return (
    // style={{backgroundImage : `url(https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=600)` }}
    <div className='w-full h-screen flex flex-wrap justify-center items-center 
    bg-cover bg-no-repeat' style={{backgroundImage : `url(https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=600)`}} >
      <div className='w-full'>
        <div className='w-full max-w-md mx-auto border border-gray-600 rounded-lg p-5 backdrop-blur-sm bg-white/30'>

            <form onSubmit={(e) => {
              e.preventDefault()
              convert()
            }}>

              {/* first inputbox */}
              <div className='w-full mb-2'>
                <InputBox 
                label="from"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                onAmountChange={(amount) => setAmount(amount)}
                selectedCurrency={from} />
              </div>

              {/* swap button */}
              <div className='relative w-full h-0.5'>
                  <button onClick={swap} 
                  className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-black text-white px-2 py-0.5'>Swap</button>
              </div>

              {/* second inputbox */}
              <div className='w-full mb-2'>
                <InputBox 
                label="to"
                currencyOptions={options}
                amount={convertedAmount}
                onCurrencyChange={(currency) => setTo(currency)}
                selectedCurrency={to}
                amountDisabled
                 />
              </div>

              {/* submit button */}
              <button 
              className='w-full bg-black text-white px-4 py-3 rounded-lg'
              type='submit' >Convert {from.toUpperCase()} to {to.toUpperCase()} </button>

            </form>
        </div>
      </div>
    </div>
  )
}

export default App
