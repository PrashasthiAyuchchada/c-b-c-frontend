import { useState } from 'react'
import './App.css'

import AdminPage from './pages/adminPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TestPage from './pages/testPage'
import { Toaster } from 'react-hot-toast'
import RegisterPage from './pages/client/register'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/homePage'

function App() {
  

  return (
    <BrowserRouter>
    <Toaster position='top-right'/>
     <Routes path="/*">
       <Route path="/admin/*" element={<AdminPage/>}/>
       <Route path="/login" element={<LoginPage/>}/>
       <Route path="/testing" element={<TestPage/>}/>
       <Route path= "/register" element={<RegisterPage/>}/>
       <Route path="/*" element={<HomePage/>}/>
      

     </Routes> 
    </BrowserRouter>
 
  )
}

export default App
