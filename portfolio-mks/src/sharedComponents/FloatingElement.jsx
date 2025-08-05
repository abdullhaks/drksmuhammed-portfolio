
import { useMousePosition } from "../hooks/customHooks";
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';


export const FloatingElements = () => {
  const mousePosition = useMousePosition();
  
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute w-2 h-2 rounded-full ${
            i % 3 === 0 ? 'bg-blue-200/40' : 
            i % 3 === 1 ? 'bg-cyan-200/40' : 'bg-purple-200/40'
          }`}
          style={{
            left: `${20 + i * 15}%`,
            top: `${10 + i * 10}%`,
          }}
          animate={{
            x: mousePosition.x * (0.02 + i * 0.005),
            y: mousePosition.y * (0.02 + i * 0.005),
            rotate: 360,
          }}
          transition={{
            x: { type: "spring", stiffness: 100, damping: 10 },
            y: { type: "spring", stiffness: 100, damping: 10 },
            rotate: { duration: 10 + i * 2, repeat: Infinity, ease: "linear" }
          }}
        />
      ))}
    </div>
  );
};