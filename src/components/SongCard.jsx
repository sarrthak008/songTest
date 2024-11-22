import React,{useState} from 'react'
import Player from './Player'

const SongCard = ({ songdetails, SongUrl}) => {

  let { name, poster, song_url } = songdetails
  const [isSongPlay,setSongPlay] = useState(false)

  const handlePlayPause = () => {
     SongUrl({song_url ,name})
     setSongPlay(true);
  };
  


  return (
    <div className='h-full w-full bg-gray-800 rounded-lg overflow-hidden section relative' onClick={handlePlayPause}>
      <div className='h-[100%] w-full overflow-hidden relative'>
        <img src={poster} className='h-full w-full object-cover ' />
        <div className='cover absolute top-0 left-0 h-full w-full bg-gradient-to-t from-black  '></div>
      </div>
      <div className='h-full w-14  absolute top-0 right-0 bg-gradient-to-l from-black flex items-center justify-end flex-col gap-6 pb-[40%]'>
          <i className="ri-heart-3-line text-4xl opacity-75"></i>
          <i className="ri-chat-1-line text-4xl opacity-75"></i>
          <i className="ri-share-line text-4xl opacity-75"></i>
      </div>
      <div className='h-12 w-full absolute bottom-14 text-xl opacity-80 ml-3 line-clamp-1'>
          {name}
      </div>
    </div>
  )
}

export default SongCard
