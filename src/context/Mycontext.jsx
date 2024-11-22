import {  createContext, useContext, useState } from "react";

const SongContext = createContext()

const SongContextProvider = ({children}) =>{


    return(
        <SongContext.Provider>
            {children}
        </SongContext.Provider>
    )
}

const useSongContext = () =>{
     return useContext(SongContext)
}
export {useSongContext , SongContextProvider}