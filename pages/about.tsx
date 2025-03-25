import React from 'react';
import Layout from '@/src/shared/components/Layout';
import { 
  Container, 
  Typography, 
  Box, 
  Grid, 
  Divider,
  Avatar,
  Paper,
  useTheme,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Fade
} from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import { profileService } from '@/src/shared/services/profile.service';
import { motion } from 'framer-motion';

const MotionPaper = motion(Paper);

export default function About() {
  const profile = profileService.getProfile();
  const theme = useTheme();
  const [expanded, setExpanded] = React.useState<string | false>('story');

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };
  
  return (
    <Layout>
      <Container maxWidth="lg">
        <Box sx={{ my: 4 }}>
          <Typography variant="h3" component="h1" gutterBottom textAlign="center">
            About Me
          </Typography>
          <Divider sx={{ mb: 6 }} />
          
          <Grid container spacing={6}>
            {/* Personal Info Section */}
            <Grid item xs={12} md={4}>
              <MotionPaper
                elevation={0}
                sx={{ 
                  p: 4, 
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'center',
                  borderRadius: 2,
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: theme.shadows[4]
                  }
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Avatar
                  src="/avatar.jpg"
                  alt={profile.name}
                  sx={{ 
                    width: 200, 
                    height: 200, 
                    mb: 3,
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'scale(1.05)'
                    }
                  }}
                />
                <Typography variant="h5" gutterBottom>
                  {profile.name}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                  {profile.title}
                </Typography>
                <Typography variant="body2" textAlign="center" sx={{ mt: 2 }}>
                  {profile.bio}
                </Typography>
              </MotionPaper>
            </Grid>
            
            {/* Main Content Section */}
            <Grid item xs={12} md={8}>
              {/* My Story Section */}
              <Accordion 
                expanded={expanded === 'story'} 
                onChange={handleChange('story')}
                sx={{ 
                  mb: 2,
                  borderRadius: '8px !important',
                  '&:before': { display: 'none' },
                  transition: 'all 0.3s ease-in-out',
                  '&:not([aria-expanded="true"]):hover': {
                    bgcolor: 'background.paper',
                    transform: 'translateX(8px)'
                  }
                }}
              >
                <AccordionSummary expandIcon={<ExpandMore />}>
                  <Typography variant="h5" color="primary">My Story</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body1" paragraph>
                    Born and raised in Taiwan, I grew up with a deep appreciation for technology and innovation. 
                    My journey in computer science began during my high school years, where I discovered my passion for programming and problem-solving.
                  </Typography>
                  <Typography variant="body1" paragraph>
                    Currently, I'm based in Japan, where I've been embracing new challenges and opportunities in the tech industry. 
                    This international experience has not only broadened my professional perspective but also enriched my understanding of different work cultures and approaches to innovation.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              {/* Professional Journey */}
              <Accordion 
                expanded={expanded === 'journey'} 
                onChange={handleChange('journey')}
                sx={{ 
                  mb: 2,
                  borderRadius: '8px !important',
                  '&:before': { display: 'none' },
                  transition: 'all 0.3s ease-in-out',
                  '&:not([aria-expanded="true"]):hover': {
                    bgcolor: 'background.paper',
                    transform: 'translateX(8px)'
                  }
                }}
              >
                <AccordionSummary expandIcon={<ExpandMore />}>
                  <Typography variant="h5" color="primary">Professional Journey</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  {profile.experience.map((exp, index) => (
                    <Fade in key={index} timeout={500 + index * 200}>
                      <Box sx={{ mb: 3 }}>
                        <Typography variant="h6">
                          {exp.position}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                          {exp.company} | {exp.period}
                        </Typography>
                        <Typography variant="body2">
                          {exp.description}
                        </Typography>
                        {index < profile.experience.length - 1 && <Divider sx={{ my: 2 }} />}
                      </Box>
                    </Fade>
                  ))}
                </AccordionDetails>
              </Accordion>

              {/* Education & Research */}
              <Accordion 
                expanded={expanded === 'education'} 
                onChange={handleChange('education')}
                sx={{ 
                  mb: 2,
                  borderRadius: '8px !important',
                  '&:before': { display: 'none' },
                  transition: 'all 0.3s ease-in-out',
                  '&:not([aria-expanded="true"]):hover': {
                    bgcolor: 'background.paper',
                    transform: 'translateX(8px)'
                  }
                }}
              >
                <AccordionSummary expandIcon={<ExpandMore />}>
                  <Typography variant="h5" color="primary">Education & Research</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  {profile.education.map((edu, index) => (
                    <Fade in key={index} timeout={500 + index * 200}>
                      <Box sx={{ mb: 3 }}>
                        <Typography variant="h6">
                          {edu.degree}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                          {edu.institution} | {edu.period}
                        </Typography>
                      </Box>
                    </Fade>
                  ))}
                  <Divider sx={{ my: 3 }} />
                  <Typography variant="h6" gutterBottom>
                    Research Publications
                  </Typography>
                  {profile.awards.map((award, index) => (
                    <Fade in key={index} timeout={500 + index * 200}>
                      <Box sx={{ mb: 2 }}>
                        <Typography variant="subtitle1" color="primary">
                          {award.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {award.paperName}
                        </Typography>
                      </Box>
                    </Fade>
                  ))}
                </AccordionDetails>
              </Accordion>

              {/* Personal Interests */}
              <Accordion 
                expanded={expanded === 'interests'} 
                onChange={handleChange('interests')}
                sx={{ 
                  borderRadius: '8px !important',
                  '&:before': { display: 'none' },
                  transition: 'all 0.3s ease-in-out',
                  '&:not([aria-expanded="true"]):hover': {
                    bgcolor: 'background.paper',
                    transform: 'translateX(8px)'
                  }
                }}
              >
                <AccordionSummary expandIcon={<ExpandMore />}>
                  <Typography variant="h5" color="primary">Beyond the Code</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body1" paragraph>
                    When I'm not immersed in code, I enjoy exploring the unique blend of traditional and modern culture that Japan offers. 
                    Living here has given me the opportunity to experience everything from local festivals to cutting-edge technology exhibitions.
                  </Typography>
                  <Typography variant="body1">
                    I'm also passionate about bridging the gap between different tech communities and often participate in both Taiwanese and Japanese tech meetups, 
                    sharing knowledge and experiences across cultures.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Layout>
  );
} 