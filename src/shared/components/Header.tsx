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
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const router = useRouter();

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
      <AppBar color="default" elevation={1} position="fixed" sx={{ backdropFilter: 'blur(20px)' }}>
        <Toolbar>
          <Typography
            component={Link}
            href="/"
            sx={{
              color: 'text.primary',
              flexGrow: 1,
              fontWeight: 'bold',
              textDecoration: 'none'
            }}
            variant="h6"
          >
            <span style={{ color: theme.palette.primary.main }}>Sam</span>Yang
          </Typography>

          {/* Desktop Navigation */}
          {!isMobile && (
            <Box sx={{ alignItems: 'center', display: 'flex' }}>
              {navLinks.map((link) => (
                <Button
                  color={router.pathname === link.path ? 'primary' : 'inherit'}
                  component={Link}
                  href={link.path}
                  key={link.label}
                  sx={{ mx: 1 }}
                >
                  {link.label}
                </Button>
              ))}
            </Box>
          )}

          {/* Social Links & Theme Toggle */}
          <Box sx={{ alignItems: 'center', display: 'flex', ml: 2 }}>
            {/* <IconButton
              color="inherit"
              aria-label="toggle theme"
              edge="end"
              onClick={toggleDarkMode}
              sx={{ mr: 1 }}
            >
              {darkMode ? <Brightness7 /> : <Brightness4 />}
            </IconButton> */}
            <IconButton
              aria-label="github profile"
              color="inherit"
              component="a"
              edge="end"
              href="https://github.com/tsehsuan1102"
              rel="noopener noreferrer"
              sx={{ mr: 1 }}
              target="_blank"
            >
              <GitHub />
            </IconButton>
            <IconButton
              aria-label="linkedin profile"
              color="inherit"
              component="a"
              edge="end"
              href="https://www.linkedin.com/in/tse-hsuan-yang/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <LinkedIn />
            </IconButton>

            {/* Mobile Menu Button */}
            {isMobile && (
              <IconButton
                aria-label="open drawer"
                color="inherit"
                edge="end"
                onClick={handleDrawerToggle}
                sx={{ ml: 1 }}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Box>
        </Toolbar>
      </AppBar>

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