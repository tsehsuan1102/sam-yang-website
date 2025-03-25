import React from 'react';
import Layout from '@/src/shared/components/Layout';
import { 
  Container, 
  Typography, 
  Box, 
  Grid, 
  Card,
  CardContent,
  Divider,
  Chip,
  Stack,
  Link as MuiLink,
  Paper
} from '@mui/material';
import { School, Work, Article } from '@mui/icons-material';
import { profileService } from '@/src/shared/services/profile.service';
import { motion } from 'framer-motion';
import Head from 'next/head';

const MotionPaper = motion(Paper);

export default function Experience() {
  const profile = profileService.getProfile();
  
  return (
    
    <Layout>
    <Head>
      <title>Sam Yang | Experience</title>
      <meta name="description" content="Professional journey and achievements of Sam Yang - AI and full-stack development experience in Japan and Taiwan." />
    </Head>
      <Container maxWidth="lg">
        <Box sx={{ my: 4 }}>
          <Typography variant="h3" component="h1" gutterBottom textAlign="center">
            Experience & Research
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" paragraph textAlign="center">
            My professional journey in software development and research
          </Typography>
          <Divider sx={{ my: 4 }} />
          
          <Grid container spacing={4}>
            {/* Work Experience Section */}
            <Grid item xs={12} md={6}>
              <MotionPaper
                elevation={0}
                sx={{ 
                  p: 3,
                  height: '100%',
                  borderRadius: 2,
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: 3
                  }
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <Work color="primary" sx={{ mr: 2 }} />
                  <Typography variant="h5">Work Experience</Typography>
                </Box>
                {profile.experience.map((exp, index) => (
                  <Box key={index} sx={{ mb: 4 }}>
                    <Typography variant="h6" gutterBottom>
                      {exp.position}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                      {exp.company} | {exp.period}
                    </Typography>
                    <Typography variant="body2" paragraph>
                      {exp.description}
                    </Typography>
                    {index < profile.experience.length - 1 && <Divider sx={{ my: 2 }} />}
                  </Box>
                ))}
              </MotionPaper>
            </Grid>

            {/* Research & Publications Section */}
            <Grid item xs={12} md={6}>
              <MotionPaper
                elevation={0}
                sx={{ 
                  p: 3,
                  height: '100%',
                  borderRadius: 2,
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: 3
                  }
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <Article color="primary" sx={{ mr: 2 }} />
                  <Typography variant="h5">Research & Publications</Typography>
                </Box>
                <Box sx={{ mb: 4 }}>
                  <Typography variant="h6" gutterBottom>
                    Natural Language Processing Research
                  </Typography>
                  <Typography variant="body2" paragraph>
                    During my time at National Taiwan University, I focused on Natural Language Processing research,
                    contributing to multiple publications and presenting at international conferences.
                  </Typography>
                </Box>
                {profile.awards.map((award, index) => (
                  <Box key={index} sx={{ mb: 3 }}>
                    <Typography variant="subtitle1" color="primary" gutterBottom>
                      {award.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {award.paperName}
                    </Typography>
                    {index < profile.awards.length - 1 && <Divider sx={{ my: 2 }} />}
                  </Box>
                ))}
              </MotionPaper>
            </Grid>

            {/* Education Section */}
            <Grid item xs={12}>
              <MotionPaper
                elevation={0}
                sx={{ 
                  p: 3,
                  borderRadius: 2,
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: 3
                  }
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <School color="primary" sx={{ mr: 2 }} />
                  <Typography variant="h5">Education</Typography>
                </Box>
                {profile.education.map((edu, index) => (
                  <Box key={index} sx={{ mb: 3 }}>
                    <Typography variant="h6" gutterBottom>
                      {edu.degree}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                      {edu.institution} | {edu.period}
                    </Typography>
                    {index < profile.education.length - 1 && <Divider sx={{ my: 2 }} />}
                  </Box>
                ))}
              </MotionPaper>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Layout>
  );
}