import { useState } from 'react'
import './App.css'
import Home from './views/Home'
import Song from './views/Song'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { SongContextProvider } from './context/Mycontext'


function App() {

  return (
    <div className='h-screen w-screen overflow-x-hidden '>
      <BrowserRouter>
      <SongContextProvider>
         <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/song/:id' element={<Song/>} />
         </Routes>
         </SongContextProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
