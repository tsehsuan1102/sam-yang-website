import { Box, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Particle = ({ color, delay, duration, size, theme, x, y }: any) => (
  <motion.div
    animate={{
      opacity: [0, 0.8, 0],
      scale: [0, 1.2, 0],
    }}
    initial={{ opacity: 0, scale: 0 }}
    style={{
      background: `radial-gradient(circle, ${color}80, transparent 70%)`,
      borderRadius: '50%',
      filter: 'blur(3px)',
      height: size,
      left: x,
      position: 'absolute',
      top: y,
      width: size,
    }}
    transition={{
      delay,
      duration,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "loop",
    }}
  />
);

export default function AnimatedBackground() {
  const theme = useTheme();
  const [particles, setParticles] = useState<any[]>([]);

  useEffect(() => {
    // 創建粒子
    const newParticles = Array.from({ length: 30 }, (_, i) => ({
      color: i % 2 === 0 ? theme.palette.primary.main : theme.palette.secondary.main,
      delay: Math.random() * 2,
      duration: Math.random() * 3 + 2,
      id: i,
      size: Math.random() * 150 + 80,
      x: Math.random() * 100,
      y: Math.random() * 100,
    }));
    setParticles(newParticles);
  }, [theme]);

  return (
    <Box
      sx={{
        background: theme.palette.background.default,
        bottom: 0,
        left: 0,
        overflow: 'hidden',
        position: 'fixed',
        right: 0,
        top: 0,
        zIndex: 0,
      }}
    >
      {/* 漸變動畫背景 */}
      <motion.div
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        style={{
          background: `linear-gradient(-45deg, 
            ${theme.palette.primary.main}40,
            ${theme.palette.secondary.main}40,
            ${theme.palette.primary.light}40,
            ${theme.palette.secondary.light}40
          )`,
          backgroundSize: '400% 400%',
          inset: 0,
          position: 'absolute',
        }}
        transition={{
          duration: 15,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      {/* 光暈效果 */}
      <motion.div
        animate={{
          opacity: [0.3, 0.5, 0.3],
          scale: [1, 1.2, 1],
        }}
        style={{
          height: '100%',
          left: '50%',
          position: 'absolute',
          top: '50%',
          //   background: `radial-gradient(circle at 50% 50%, ${theme.palette.secondary.main}30, transparent 70%)`,
          transform: 'translate(-50%, -50%)',
        width: '100%',
        }}
        transition={{
          duration: 8,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      {/* 粒子系統 */}
      {particles.map((particle) => (
        <Particle
          color={particle.color}
          delay={particle.delay}
          duration={particle.duration}
          key={particle.id}
          size={particle.size}
          theme={theme}
          x={`${particle.x}%`}
          y={`${particle.y}%`}
        />
      ))}

      {/* 半透明遮罩層 */}
      <Box
        sx={{
          background: theme.palette.background.default,
          inset: 0,
          opacity: 0.75,
          position: 'absolute',
        }}
      />
    </Box>
  );
} 