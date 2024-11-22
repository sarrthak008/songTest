import React, { useEffect, useState } from 'react'
import axios from 'axios';
const apiUrl = import.meta.env.VITE_API_URL;
import HEADPHONE from "../assets/headphone.png"
import { AudioPlayer } from 'react-audio-play';
import SongCard from '../components/SongCard.jsx'
import Player from '../components/Player.jsx';

const Home = () => {

  const [songs, setSongs] = useState([])
  const [songurl,setSongUrl] = useState(null)
  const [songNumber,setSongNumber] = useState(8)
  const [loadbtn,setLoadBtn] =useState(true)

  const loadSongs = async () => {
    try {
      const responce = await axios.get(`${apiUrl}/songs`)
      setSongs(responce.data.data)
      console.log(responce)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    loadSongs()
  }, [])

 const count =()=>{
   if(songNumber > songs.length){
      setLoadBtn(false)
   }
 } 
  


  return (

    <div className='h-screen w-screen text-white overflow-x-hidden'>
      <div className='mt-10 text-center '>
           <h1 className='py-1 w-[80%] text-xl bg-gray-800 rounded-full px-1 flex gap-2 sm:w-[30%]'><span className='bg-green-300 px-7 text-black rounded-full font-semibold' ><i className="ri-netease-cloud-music-line"></i> music</span> that feel...</h1>
           <h5 className='text-start ml-3 mt-3 opacity-70'>music that vibe like your mood..</h5>
      </div>

      <div className='flex items-center flex-wrap gap-10 mt-[10%] justify-center mb-[40%] '>
        {
          songs.map((song,index)=>{
              return(
                <>
                {
                  index < songNumber ? <SongCard songdetails={song} key={index} SongUrl={setSongUrl} /> :null 
                }
                </>
              )
          })
        }

        {
          loadbtn ? 
          <button className='text-[#86efac] text-xl' onClick={()=>{
            setSongNumber(songNumber+8)
            count()
          }}>load more songs</button> : null
        }
      </div>

        
        

      <Player songurl={songurl}/>
    </div>
   
  )
}

export default Home
