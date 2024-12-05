import React, { useState } from 'react'
import axios from 'axios';
const apiUrl = import.meta.env.VITE_API_URL;
import LikeAnimation from './LikeAnimation';
import CommnetBox from './CommnetBox';
import Toast from 'light-toast' 


const SongCard = ({ songdetails, SongUrl }) => {

  let { name, poster, song_url, like, id ,comment} = songdetails

  const [isSongPlay, setSongPlay] = useState(false)
  const [isSonglike, setLike] = useState(like)
  const [likeAnimation,setLikeAnimation] = useState(false)
  const [isCommentOpen,setOpenComment] =useState(false)

  const handlePlayPause = () => {
    SongUrl({ song_url, name })
    setSongPlay(true);
  };

  const likeSong = async () => {
    try {
      const responce = await axios.patch(`${apiUrl}/like/${id}`)
      setLike(responce?.data?.result)
      playLikeAnimation()
    } catch (error) {
      console.log(error)
    }
  }

 const playLikeAnimation =  () =>{
  setLikeAnimation(true)
    setTimeout(() => {
       setLikeAnimation(false)
    }, 3500)
 } 

 const handelShare =()=>{

   try {
    navigator.clipboard.writeText(`listen these layrics that melt your heart \n ${like}`).then(Toast.success('link copy to click board ',2000))
   } catch (error) {
    Toast.fail("something went wrong..")
   }
 }

  return (
    <div className='h-full w-full bg-gray-800 rounded-lg overflow-hidden section relative' onClick={handlePlayPause}>
      <div className='h-[100%] w-full overflow-hidden relative'>
        <img src={poster} className='h-full w-full object-cover ' />
        <div className='cover absolute top-0 left-0 h-full w-full bg-gradient-to-t from-black  '></div>
      </div>
      <div className='h-full w-14  absolute top-0 right-0 bg-gradient-to-l from-black flex items-center justify-end flex-col gap-6 pb-[40%]'>
        {isSonglike ? <i className="ri-heart-3-fill text-4xl opacity-75 text-[#86EFAC]" onClick={(e) => {
          e.stopPropagation()
          likeSong()
        }}></i> : <i className="ri-heart-3-line text-4xl opacity-75" onClick={(e) => {
          e.stopPropagation()
          likeSong()
        }}></i>}
        <i className="ri-chat-1-line text-4xl opacity-75" onClick={(e)=>{
          e.stopPropagation()
          setOpenComment(true)
          }}></i>
        <i className="ri-share-line text-4xl opacity-75"
         onClick={(e)=>{
           e.stopPropagation(),
           handelShare()
         }}
        ></i>
      </div>
      <div className='h-12 w-full absolute bottom-14 text-xl opacity-80 ml-3 line-clamp-1'>
        {name}
      </div>
      {likeAnimation ? <LikeAnimation/> :null }
      {isCommentOpen?<CommnetBox comments={comment} openComent={setOpenComment} id={id}/>:null}
    </div>
  )
}

export default SongCard
