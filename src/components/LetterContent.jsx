import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LetterContent = ({ onAccept }) => {
  const [noCount, setNoCount] = useState(0);
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });

  const maxNoClicks = 10;
  const isNoGone = noCount >= maxNoClicks;
  
  const handleNoClick = () => {
    if (noCount < maxNoClicks) {
      setNoCount(prev => prev + 1);
      // Generate random translation bounded to avoid going off screen
      const randomX = (Math.random() - 0.5) * 160;
      const randomY = (Math.random() - 0.5) * 80;
      setNoPosition({ x: randomX, y: randomY });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, filter: 'blur(10px)' }}
      transition={{ duration: 1.5 }}
      style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
      }}
    >
      {/* Subtle background parallax images */}
      <motion.div 
        animate={{ y: [0, -15, 0], scale: [1, 1.05, 1] }} 
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute', top: '10%', left: '-10%', width: '250px', height: '250px',
          backgroundImage: 'url(/campus1.jpg)', backgroundSize: 'cover', opacity: 0.1, filter: 'blur(20px)', borderRadius: '50%', zIndex: 0
        }}
      />
      <motion.div 
        animate={{ y: [0, 20, 0], scale: [1.05, 1, 1.05] }} 
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        style={{
          position: 'absolute', bottom: '15%', right: '-10%', width: '300px', height: '300px',
          backgroundImage: 'url(/campus2.jpg)', backgroundSize: 'cover', opacity: 0.08, filter: 'blur(25px)', borderRadius: '50%', zIndex: 0
        }}
      />
      
      {/* The Premium Letter Card */}
      <motion.div
        initial={{ y: 60, opacity: 0, scale: 0.95 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="premium-card"
        style={{
          width: '90%',
          maxWidth: '420px',
          maxHeight: '90vh',
          padding: '40px 24px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          overflowY: 'auto',
          position: 'relative',
          zIndex: 10
        }}
      >
        <div className="paper-texture"></div>

        {/* Spotlight Image */}
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            width: '110px',
            height: '110px',
            borderRadius: '50%',
            overflow: 'hidden',
            border: '3px solid rgba(255,255,255,0.6)',
            boxShadow: '0 10px 30px rgba(0,0,0,0.1), 0 0 40px rgba(255,255,255,0.4)',
            marginBottom: '24px',
            flexShrink: 0
          }}
        >
          <img 
            src="/akka.jpg" 
            alt="Akka" 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            onError={(e) => {
              e.target.src = 'https://ui-avatars.com/api/?name=Akka&background=2c2c2e&color=fff&size=120';
            }}
          />
        </motion.div>

        {/* Glowing Name */}
        <motion.h2
          className="glow-text text-elegant"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          style={{
            fontSize: '1.4rem',
            fontWeight: 600,
            color: 'var(--text-primary)',
            marginBottom: '28px',
            textAlign: 'center',
          }}
        >
          GANDHARAPU MOUNIKA
        </motion.h2>

        {/* Letter Text - Left Aligned */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 1 }}
          style={{
            fontSize: '0.98rem',
            lineHeight: '1.7',
            color: 'var(--text-primary)',
            marginBottom: '40px',
            width: '100%',
            padding: '0 10px',
            textAlign: 'left'
          }}
        >
          <p style={{ marginBottom: '16px', fontWeight: 600, fontSize: '1.05rem' }}>Dear Akka,</p>
          <p style={{ marginBottom: '16px', color: 'rgba(29, 29, 31, 0.85)' }}>Chala respect tho ninnu maa farewell ki invite chesthunna.</p>
          <p style={{ marginBottom: '16px', color: 'rgba(29, 29, 31, 0.85)' }}>Maa journey lo mee presence chala special. Mee support tho memu chala nerchukunnam, chala grow ayyamu. Mee lanti senior undadam maa luck ani feel avthunnam.</p>
          <p style={{ marginBottom: '16px', color: 'rgba(29, 29, 31, 0.85)' }}>Ee farewell maa life lo oka important moment. Mee presence untey inka complete avthundi.</p>
          <p style={{ marginBottom: '16px', color: 'rgba(29, 29, 31, 0.85)' }}>March 30 na maa college lo jarige ee special day ki meeru tappakunda raavali ani korukuntunnam.</p>
          <p style={{ marginBottom: '24px', color: 'rgba(29, 29, 31, 0.85)' }}>Mee blessings tho maa next journey start cheyali ani korukuntunnam.</p>
          <p style={{ fontWeight: 600, color: '#1d1d1f' }}>Waiting for your presence akka.</p>
        </motion.div>

        {/* Interactive Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '16px',
            width: '100%',
            position: 'relative',
          }}
        >
          <AnimatePresence>
            {!isNoGone && (
               <motion.button
                 key="no-btn"
                 onClick={handleNoClick}
                 className="btn btn-secondary"
                 initial={{ scale: 1, opacity: 1 }}
                 animate={{ 
                   scale: Math.max(0.6, 1 - (noCount * 0.05)), 
                   x: noPosition.x, 
                   y: noPosition.y,
                   opacity: 1 - (noCount * 0.08)
                 }}
                 exit={{ opacity: 0, scale: 0 }}
                 transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                 style={{ zIndex: 10 }}
               >
                 Ranu
               </motion.button>
            )}
          </AnimatePresence>

          <motion.button
            onClick={onAccept}
            className="btn btn-primary"
            animate={{ 
              scale: isNoGone ? 1.15 : 1 + (noCount * 0.02),
              x: isNoGone ? '-50%' : 0, 
              left: isNoGone ? '50%' : 'auto',
              position: isNoGone ? 'absolute' : 'relative'
            }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            style={{ zIndex: 11 }}
          >
            Vasthanu
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default LetterContent;
