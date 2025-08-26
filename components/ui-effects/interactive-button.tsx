import { Button, ButtonProps } from '@mui/material';
import { alpha, useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';
import React from 'react';

interface InteractiveButtonProps extends Omit<ButtonProps, 'component'> {
  children: React.ReactNode;
  glowColor?: string;
  rippleEffect?: boolean;
}

const InteractiveButton: React.FC<InteractiveButtonProps> = ({
  children,
  glowColor,
  rippleEffect = true,
  sx,
  ...props
}) => {
  const theme = useTheme();
  const effectColor = glowColor || theme.palette.primary.main;

  return (
    <motion.div
      whileHover={{ 
        scale: 1.05, 
        y: -2,
      }}
      whileTap={{ 
        scale: 0.98,
        y: 0,
      }}
      style={{ display: 'inline-block' }}
    >
      <Button
        sx={{
          background: `linear-gradient(45deg, ${effectColor}, ${theme.palette.secondary.main})`,
          boxShadow: `0 4px 20px ${alpha(effectColor, 0.4)}`,
          borderRadius: '12px',
          px: 4,
          py: 1.5,
          fontSize: '1.1rem',
          fontWeight: 600,
          textTransform: 'none',
          position: 'relative',
          overflow: 'hidden',
          transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          '&:hover': {
            background: `linear-gradient(45deg, ${theme.palette.primary.dark}, ${theme.palette.secondary.dark})`,
            boxShadow: `
              0 6px 25px ${alpha(effectColor, 0.6)},
              0 0 0 1px ${alpha(effectColor, 0.3)}
            `,
            transform: 'none',
          },
          '&:active': {
            transform: 'none',
          },
          ...(rippleEffect && {
            '&::before': {
              content: '""',
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: '0',
              height: '0',
              borderRadius: '50%',
              background: alpha('#ffffff', 0.3),
              transition: 'all 0.6s ease-out',
              transform: 'translate(-50%, -50%)',
            },
            '&:active::before': {
              width: '300px',
              height: '300px',
            },
          }),
          '&::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: '-100%',
            width: '100%',
            height: '100%',
            background: `linear-gradient(
              90deg,
              transparent,
              ${alpha('#ffffff', 0.3)},
              transparent
            )`,
            transition: 'left 0.7s ease-in-out',
          },
          '&:hover::after': {
            left: '100%',
          },
          ...sx,
        }}
        {...props}
      >
        {children}
      </Button>
    </motion.div>
  );
};

export default InteractiveButton;