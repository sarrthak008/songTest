import { useState } from 'react'
import './App.css'
import Home from './views/Home'
import { SongContextProvider } from './context/Mycontext'


function App() {

  return (
    <div className='h-screen w-screen overflow-x-hidden '>
      <SongContextProvider>
        <Home />
      </SongContextProvider>
    </div>
  )
}

export default App
