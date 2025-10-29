import React from 'react'
import { createRoot } from 'react-dom/client'
import { Navbar, Hero,Features } from './App'
import './index.css'

const root = createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    
      <Navbar />
      <Hero />
    <Features />
  </React.StrictMode>
)