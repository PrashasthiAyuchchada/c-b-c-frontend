import { useState } from 'react'
import './App.css'

import AdminPage from './pages/adminPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TestPage from './pages/testPage'
import { Toaster } from 'react-hot-toast'
import RegisterPage from './pages/client/register'
import LoginPage from './pages/LoginPage'

function App() {
  

  return (
    <BrowserRouter>
    <Toaster position='top-right'/>
     <Routes path="/*">
       <Route path="/admin/*" element={<AdminPage/>}/>
       <Route path="/login" element={<LoginPage/>}/>
       <Route path="/testing" element={<TestPage/>}/>
       <Route path= "/register" element={<RegisterPage/>}/>
       <Route path="/" element={<h1>Home</h1>}/>
       <Route path="/*" element={<h1>404 Not found</h1>}/>

     </Routes> 
    </BrowserRouter>
 
  )
}

export default App
