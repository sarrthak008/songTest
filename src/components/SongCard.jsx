import React,{useState} from 'react'

const SongCard = ({ songdetails, SongUrl}) => {

  let { name, poster, song_url } = songdetails
  const [isSongPlay,setSongPlay] = useState(false)

  const handlePlayPause = () => {
    SongUrl(song_url); 
    setSongPlay(true);
  };
  


  return (
    <div className='h-[250px] w-[280px] bg-gray-800 rounded-lg overflow-hidden '>
      <div className='h-[60%] w-full overflow-hidden relative'>
        <img src={poster} className='h-full w-full object-cover ' />
        <div className='cover absolute top-0 left-0 h-full w-full bg-gradient-to-t from-black  '></div>
      </div>
      <span className='text-[19px] line-clamp-1 font-semibold ml-2 opacity-80'>{name}</span>
      <div className='flex justify-between px-3 mt-2'>
        <i className="ri-heart-3-line cursor-pointer text-[35px] opacity-50 hover:opacity-100 transition-colors"></i>
        <span onClick={handlePlayPause}>{isSongPlay ? <i className="ri-pulse-line cursor-pointer text-[35px]  text-[#86EFAC]"></i> : <i class="ri-play-circle-fill cursor-pointer text-[35px] opacity-50 hover:opacity-100 transition-colors "></i>}</span>
      </div>
    </div>
  )
}

export default SongCard
