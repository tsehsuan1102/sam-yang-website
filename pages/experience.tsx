import Layout from '@/src/shared/components/Layout';
import { profileService } from '@/src/shared/services/profile.service';
import { Article, School, Work } from '@mui/icons-material';
import { 
  Box, 
  Card, 
  CardContent, 
  Chip, 
  Container,
  Divider,
  Grid,
  Link as MuiLink,
  Paper,
  Stack,
  Typography
} from '@mui/material';
import { motion } from 'framer-motion';
import Head from 'next/head';
import React from 'react';

const MotionPaper = motion(Paper);

export default function Experience() {
  const profile = profileService.getProfile();
  
  return (
    
    <Layout>
    <Head>
      <title>Sam Yang | Experience</title>
      <meta content="Professional journey and achievements of Sam Yang - AI and full-stack development experience in Japan and Taiwan." name="description" />
    </Head>
      <Container maxWidth="lg">
        <Box sx={{ my: 4 }}>
          <Typography component="h1" gutterBottom textAlign="center" variant="h3">
            Experience & Research
          </Typography>
          <Typography color="text.secondary" paragraph textAlign="center" variant="subtitle1">
            My professional journey in software development and research
          </Typography>
          <Divider sx={{ my: 4 }} />
          
          <Grid container spacing={4}>
            {/* Work Experience Section */}
            <Grid item md={6} xs={12}>
              <MotionPaper
                animate={{ opacity: 1, y: 0 }}
                elevation={0}
                initial={{ opacity: 0, y: 20 }}
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
                transition={{ duration: 0.5 }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <Work color="primary" sx={{ mr: 2 }} />
                  <Typography variant="h5">Work Experience</Typography>
                </Box>
                {profile.experience.map((exp, index) => (
                  <Box key={index} sx={{ mb: 4 }}>
                    <Typography gutterBottom variant="h6">
                      {exp.position}
                    </Typography>
                    <Typography color="text.secondary" gutterBottom variant="subtitle1">
                      {exp.company} | {exp.period}
                    </Typography>
                    <Typography paragraph variant="body2">
                      {exp.description}
                    </Typography>
                    {index < profile.experience.length - 1 && <Divider sx={{ my: 2 }} />}
                  </Box>
                ))}
              </MotionPaper>
            </Grid>

            {/* Research & Publications Section */}
            <Grid item md={6} xs={12}>
              <MotionPaper
                animate={{ opacity: 1, y: 0 }}
                elevation={0}
                initial={{ opacity: 0, y: 20 }}
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
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <Article color="primary" sx={{ mr: 2 }} />
                  <Typography variant="h5">Research & Publications</Typography>
                </Box>
                <Box sx={{ mb: 4 }}>
                  <Typography gutterBottom variant="h6">
                    Natural Language Processing Research
                  </Typography>
                  <Typography paragraph variant="body2">
                    During my time at National Taiwan University, I focused on Natural Language Processing research,
                    contributing to multiple publications and presenting at international conferences.
                  </Typography>
                </Box>
                {profile.awards.map((award, index) => (
                  <Box key={index} sx={{ mb: 3 }}>
                    <Typography color="primary" gutterBottom variant="subtitle1">
                      {award.name}
                    </Typography>
                    <Typography color="text.secondary" variant="body2">
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
                animate={{ opacity: 1, y: 0 }}
                elevation={0}
                initial={{ opacity: 0, y: 20 }}
                sx={{ 
                  p: 3,
                  borderRadius: 2,
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: 3
                  }
                }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <School color="primary" sx={{ mr: 2 }} />
                  <Typography variant="h5">Education</Typography>
                </Box>
                {profile.education.map((edu, index) => (
                  <Box key={index} sx={{ mb: 3 }}>
                    <Typography gutterBottom variant="h6">
                      {edu.degree}
                    </Typography>
                    <Typography color="text.secondary" variant="subtitle1">
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