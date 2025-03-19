import React from 'react';
import { Box, Container, Typography, Grid, Link as MuiLink, IconButton, Divider } from '@mui/material';
import { GitHub, LinkedIn, Email } from '@mui/icons-material';
import Link from 'next/link';
import { profileService } from '../services/profile.service';

const Footer: React.FC = () => {
  const contact = profileService.getContact();
  const currentYear = new Date().getFullYear();

  return (
    <Box component="footer" sx={{ bgcolor: 'background.paper', py: 6, mt: 'auto' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="space-between">
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              <span style={{ color: '#3f51b5' }}>Dev</span>Portfolio
            </Typography>
            <Typography variant="body2" color="text.secondary">
              A personal portfolio showcasing my projects and skills.
            </Typography>
          </Grid>
          
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Box>
              {[
                { name: 'Home', path: '/' },
                { name: 'About', path: '/about' },
                { name: 'Projects', path: '/projects' },
                { name: 'Contact', path: '/contact' },
              ].map((link) => (
                <Box key={link.name} sx={{ mb: 1 }}>
                  <MuiLink 
                    component={Link} 
                    href={link.path} 
                    underline="hover" 
                    color="text.secondary" 
                    variant="body2"
                  >
                    {link.name}
                  </MuiLink>
                </Box>
              ))}
            </Box>
          </Grid>
          
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Connect
            </Typography>
            <Box sx={{ mb: 2 }}>
              <Typography variant="body2" color="text.secondary">
                {contact.email}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', gap: 1 }}>
              {contact.github && (
                <IconButton
                  aria-label="GitHub"
                  component="a"
                  href={contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="small"
                >
                  <GitHub fontSize="small" />
                </IconButton>
              )}
              {contact.linkedin && (
                <IconButton
                  aria-label="LinkedIn"
                  component="a"
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="small"
                >
                  <LinkedIn fontSize="small" />
                </IconButton>
              )}
              <IconButton
                aria-label="Email"
                component="a"
                href={`mailto:${contact.email}`}
                size="small"
              >
                <Email fontSize="small" />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
        
        <Divider sx={{ my: 3 }} />
        
        <Typography variant="body2" color="text.secondary" align="center">
          © {currentYear} Tse-Hsuan Yang. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer; 