import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Box, useTheme } from "@mui/material";

const Particle = ({ theme, delay, duration, size, color, x, y }: any) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{
      opacity: [0, 0.8, 0],
      scale: [0, 1.2, 0],
    }}
    style={{
      position: 'absolute',
      width: size,
      height: size,
      background: `radial-gradient(circle, ${color}80, transparent 70%)`,
      borderRadius: '50%',
      filter: 'blur(3px)',
      left: x,
      top: y,
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      repeatType: "loop",
      ease: "easeInOut",
    }}
  />
);

export default function AnimatedBackground() {
  const theme = useTheme();
  const [particles, setParticles] = useState<any[]>([]);

  useEffect(() => {
    // 創建粒子
    const newParticles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      size: Math.random() * 150 + 80,
      color: i % 2 === 0 ? theme.palette.primary.main : theme.palette.secondary.main,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 2,
      duration: Math.random() * 3 + 2,
    }));
    setParticles(newParticles);
  }, [theme]);

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 0,
        overflow: 'hidden',
        background: theme.palette.background.default,
      }}
    >
      {/* 漸變動畫背景 */}
      <motion.div
        style={{
          position: 'absolute',
          inset: 0,
          background: `linear-gradient(-45deg, 
            ${theme.palette.primary.main}40,
            ${theme.palette.secondary.main}40,
            ${theme.palette.primary.light}40,
            ${theme.palette.secondary.light}40
          )`,
          backgroundSize: '400% 400%',
        }}
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />

      {/* 光暈效果 */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '100%',
          height: '100%',
        //   background: `radial-gradient(circle at 50% 50%, ${theme.palette.secondary.main}30, transparent 70%)`,
          transform: 'translate(-50%, -50%)',
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />

      {/* 粒子系統 */}
      {particles.map((particle) => (
        <Particle
          key={particle.id}
          theme={theme}
          delay={particle.delay}
          duration={particle.duration}
          size={particle.size}
          color={particle.color}
          x={`${particle.x}%`}
          y={`${particle.y}%`}
        />
      ))}

      {/* 半透明遮罩層 */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: theme.palette.background.default,
          opacity: 0.75,
        }}
      />
    </Box>
  );
} 