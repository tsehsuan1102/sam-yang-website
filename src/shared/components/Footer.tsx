import { Email, GitHub, LinkedIn } from '@mui/icons-material';
import { Box, Container, Divider, Grid, IconButton, Link as MuiLink, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';

import { profileService } from '../services/profile.service';

const Footer: React.FC = () => {
  const contact = profileService.getContact();
  const currentYear = new Date().getFullYear();

  return (
    <Box component="footer" sx={{ bgcolor: 'background.paper', mt: 'auto', py: 6 }}>
      <Container maxWidth="lg">
        <Grid container justifyContent="space-between" spacing={4}>
          <Grid item sm={4} xs={12}>
            <Typography gutterBottom variant="h6">
              <span style={{ color: '#3f51b5' }}>Dev</span>Portfolio
            </Typography>
            <Typography color="text.secondary" variant="body2">
              A personal portfolio showcasing my projects and skills.
            </Typography>
          </Grid>
          
          <Grid item sm={4} xs={12}>
            <Typography gutterBottom variant="h6">
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
                    color="text.secondary" 
                    component={Link} 
                    href={link.path} 
                    underline="hover" 
                    variant="body2"
                  >
                    {link.name}
                  </MuiLink>
                </Box>
              ))}
            </Box>
          </Grid>
          
          <Grid item sm={4} xs={12}>
            <Typography gutterBottom variant="h6">
              Connect
            </Typography>
            <Box sx={{ mb: 2 }}>
              <Typography color="text.secondary" variant="body2">
                {contact.email}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', gap: 1 }}>
              {contact.github && (
                <IconButton
                  aria-label="GitHub"
                  component="a"
                  href={contact.github}
                  rel="noopener noreferrer"
                  size="small"
                  target="_blank"
                >
                  <GitHub fontSize="small" />
                </IconButton>
              )}
              {contact.linkedin && (
                <IconButton
                  aria-label="LinkedIn"
                  component="a"
                  href={contact.linkedin}
                  rel="noopener noreferrer"
                  size="small"
                  target="_blank"
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
        
        <Typography align="center" color="text.secondary" variant="body2">
          © {currentYear} Tse-Hsuan Yang. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer; 