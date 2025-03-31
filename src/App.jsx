import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss'
import Layout from './Pages/Layout/Layout'
import SignUp from './Pages/SignUp/SignUp'
import SignIn from './Pages/SignIn/SignIn'

function App() {
 

  return (
   <BrowserRouter basename='/hypicons'>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path='SignUp' element={<SignUp/>} />
        <Route path='SignIn' element={<SignIn/>} />
      </Routes>
   </BrowserRouter>
  )
}

export default App
