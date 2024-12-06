import React from 'react'
import { useParams } from 'react-router-dom'
const apiUrl = import.meta.env.VITE_API_URL;

const Song = () => {
  
  let {id} = useParams()
  
  const loadSong = async () =>{
      const responce
  }
   

  return (
    <div>
       {id}
    </div>
  )
}

export default Song
