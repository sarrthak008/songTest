import {  createContext, useContext, useState } from "react";

const SongContext = createContext()

const SongContextProvider = ({children}) =>{

    const [songurl,setSongUrl] = useState(null)

    return(
        <SongContext.Provider value={{songurl,setSongUrl}}>
            {children}
        </SongContext.Provider>
    )
}

const useSongContext = () =>{
     return useContext(SongContext)
}
export {useSongContext , SongContextProvider}