import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import SongCard from '../components/SongCard';
import Player from '../components/Player';
import { useSongContext } from '../context/Mycontext';
const apiUrl = import.meta.env.VITE_API_URL;

const Song = () => {

  let { id } = useParams()
  const [song, setSong] = useState([])
  const { songurl, setSongUrl } = useSongContext()

  const loadSong = async () => {
    try {
      const responce = await axios.get(`${apiUrl}/songs/${id}`);
      setSong(responce?.data?.data);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => { loadSong() }, [])

  return (
    <>
      <div className='scroll-container h-screen w-screen transition-all sm:w-[35%] sm:absolute sm:top-0 sm:left-[50%] sm:translate-x-[-50%] text-white'>
        <SongCard songdetails={song} SongUrl={setSongUrl}/>
      </div>
      <div>
        <Player songurl={songurl} />
      </div>
    </>
  )
}

export default Song
