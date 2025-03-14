import React, { useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  IconButton, 
  Box, 
  Drawer, 
  List, 
  ListItem, 
  ListItemText, 
  useMediaQuery, 
  useTheme 
} from '@mui/material';
import { Menu as MenuIcon, Brightness4, Brightness7, GitHub, LinkedIn } from '@mui/icons-material';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface NavLink {
  label: string;
  path: string;
}

const navLinks: NavLink[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Projects', path: '/projects' },
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
      <Typography variant="h6" sx={{ my: 2 }}>
        <span style={{ color: theme.palette.primary.main }}>Dev</span>Portfolio
      </Typography>
      <List>
        {navLinks.map((link) => (
          <ListItem 
            key={link.label} 
            component={Link} 
            href={link.path}
            sx={{ 
              color: router.pathname === link.path ? theme.palette.primary.main : 'inherit',
              textAlign: 'center',
              justifyContent: 'center',
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
      <AppBar position="fixed" color="default" elevation={1} sx={{ backdropFilter: 'blur(20px)' }}>
        <Toolbar>
          <Typography
            variant="h6"
            component={Link}
            href="/"
            sx={{
              flexGrow: 1,
              fontWeight: 'bold',
              color: 'text.primary',
              textDecoration: 'none'
            }}
          >
            <span style={{ color: theme.palette.primary.main }}>Dev</span>Portfolio
          </Typography>

          {/* Desktop Navigation */}
          {!isMobile && (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              {navLinks.map((link) => (
                <Button
                  key={link.label}
                  component={Link}
                  href={link.path}
                  color={router.pathname === link.path ? 'primary' : 'inherit'}
                  sx={{ mx: 1 }}
                >
                  {link.label}
                </Button>
              ))}
            </Box>
          )}

          {/* Social Links & Theme Toggle */}
          <Box sx={{ display: 'flex', alignItems: 'center', ml: 2 }}>
            <IconButton
              color="inherit"
              aria-label="toggle theme"
              edge="end"
              onClick={toggleDarkMode}
              sx={{ mr: 1 }}
            >
              {darkMode ? <Brightness7 /> : <Brightness4 />}
            </IconButton>
            <IconButton
              color="inherit"
              aria-label="github profile"
              edge="end"
              component="a"
              href="https://github.com/tsehsuan1102"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ mr: 1 }}
            >
              <GitHub />
            </IconButton>
            <IconButton
              color="inherit"
              aria-label="linkedin profile"
              edge="end"
              component="a"
              href="https://www.linkedin.com/in/tse-hsuan-yang/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedIn />
            </IconButton>

            {/* Mobile Menu Button */}
            {isMobile && (
              <IconButton
                color="inherit"
                aria-label="open drawer"
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
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
          }}
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