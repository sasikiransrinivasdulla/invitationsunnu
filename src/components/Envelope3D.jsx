import { motion } from 'framer-motion';

const Envelope3D = ({ onOpened }) => {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0, rotateY: 90 }}
      animate={{ scale: 1, opacity: 1, rotateY: 0 }}
      exit={{ scale: 1.2, opacity: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      style={{
        perspective: '1000px',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <div style={{
        position: 'relative',
        width: '300px',
        height: '200px',
        transformStyle: 'preserve-3d',
      }}>
        {/* Back of envelope */}
        <div style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          background: 'var(--envelope-body)',
          borderRadius: '8px',
          boxShadow: '0 10px 30px var(--envelope-shadow)',
          border: '1px solid rgba(255,255,255,0.2)'
        }}></div>

        {/* Letter Inside (slides out implicitly or we just transition completely to another screen) */}
        <motion.div 
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: -80, opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          onAnimationComplete={() => {
            setTimeout(onOpened, 500);
          }}
          style={{
            position: 'absolute',
            width: '90%',
            height: '90%',
            background: 'white',
            left: '5%',
            top: '5%',
            borderRadius: '4px',
            zIndex: 1,
            boxShadow: '0 0 10px rgba(0,0,0,0.1)'
          }}
        >
          {/* Subtle lines resembling a letter */}
          <div style={{ padding: '20px' }}>
            <div style={{ width: '40%', height: '8px', background: '#e0e0e0', marginBottom: '10px', borderRadius: '4px' }}></div>
            <div style={{ width: '80%', height: '8px', background: '#e0e0e0', marginBottom: '10px', borderRadius: '4px' }}></div>
            <div style={{ width: '70%', height: '8px', background: '#e0e0e0', borderRadius: '4px' }}></div>
          </div>
        </motion.div>

        {/* Front bottom fold */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          width: '0',
          height: '0',
          borderLeft: '150px solid transparent',
          borderRight: '150px solid transparent',
          borderBottom: '100px solid #f6b980',
          zIndex: 2,
          borderBottomLeftRadius: '8px',
          borderBottomRightRadius: '8px',
        }}></div>

        {/* Flap (Animated) */}
        <motion.div
          initial={{ rotateX: 0 }}
          animate={{ rotateX: 180 }}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeInOut" }}
          style={{
            position: 'absolute',
            top: 0,
            width: '0',
            height: '0',
            borderLeft: '150px solid transparent',
            borderRight: '150px solid transparent',
            borderTop: '100px solid var(--envelope-flap)',
            transformOrigin: 'top',
            zIndex: 3,
            filter: 'drop-shadow(0px 2px 2px rgba(0,0,0,0.1))'
          }}
        ></motion.div>

      </div>
    </motion.div>
  );
};

export default Envelope3D;
