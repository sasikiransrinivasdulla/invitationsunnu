import { motion } from 'framer-motion';

const Envelope3D = ({ onOpened }) => {
  return (
    <motion.div
      initial={{ scale: 0.85, opacity: 0, y: 50, rotateX: 10 }}
      animate={{ scale: 1, opacity: 1, y: 0, rotateX: 0 }}
      exit={{ scale: 1.1, opacity: 0, filter: 'blur(10px)' }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      style={{
        perspective: '1200px',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <motion.div 
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'relative',
          width: '320px',
          height: '220px',
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Soft realistic shadow underneath */}
        <motion.div 
          animate={{ scale: [1, 0.95, 1], opacity: [0.4, 0.3, 0.4] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            position: 'absolute',
            bottom: '-40px',
            left: '10%',
            width: '80%',
            height: '20px',
            background: 'rgba(0,0,0,0.5)',
            filter: 'blur(20px)',
            borderRadius: '50%',
            zIndex: -1
          }}
        />

        {/* Back of envelope */}
        <div style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          background: 'var(--envelope-body)',
          borderRadius: '12px',
          boxShadow: 'inset 0 0 20px rgba(0,0,0,0.02)',
        }}></div>

        {/* Letter sliding out */}
        <motion.div 
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: -100, opacity: 1 }}
          transition={{ delay: 1.4, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          onAnimationComplete={() => {
            setTimeout(onOpened, 600);
          }}
          style={{
            position: 'absolute',
            width: '90%',
            height: '95%',
            background: '#ffffff',
            left: '5%',
            top: '2%',
            borderTopLeftRadius: '8px',
            borderTopRightRadius: '8px',
            zIndex: 1,
            boxShadow: '0 -5px 15px rgba(0,0,0,0.05)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            paddingTop: '20px'
          }}
        >
          <div style={{ width: '30%', height: '6px', background: '#f0f0f0', marginBottom: '12px', borderRadius: '4px' }}></div>
          <div style={{ width: '70%', height: '6px', background: '#f0f0f0', marginBottom: '12px', borderRadius: '4px' }}></div>
          <div style={{ width: '60%', height: '6px', background: '#f0f0f0', borderRadius: '4px' }}></div>
        </motion.div>

        {/* Front bottom fold */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          width: '0',
          height: '0',
          borderLeft: '160px solid transparent',
          borderRight: '160px solid transparent',
          borderBottom: '110px solid #ecdac6',
          zIndex: 2,
          borderBottomLeftRadius: '12px',
          borderBottomRightRadius: '12px',
          filter: 'drop-shadow(0 -2px 4px rgba(0,0,0,0.03))'
        }}></div>

        {/* Flap (Animated) */}
        <motion.div
          initial={{ rotateX: 0 }}
          animate={{ rotateX: 180 }}
          transition={{ delay: 0.6, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: 'absolute',
            top: 0,
            width: '0',
            height: '0',
            borderLeft: '160px solid transparent',
            borderRight: '160px solid transparent',
            borderTop: '110px solid var(--envelope-flap)',
            transformOrigin: 'top',
            zIndex: 3,
            filter: 'drop-shadow(0px 4px 6px rgba(0,0,0,0.08))'
          }}
        ></motion.div>

      </motion.div>
    </motion.div>
  );
};

export default Envelope3D;
