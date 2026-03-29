import React from 'react';
import { motion } from 'framer-motion';
import Confetti from 'react-confetti';
import useMeasure from 'react-use-measure';

const FinalScreen = () => {
  const [ref, bounds] = useMeasure();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      className="glass"
      style={{
        width: '90%',
        maxWidth: '400px',
        padding: '40px 24px',
        borderRadius: '24px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        boxShadow: '0 20px 50px rgba(0,0,0,0.15)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Confetti effect limited to the card or full screen, let's use full window via fixed position */}
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', pointerEvents: 'none', zIndex: 100 }}>
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          recycle={false}
          numberOfPieces={300}
          gravity={0.15}
        />
      </div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <h2 style={{
          fontSize: '1.8rem',
          fontWeight: 700,
          color: 'var(--primary)',
          marginBottom: '30px',
          lineHeight: '1.4'
        }} className="text-glow">
          Maaku telusu akka meeru vastharu ani...
        </h2>

        <div style={{
          background: 'rgba(255,255,255,0.5)',
          padding: '20px',
          borderRadius: '16px',
          marginBottom: '20px',
          border: '1px solid var(--glass-border)'
        }}>
          <p style={{
            fontSize: '1.1rem',
            fontWeight: 600,
            color: '#2d3436',
          }}>
            Please CSE 1st Block Top Floor ki visit cheyandi...
          </p>
        </div>

        <p style={{
          fontSize: '1rem',
          color: 'rgba(45, 52, 54, 0.8)',
          lineHeight: '1.5',
          fontStyle: 'italic'
        }}>
          "Ah place ni meekosam memu kastapadi design chesamu... meeru vachhi enjoy chestharu ani uhisthunnam"
        </p>
      </motion.div>
    </motion.div>
  );
};

export default FinalScreen;
