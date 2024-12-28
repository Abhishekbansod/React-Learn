import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ChildA from './components/ChildA';


//step1: creating context
const UserContext = createContext();
//step2: wrap all the childs inside the provider
//step3: pass the values 
//step4: consume the values in childs

function App() {

  // for step 3 => pass the values
  const [user, setUser] = useState({username : 'abhishek', password : 'abhishek@123'})

  return (
    <>
      <h2>Concept of Context API and useContext hook</h2>

      {/* wrapping the childs inside the provider */}
      <UserContext.Provider value={user} >
        <ChildA />
      </UserContext.Provider>

    </>
  )
}

export default App
export {UserContext}