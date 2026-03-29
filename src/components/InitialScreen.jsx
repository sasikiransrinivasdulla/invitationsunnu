import { useState, useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FiChevronRight } from 'react-icons/fi';

const InitialScreen = ({ onOpenComplete }) => {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
    }
  }, []);

  const handleDragEnd = (event, info) => {
    const threshold = containerWidth * 0.65;
    if (info.offset.x > threshold) {
      setIsUnlocked(true);
      setTimeout(() => {
        onOpenComplete();
      }, 700);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }}
      className="dark-bg"
      style={{
        height: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Subtle light rays/particles */}
      <motion.div
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
          opacity: [0.2, 0.5, 0.2]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        style={{
          position: 'absolute',
          top: '-50%', left: '-50%', right: '-50%', bottom: '-50%',
          background: 'radial-gradient(circle at center, rgba(255,255,255,0.03) 0%, transparent 40%)',
          backgroundSize: '120px 120px',
          zIndex: 0,
          pointerEvents: 'none'
        }}
      />

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        style={{ marginBottom: '6rem', zIndex: 1, textAlign: 'center' }}
      >
        <h1 style={{
          fontSize: '1.6rem',
          fontWeight: 400,
          letterSpacing: '-0.02em',
          color: 'rgba(255,255,255,0.95)',
          marginBottom: '0.8rem'
        }}>
          Oka chinna request undi...
        </h1>
        <p style={{
          color: 'rgba(255,255,255,0.4)',
          fontSize: '0.95rem',
          fontWeight: 300,
          letterSpacing: '0.01em'
        }}>
          Open cheyyadaniki konchem try cheyyali...
        </p>
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 1, ease: [0.16, 1, 0.3, 1] }}
        ref={containerRef}
        className="ios-slider-track"
        style={{
          width: '80%',
          maxWidth: '300px',
          height: '64px',
          borderRadius: '32px',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          zIndex: 1
        }}
      >
        <motion.div
          animate={{ opacity: isUnlocked ? 0 : 1 }}
          transition={{ duration: 0.4 }}
          style={{
            position: 'absolute',
            width: '100%',
            textAlign: 'center',
            color: 'rgba(255,255,255,0.3)',
            fontWeight: 400,
            letterSpacing: '0.02em',
            fontSize: '0.95rem',
            pointerEvents: 'none'
          }}
        >
          Slide to open
        </motion.div>

        <motion.div
          drag="x"
          dragConstraints={containerRef}
          dragElastic={0.05}
          onDragEnd={handleDragEnd}
          animate={isUnlocked ? { x: containerWidth - 60 } : { x: 0 }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
          className="ios-slider-thumb"
          style={{
            width: '56px',
            height: '56px',
            borderRadius: '50%',
            position: 'absolute',
            left: '4px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'grab',
            zIndex: 2
          }}
          whileTap={{ cursor: 'grabbing', scale: 0.95 }}
          whileDrag={{ boxShadow: '0 0 24px rgba(255,255,255,0.3)' }}
        >
          <FiChevronRight size={24} color="#1c1c1e" style={{ marginLeft: '2px' }} />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default InitialScreen;
