import React from 'react';
import Head from 'next/head';
import Layout from '@/src/shared/components/Layout';
import { 
  Container, 
  Typography, 
  Box, 
  Grid, 
  Card,
  CardContent,
  Divider,
} from '@mui/material';
import { Email, LocationOn, Phone } from '@mui/icons-material';
import { profileService } from '@/src/shared/services/profile.service';

export default function Contact() {
  const profile = profileService.getProfile();
  
  return (
    <Layout>
      <Head>
        <title>Sam Yang | Contact</title>
        <meta name="description" content="Contact information for Sam Yang, a software engineer based in Tokyo with a passion for technology and cross-cultural experiences." />
      </Head>
      <Container maxWidth="lg">
        <Box sx={{ my: 4 }}>
          <Typography variant="h3" component="h1" gutterBottom textAlign="center">
            Contact Me
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" paragraph textAlign="center">
            Feel free to reach out to me for collaborations or inquiries
          </Typography>
          <Divider sx={{ my: 4 }} />
          
          <Grid container spacing={6} justifyContent="center">
            {/* 联系方式 */}
            <Grid item xs={12} md={6}>
              <Card>
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    Contact Information
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    Here's how you can reach me
                  </Typography>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, mt: 3 }}>
                    <Email color="primary" sx={{ mr: 2 }} />
                    <Typography variant="body1">
                      {profile.contact.email}
                    </Typography>
                  </Box>
                  
                  {profile.contact.linkedin && (
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Box 
                        component="img" 
                        src="/linkedin-icon.png" 
                        alt="LinkedIn" 
                        sx={{ width: 24, height: 24, mr: 2 }} 
                      />
                      <Typography variant="body1">
                        <Box 
                          component="a" 
                          href={profile.contact.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{ color: 'text.primary', textDecoration: 'none' }}
                        >
                          LinkedIn Profile
                        </Box>
                      </Typography>
                    </Box>
                  )}
                  
                  {profile.contact.github && (
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Box 
                        component="img" 
                        src="/github-icon.png" 
                        alt="GitHub" 
                        sx={{ width: 24, height: 24, mr: 2 }} 
                      />
                      <Typography variant="body1">
                        <Box 
                          component="a" 
                          href={profile.contact.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{ color: 'text.primary', textDecoration: 'none' }}
                        >
                          GitHub Profile
                        </Box>
                      </Typography>
                    </Box>
                  )}
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Layout>
  );
} 