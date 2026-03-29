import { useState, useRef, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import InitialScreen from './components/InitialScreen';
import Envelope3D from './components/Envelope3D';
import LetterContent from './components/LetterContent';
import FinalScreen from './components/FinalScreen';

function App() {
  const [currentScreen, setCurrentScreen] = useState('initial'); // initial, envelope, letter, final
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current = new Audio('/background.mp3');
    audioRef.current.loop = true;
    audioRef.current.volume = 0.3; // low volume
  }, []);

  const handleOpenComplete = () => {
    setCurrentScreen('envelope');
  };

  const handleEnvelopeOpened = () => {
    setCurrentScreen('letter');
    if (audioRef.current) {
      audioRef.current.play().catch(e => console.log("Audio play failed, or background.mp3 not found", e));
    }
  };

  const handleAccept = () => {
    setCurrentScreen('final');
  };

  return (
    <AnimatePresence mode="wait">
      {currentScreen === 'initial' && <InitialScreen key="initial" onOpenComplete={handleOpenComplete} />}
      {currentScreen === 'envelope' && <Envelope3D key="envelope" onOpened={handleEnvelopeOpened} />}
      {currentScreen === 'letter' && <LetterContent key="letter" onAccept={handleAccept} />}
      {currentScreen === 'final' && <FinalScreen key="final" />}
    </AnimatePresence>
  );
}

export default App;
