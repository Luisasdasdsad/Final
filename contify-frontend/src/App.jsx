import { useContext } from 'react';
import Display from './components/Display';
import Player from './components/Player';
import Sidebar from './components/Sidebar';
import { PlayerContext } from './context/PlayerContext';

const App = () => {
  const { audioRef, track, songsData } = useContext(PlayerContext);

  return (
    <div className='h-screen flex flex-col bg-black'>
      {songsData.length !== 0 ? (
        <>
          <div className="flex-grow flex overflow-hidden">
            <Sidebar />
            <div className="flex-grow overflow-auto">
              <Display />
            </div>
          </div>
          <Player />
        </>
      ) : null}
      <audio ref={audioRef} src={track ? track.file : ""} preload='none'></audio>
    </div>
  );
};

export default App;