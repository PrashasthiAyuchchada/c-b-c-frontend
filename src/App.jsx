import { useState } from 'react'
import './App.css'
import LoginPage from './pages/loginPage'
import ProductCard from './components/product-card'
import Header from './components/header'
import AdminPage from './pages/adminPage'
import { BrowserRouter } from 'react-router-dom'

function App() {
  

  return (
    <BrowserRouter>
      //<LoginPage />
      <AdminPage/>
    </BrowserRouter>
 
  )
}

export default App
