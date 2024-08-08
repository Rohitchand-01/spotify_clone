import React, { useContext } from 'react'
import Sidebar from './component/Sidebar'
import Player from './component/Player'
import Display from './component/Display'
// import PlayerContextProvider from './context/PlayerContext'

const App = () => {

  // const{audioRef} = useContext(PlayerContext)
  return (
    <div className='h-screen bg-black'>
      <div className='h-[90%] flex'>
          <Sidebar/>
          <Display/>
      </div>
      <Player/>
      {/* <audio ref={audioRef} preload='auto' ></audio> */}
    </div>
  )
}

export default App
