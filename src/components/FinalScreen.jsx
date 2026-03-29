import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Confetti from 'react-confetti';
import useMeasure from 'react-use-measure';

const FinalScreen = () => {
  const [ref, bounds] = useMeasure();
  const [showTapPrompt, setShowTapPrompt] = useState(false);
  const [hasTapped, setHasTapped] = useState(false);

  // Soft elegant confetti colors
  const elegantColors = ['#d4af37', '#e8ded3', '#f4eee8', '#ced4da', '#b0c4de'];

  useEffect(() => {
    // Show prompt after 3.5 seconds of idle time
    const timer = setTimeout(() => {
      if (!hasTapped) setShowTapPrompt(true);
    }, 3500);
    return () => clearTimeout(timer);
  }, [hasTapped]);

  const handleScreenTap = () => {
    if (!hasTapped) {
      setHasTapped(true);
      setShowTapPrompt(false);
    }
  };

  return (
    <>
      <motion.div
        onClick={handleScreenTap}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        style={{
          width: '100%',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
          background: 'var(--bg-color)',
          cursor: hasTapped ? 'default' : 'pointer'
        }}
      >
        {/* Very subtle background radial glow */}
        <motion.div
          animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.05, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '80%',
            height: '80%',
            background: 'radial-gradient(circle, rgba(212,175,55,0.06) 0%, transparent 60%)',
            zIndex: 0,
            pointerEvents: 'none'
          }}
        />

        <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', pointerEvents: 'none', zIndex: 100 }}>
          <Confetti
            width={window.innerWidth}
            height={window.innerHeight}
            recycle={false}
            numberOfPieces={hasTapped ? 0 : 120} // Stops elegantly on tap
            gravity={0.04}
            colors={elegantColors}
            initialVelocityY={10}
            tweenDuration={6000}
          />
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1, y: [0, -6, 0] }}
          transition={{
            opacity: { duration: 1.5, ease: [0.16, 1, 0.3, 1] },
            scale: { duration: 1.5, ease: [0.16, 1, 0.3, 1] },
            y: { duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }
          }}
          className="premium-card"
          style={{
            width: '90%',
            maxWidth: '460px',
            padding: '56px 36px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            position: 'relative',
            zIndex: 10,
            boxShadow: '0 20px 60px rgba(0,0,0,0.08), 0 0 50px rgba(212,175,55,0.08)'
          }}
        >
          <div className="paper-texture"></div>

          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontSize: '1.75rem',
              fontWeight: 700,
              color: 'var(--text-primary)',
              marginBottom: '2.5rem',
              lineHeight: '1.4',
              letterSpacing: '-0.02em',
              zIndex: 1
            }}
            className="glow-text"
          >
            Maaku telusu akka meeru vastharu ani...
          </motion.h2>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            style={{
              background: 'var(--glass-bg)',
              backdropFilter: 'blur(16px)',
              padding: '24px',
              borderRadius: '16px',
              marginBottom: '2.5rem',
              border: '1px solid rgba(255,255,255,0.8)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.04)',
              zIndex: 1,
              width: '100%'
            }}
          >
            <p style={{
              fontSize: '1.15rem',
              fontWeight: 500,
              color: '#1d1d1f',
              letterSpacing: '-0.01em',
              margin: 0
            }}>
              Please CSE 1st Block Top Floor ki visit cheyandi...
            </p>
          </motion.div>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.8, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontSize: '1.05rem',
              fontWeight: 300,
              color: 'rgba(29, 29, 31, 0.75)',
              lineHeight: '1.7',
              fontStyle: 'italic',
              zIndex: 1,
              margin: 0
            }}
          >
            "Ah place ni meekosam memu kastapadi design chesamu... meeru vachhi enjoy chestharu ani waiting..."
          </motion.p>
        </motion.div>

        {/* Tap Prompt */}
        <AnimatePresence>
          {showTapPrompt && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.8 } }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
              style={{
                position: 'absolute',
                bottom: '8%',
                left: 0,
                width: '100%',
                textAlign: 'center',
                zIndex: 50,
                pointerEvents: 'none'
              }}
            >
              <motion.p
                animate={{ opacity: [0.3, 0.8, 0.3] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                style={{
                  fontSize: '0.95rem',
                  fontWeight: 400,
                  color: 'var(--text-secondary)',
                  letterSpacing: '0.02em',
                  margin: 0
                }}
              >
                Okka sari tap cheyyava akka...
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Heartfelt Ending Overlay */}
      <AnimatePresence>
        {hasTapped && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, backdropFilter: 'blur(12px)' }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              background: 'rgba(5, 5, 8, 0.75)', // Deep elegant dimming
              zIndex: 200,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '32px'
            }}
          >
            <motion.p
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 2.5, ease: "easeOut" }}
              style={{
                color: 'rgba(255, 255, 255, 0.95)',
                fontSize: '1.4rem',
                fontWeight: 300,
                textAlign: 'center',
                lineHeight: '1.8',
                letterSpacing: '0.02em',
                maxWidth: '500px',
                textShadow: '0 4px 20px rgba(0,0,0,0.5)'
              }}
            >
              "Mee presence maaku chala important akka…<br />
              <span style={{ fontSize: '1.15rem', opacity: 0.8, display: 'inline-block', marginTop: '1rem' }}>
                Hope you have a Wonderful Day..."
              </span>
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FinalScreen;
