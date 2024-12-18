import React, { useEffect, useState } from 'react'
import AVTARIMG from "../assets/avtar.png"
import axios from 'axios'
const apiUrl = import.meta.env.VITE_API_URL;

const CommnetBox = ({ openComent, id }) => {

    console.log(id)

    const [newCommetn, setNewComment] = useState({
        name: `user`,
        content: ''
    })

    const [comments,setComments] =useState([])

    const loadComments = async () => {
        try {
            const responce = await axios.get(`${apiUrl}/comment/${id}`)
            setComments(responce.data.data)
        } catch (error) {

        }
    }

    useEffect(()=>{
        loadComments()
    },[])


    const addcomment = async () => {
        try {
            let responce = await axios.post(`${apiUrl}/comment/${id}`, newCommetn)
            console.log(responce.data.data)
            setNewComment({name:"user",content:''})
            loadComments()
        } catch (error) {
            console.log(error)
        }
    }

    const deleteComment = async (index) =>{
        try {
            let responce = await axios.delete(`${apiUrl}/comment/${id}/${index}`)
            console.log(responce)
            loadComments()
        } catch (error) {
             console.log(error)
        }
    }



    return (
        <div className='h-full w-full bg-[#86efad41]  absolute top-0 left-0 flex items-end z-40 cursor-pointer ' onClick={(e) => {
            e.stopPropagation()
            openComent(false)
        }}>
            <div className='h-[70%] w-full bg-[#373938] text-black relative overflow-x-hidden overflow-y-scroll comment top-0' onClick={(e) => {
                e.stopPropagation()
            }}>
                {comments.length == 0 ?
                    <div>
                        <h1 className='text-center text-xl text-white opacity-75'>no comments here...</h1>
                    </div>
                    : comments.map((comment,index) => {
                        return (
                            <div className='w-[95%] min-h-16 bg-[#86efad17] text-black flex justify-start gap-3 items-center whitespace-wrap py-2 mt-3 m-auto' key={index}>
                                <div className='flex flex-col gap-0 leading-3 text-white ml-3'>
                                    <span className='font-medium text-lg opacity-70 '>{comment.name}</span>
                                    <span className='text-[15px] leading-5 opacity-55'>{comment.content}</span>
                                    <div className='mt-6 w-full flex gap-20 text-sm opacity-75'><span className='text-red-300' onClick={()=>{deleteComment(index)}}>delete <i className="ri-delete-bin-6-fill"></i></span></div>
                                 </div>
                            </div>
                        )
                    })}
                
            </div>
            <div className='absolute bottom-20 bg-[#323232] w-full h-14 flex items-center  gap-2 flex iteam-center justify-center' onClick={(e)=>{e.stopPropagation()}}>
                    <input className='bg-gray-500 outline-none w-[80%] px-1 py-2  text-white text-xl' placeholder='enter your comment' value={newCommetn.content} onChange={(e) => setNewComment({ ...newCommetn, content: e.target.value })} ></input>
                    <button onClick={() => addcomment()}><i className="ri-send-plane-fill text-[#86efac] text-3xl"></i></button>
            </div>
        </div>
    )
}

export default CommnetBox
