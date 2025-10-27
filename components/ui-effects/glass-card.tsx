import { Box, BoxProps } from '@mui/material';
import { alpha, useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';
import React from 'react';

interface GlassCardProps extends BoxProps {
  children: React.ReactNode;
  blur?: string;
  opacity?: number;
  borderOpacity?: number;
  gradient?: boolean;
  hover?: boolean;
}

const GlassCard: React.FC<GlassCardProps> = ({
  children,
  blur = '20px',
  opacity = 0.95,
  borderOpacity = 0.2,
  gradient = true,
  hover = true,
  sx,
  ...props
}) => {
  const theme = useTheme();

  return (
    <Box
      component={motion.div}
      whileHover={hover ? { 
        scale: 1.02,
        boxShadow: `0 25px 50px ${alpha(theme.palette.primary.main, 0.25)}`,
      } : undefined}
      sx={{
        background: gradient 
          ? `linear-gradient(135deg, 
              ${alpha(theme.palette.background.paper, opacity)} 0%, 
              ${alpha(theme.palette.primary.main, 0.05)} 100%
            )`
          : alpha(theme.palette.background.paper, opacity),
        backdropFilter: `blur(${blur})`,
        WebkitBackdropFilter: `blur(${blur})`,
        border: '1px solid',
        borderColor: alpha(theme.palette.primary.main, borderOpacity),
        borderRadius: 3,
        boxShadow: `
          0 8px 32px ${alpha(theme.palette.primary.main, 0.1)},
          inset 0 1px 0 ${alpha('#ffffff', 0.05)}
        `,
        transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        overflow: 'hidden',
        position: 'relative',
        '&::before': gradient ? {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `linear-gradient(135deg, 
            ${alpha('#ffffff', 0.1)} 0%, 
            transparent 50%
          )`,
          pointerEvents: 'none',
          zIndex: 1,
        } : undefined,
        '& > *': {
          position: 'relative',
          zIndex: 2,
        },
        ...sx,
      }}
      {...props}
    >
      {children}
    </Box>
  );
};

export default GlassCard;