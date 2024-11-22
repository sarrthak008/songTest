import React,{useState} from 'react'

const SongCard = ({ songdetails, SongUrl}) => {

  let { name, poster, song_url } = songdetails
  const [isSongPlay,setSongPlay] = useState(false)

  const handlePlayPause = () => {
    SongUrl(song_url); 
    setSongPlay(true);
  };
  


  return (
    <div className='h-full w-full bg-gray-800 rounded-lg overflow-hidden section '>
      <div className='h-[100%] w-full overflow-hidden relative'>
        <img src={poster} className='h-full w-full object-cover ' />
        <div className='cover absolute top-0 left-0 h-full w-full bg-gradient-to-t from-black  '></div>
      </div>
    </div>
  )
}

export default SongCard
