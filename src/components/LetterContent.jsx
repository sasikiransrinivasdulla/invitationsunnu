import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LetterContent = ({ onAccept }) => {
  const [noCount, setNoCount] = useState(0);
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });

  const maxNoClicks = 10;
  const isNoGone = noCount >= maxNoClicks;
  
  // Calculate relative sizes. Base size = 1. Yes grows, No shrinks.
  const yesScale = 1 + (noCount * 0.1);
  const noScale = 1 - (noCount * 0.08);

  const handleNoClick = () => {
    if (noCount < maxNoClicks) {
      setNoCount(prev => prev + 1);
      // Generate random translation between -100px and 100px
      const randomX = (Math.random() - 0.5) * 200;
      const randomY = (Math.random() - 0.5) * 200;
      setNoPosition({ x: randomX, y: randomY });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="glass"
      style={{
        width: '90%',
        maxWidth: '400px',
        maxHeight: '90vh',
        borderRadius: '20px',
        padding: '30px 20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        overflowY: 'auto',
        position: 'relative',
        boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
      }}
    >
      {/* Spotlight Image */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.3, type: 'spring', stiffness: 200, damping: 20 }}
        style={{
          width: '120px',
          height: '120px',
          borderRadius: '50%',
          overflow: 'hidden',
          border: '4px solid var(--glass-border)',
          boxShadow: '0 0 20px var(--primary-glow)',
          marginBottom: '20px',
          flexShrink: 0
        }}
      >
        <img 
          src="/akka.jpg" 
          alt="Akka" 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          onError={(e) => {
            e.target.src = 'https://ui-avatars.com/api/?name=Akka&background=ff6b81&color=fff&size=120';
          }}
        />
      </motion.div>

      {/* Glowing Name */}
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        style={{
          fontSize: '1.5rem',
          fontWeight: 700,
          color: 'var(--primary)',
          marginBottom: '20px',
          textAlign: 'center',
        }}
        className="text-glow"
      >
        GANDHARAPU MOUNIKA
      </motion.h2>

      {/* Letter Text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        style={{
          fontSize: '1rem',
          lineHeight: '1.6',
          color: 'var(--text-dark)',
          textAlign: 'center',
          marginBottom: '30px',
          padding: '0 10px'
        }}
      >
        <p style={{ marginBottom: '15px', fontWeight: 600 }}>Dear Akka,</p>
        <p style={{ marginBottom: '15px' }}>Chala respect tho ninnu maa farewell ki invite chesthunna.</p>
        <p style={{ marginBottom: '15px' }}>Maa journey lo mee presence chala special. Mee support tho memu chala nerchukunnam, chala grow ayyamu. Mee lanti senior undadam maa luck ani feel avthunnam.</p>
        <p style={{ marginBottom: '15px' }}>Ee farewell maa life lo oka important moment. Mee presence untey inka complete avthundi.</p>
        <p style={{ marginBottom: '15px' }}>March 30 na maa college lo jarige ee special day ki meeru tappakunda raavali ani korukuntunnam.</p>
        <p style={{ marginBottom: '15px' }}>Mee blessings tho maa next journey start cheyali ani korukuntunnam.</p>
        <p style={{ fontWeight: 600, color: 'var(--primary)' }}>Waiting for your presence akka.</p>
      </motion.div>

      {/* Interactive Buttons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '20px',
          width: '100%',
          position: 'relative',
          paddingBottom: '20px'
        }}
      >
        <AnimatePresence>
          {!isNoGone && (
             <motion.button
               key="no-btn"
               onClick={handleNoClick}
               className="btn btn-secondary"
               initial={{ scale: 1 }}
               animate={{ 
                 scale: noScale, 
                 x: noPosition.x, 
                 y: noPosition.y 
               }}
               exit={{ opacity: 0, scale: 0 }}
               transition={{ type: 'spring', stiffness: 300, damping: 20 }}
               style={{ position: 'relative', zIndex: 10 }}
             >
               Ranu
             </motion.button>
          )}
        </AnimatePresence>

        <motion.button
          onClick={onAccept}
          className="btn btn-primary"
          animate={{ scale: yesScale }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          style={{ zIndex: 11 }}
        >
          Vasthanu
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default LetterContent;
