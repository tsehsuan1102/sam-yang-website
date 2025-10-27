import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
  useTheme,
} from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import { alpha } from '@mui/material/styles';
import { motion } from 'framer-motion';
import React from 'react';

const MotionAccordion = motion(Accordion);

interface AnimatedAccordionProps {
  id: string;
  expanded: string | false;
  onChange: (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => void;
  icon: React.ReactElement;
  title: string;
  children: React.ReactNode;
}

const AnimatedAccordion: React.FC<AnimatedAccordionProps> = ({
  id,
  expanded,
  onChange,
  icon,
  title,
  children,
}) => {
  const theme = useTheme();

  return (
    <MotionAccordion
      expanded={expanded === id}
      onChange={onChange(id)}
      sx={{
        '&:before': { display: 'none' },
        '&:not([aria-expanded="true"]):hover': {
          background: `linear-gradient(135deg, 
            ${alpha(theme.palette.primary.main, 0.08)} 0%, 
            ${alpha(theme.palette.secondary.main, 0.05)} 100%
          )`,
          transform: 'translateX(8px)',
          boxShadow: `0 8px 32px ${alpha(theme.palette.primary.main, 0.15)}`,
        },
        background: `linear-gradient(135deg, 
          ${alpha(theme.palette.background.paper, 0.95)} 0%, 
          ${alpha(theme.palette.primary.main, 0.03)} 100%
        )`,
        backdropFilter: 'blur(20px)',
        border: '1px solid',
        borderColor: alpha(theme.palette.primary.main, 0.2),
        borderRadius: '12px !important',
        mb: 3,
        transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      }}
      whileHover={{ scale: 1.01 }}
    >
      <AccordionSummary expandIcon={<ExpandMore />}>
        <Box sx={{ alignItems: 'center', display: 'flex' }}>
          {React.cloneElement(icon, { color: 'primary', sx: { mr: 2 } })}
          <Typography color="primary" variant="h5">
            {title}
          </Typography>
        </Box>
      </AccordionSummary>
      <AccordionDetails>
        {children}
      </AccordionDetails>
    </MotionAccordion>
  );
};

export default AnimatedAccordion;