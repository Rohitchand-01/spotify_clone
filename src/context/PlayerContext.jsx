import { createContext, useRef } from "react";

const PlayerContext = createContext();

const PlayerContextProvider = (props)=>{

    const audioRef = useRef();

    const contextValue ={
        audioRef
    }

    return(
        <PlayerContextProvider value={contextValue}>
            {props.children}
        </PlayerContextProvider>
    )

}

export default PlayerContextProvider;