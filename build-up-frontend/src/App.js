import React from 'react'
import { Outlet } from "react-router-dom";
import './app.scss'

function App() {
  return (
    <div>
      <div className='global-nav'>Nav</div>
      <Outlet />
    </div>
  )
}

export default App
