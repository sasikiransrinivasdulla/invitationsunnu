import React from 'react';
import { motion } from 'framer-motion';
import Confetti from 'react-confetti';
import useMeasure from 'react-use-measure';

const FinalScreen = () => {
  const [ref, bounds] = useMeasure();

  // Soft elegant confetti colors
  const elegantColors = ['#d4af37', '#e8ded3', '#f4eee8', '#a78bfa', '#b0c4de'];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
      className="premium-card"
      style={{
        width: '90%',
        maxWidth: '440px',
        padding: '50px 32px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        zIndex: 10
      }}
    >
      <div className="paper-texture"></div>

      <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', pointerEvents: 'none', zIndex: 100 }}>
        <Confetti 
          width={window.innerWidth} 
          height={window.innerHeight} 
          recycle={false} 
          numberOfPieces={150} 
          gravity={0.06}
          colors={elegantColors}
          initialVelocityY={10}
          tweenDuration={5000}
        />
      </div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        style={{ zIndex: 1 }}
      >
        <h2 style={{
          fontSize: '1.7rem',
          fontWeight: 600,
          color: 'var(--text-primary)',
          marginBottom: '32px',
          lineHeight: '1.4',
          letterSpacing: '-0.02em'
        }} className="glow-text">
          Maaku telusu akka meeru vastharu ani...
        </h2>

        <div style={{
          background: 'rgba(255,255,255,0.4)',
          padding: '24px',
          borderRadius: '16px',
          marginBottom: '28px',
          border: '1px solid rgba(255,255,255,0.6)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.03)'
        }}>
          <p style={{
            fontSize: '1.15rem',
            fontWeight: 600,
            color: '#1d1d1f',
            letterSpacing: '-0.01em'
          }}>
            Please CSE 1st Block Top Floor ki visit cheyandi...
          </p>
        </div>

        <p style={{
          fontSize: '1rem',
          color: 'rgba(29, 29, 31, 0.7)',
          lineHeight: '1.6',
          fontStyle: 'italic'
        }}>
          "Ah place ni meekosam memu kastapadi design chesamu... meeru vachhi enjoy chestharu ani nammakam"
        </p>
      </motion.div>
    </motion.div>
  );
};

export default FinalScreen;
