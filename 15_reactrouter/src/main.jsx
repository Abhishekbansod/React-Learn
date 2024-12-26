import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Outlet, RouterProvider, Route, Routes } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import Github, {getGithubData} from './components/Github/Github.jsx'
import User from './components/User/User.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = '/' element = {<Layout/>} >
      <Route path='' element={<Home/>} />
      <Route path='about' element={<About/>} />
      <Route path='contact' element={<Contact/>} />
      <Route loader={getGithubData} path='github' element={<Github/>} />

      {/* below is the concept of dynamic routing */}
      <Route path='user/' element = {<User/>}>
        <Route path=':userid' element = {<User/>} />
      </Route>  {/* dynamic routing concept over */}
      
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  
    <RouterProvider router={router}/>
  
)
