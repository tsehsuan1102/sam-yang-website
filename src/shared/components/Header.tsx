import { Brightness4, Brightness7, GitHub, LinkedIn, Menu as MenuIcon } from '@mui/icons-material';
import { 
  AppBar, 
  Box, 
  Button, 
  Drawer, 
  IconButton, 
  List, 
  ListItem, 
  ListItemText, 
  Toolbar, 
  Typography, 
  useMediaQuery, 
  useTheme 
} from '@mui/material';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';

const MotionAppBar = motion(AppBar);
const MotionBox = motion(Box);
const MotionIconButton = motion(IconButton);

interface NavLink {
  label: string;
  path: string;
}

const navLinks: NavLink[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Experience', path: '/experience' },
  // { label: 'Projects', path: '/projects' },
  { label: 'Contact', path: '/contact' }
];

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography sx={{ my: 2 }} variant="h6">
        <span style={{ color: theme.palette.primary.main }}>Dev</span>Portfolio
      </Typography>
      <List>
        {navLinks.map((link) => (
          <ListItem 
            component={Link} 
            href={link.path} 
            key={link.label}
            sx={{ 
              color: router.pathname === link.path ? theme.palette.primary.main : 'inherit',
              justifyContent: 'center',
              textAlign: 'center',
              textDecoration: 'none'
            }}
          >
            <ListItemText primary={link.label} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <MotionAppBar 
        animate={{
          backgroundColor: scrolled 
            ? (darkMode 
                ? 'rgba(18, 18, 18, 0.9)' 
                : 'rgba(255, 255, 255, 0.9)')
            : (darkMode 
                ? 'rgba(18, 18, 18, 0.95)' 
                : 'rgba(255, 255, 255, 0.95)'),
          boxShadow: scrolled 
            ? `0 8px 32px ${darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}` 
            : `0 2px 12px ${darkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)'}`,
        }}
        color="default" 
        initial={false}
        position="fixed" 
        sx={{ 
          backdropFilter: 'blur(20px)',
          borderBottom: `1px solid ${theme.palette.divider}`,
          WebkitBackdropFilter: 'blur(20px)',
          color: theme.palette.text.primary,
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <Toolbar>
          <MotionBox
            animate={{
              scale: scrolled ? 0.95 : 1,
            }}
            sx={{
              flexGrow: 1,
            }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Typography
              component={Link}
              href="/"
              sx={{
                background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 'bold',
                fontSize: '1.5rem',
                letterSpacing: '-0.02em',
                textDecoration: 'none'
              }}
              variant="h6"
            >
              Sam.Yang
            </Typography>
          </MotionBox>

          {/* Desktop Navigation */}
          {!isMobile && (
            <MotionBox 
              animate={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -10 }}
              sx={{ alignItems: 'center', display: 'flex' }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              {navLinks.map((link, index) => {
                const isActive = router.pathname === link.path;
                return (
                  <MotionBox
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.3 }}
                    key={link.label}
                    whileHover={{ 
                      scale: 1.05,
                      y: -2 
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      component={Link}
                      href={link.path}
                      sx={{ 
                        mx: 1,
                        position: 'relative',
                        overflow: 'hidden',
                        color: isActive ? theme.palette.primary.main : 'text.primary',
                        fontWeight: isActive ? 600 : 400,
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          bottom: 0,
                          left: '50%',
                          width: isActive ? '100%' : '0%',
                          height: '2px',
                          background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                          transform: 'translateX(-50%)',
                          transition: 'width 0.3s ease-in-out'
                        },
                        '&:hover::before': {
                          width: '100%'
                        }
                      }}
                    >
                      {link.label}
                    </Button>
                  </MotionBox>
                );
              })}
            </MotionBox>
          )}

          {/* Social Links & Theme Toggle */}
          <MotionBox 
            animate={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 20 }}
            sx={{ alignItems: 'center', display: 'flex', ml: 2 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <MotionIconButton
              color="inherit"
              aria-label="toggle theme"
              edge="end"
              onClick={toggleDarkMode}
              sx={{ 
                mr: 1,
                background: `linear-gradient(45deg, ${theme.palette.primary.main}20, ${theme.palette.secondary.main}20)`,
                backdropFilter: 'blur(10px)',
                '&:hover': {
                  background: `linear-gradient(45deg, ${theme.palette.primary.main}40, ${theme.palette.secondary.main}40)`,
                }
              }}
              whileHover={{ 
                scale: 1.1,
                rotate: 180 
              }}
              whileTap={{ scale: 0.9 }}
            >
              {darkMode ? <Brightness7 /> : <Brightness4 />}
            </MotionIconButton>
            <MotionBox
              whileHover={{ 
                scale: 1.1,
                y: -2 
              }}
              whileTap={{ scale: 0.9 }}
            >
              <IconButton
                aria-label="github profile"
                color="inherit"
                component="a"
                edge="end"
                href="https://github.com/tsehsuan1102"
                rel="noopener noreferrer"
                sx={{ 
                  mr: 1,
                  background: `linear-gradient(45deg, ${theme.palette.primary.main}10, ${theme.palette.secondary.main}10)`,
                  backdropFilter: 'blur(10px)',
                  '&:hover': {
                    background: `linear-gradient(45deg, ${theme.palette.primary.main}30, ${theme.palette.secondary.main}30)`,
                  }
                }}
                target="_blank"
              >
                <GitHub />
              </IconButton>
            </MotionBox>
            <MotionBox
              whileHover={{ 
                scale: 1.1,
                y: -2 
              }}
              whileTap={{ scale: 0.9 }}
            >
              <IconButton
                aria-label="linkedin profile"
                color="inherit"
                component="a"
                edge="end"
                href="https://www.linkedin.com/in/tse-hsuan-yang/"
                rel="noopener noreferrer"
                sx={{
                  background: `linear-gradient(45deg, ${theme.palette.primary.main}10, ${theme.palette.secondary.main}10)`,
                  backdropFilter: 'blur(10px)',
                  '&:hover': {
                    background: `linear-gradient(45deg, ${theme.palette.primary.main}30, ${theme.palette.secondary.main}30)`,
                  }
                }}
                target="_blank"
              >
                <LinkedIn />
              </IconButton>
            </MotionBox>

            {/* Mobile Menu Button */}
            {isMobile && (
              <MotionBox
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <IconButton
                  aria-label="open drawer"
                  color="inherit"
                  edge="end"
                  onClick={handleDrawerToggle}
                  sx={{ 
                    ml: 1,
                    background: `linear-gradient(45deg, ${theme.palette.primary.main}20, ${theme.palette.secondary.main}20)`,
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  <MenuIcon />
                </IconButton>
              </MotionBox>
            )}
          </MotionBox>
        </Toolbar>
      </MotionAppBar>

      {/* Mobile Navigation Drawer */}
      <Box component="nav">
        <Drawer
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          onClose={handleDrawerToggle}
          open={mobileOpen}
          sx={{
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
            display: { md: 'none', xs: 'block' },
          }}
          variant="temporary"
        >
          {drawer}
        </Drawer>
      </Box>
      
      {/* Toolbar placeholder to prevent content from hiding behind the AppBar */}
      <Toolbar />
    </Box>
  );
};

export default Header; 