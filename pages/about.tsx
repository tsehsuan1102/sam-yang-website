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
  Avatar,
  List,
  ListItem,
  ListItemText
} from '@mui/material';
import { profileService } from '@/src/shared/services/profile.service';

export default function About() {
  const profile = profileService.getProfile();
  
  return (
    <Layout>
      <Container maxWidth="lg">
        <Box sx={{ my: 4 }}>
          <Typography variant="h3" component="h1" gutterBottom textAlign="center">
            About Me
          </Typography>
          <Divider sx={{ mb: 6 }} />
          
          <Grid container spacing={6}>
            {/* 左侧个人信息 */}
            <Grid item xs={12} md={4}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Avatar
                  src="/avatar.jpg"
                  alt={profile.name}
                  sx={{ width: 200, height: 200, mb: 3 }}
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
              </Box>
            </Grid>
            
            {/* 右侧经验和教育 */}
            <Grid item xs={12} md={8}>
              <Typography variant="h5" sx={{ mb: 3 }}>
                Work Experience
              </Typography>
              {profile.experience.map((exp, index) => (
                <Card key={index} sx={{ mb: 3 }}>
                  <CardContent>
                    <Typography variant="h6">
                      {exp.position}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                      {exp.company} | {exp.period}
                    </Typography>
                    <Typography variant="body2">
                      {exp.description}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
              
              <Typography variant="h5" sx={{ mt: 6, mb: 3 }}>
                Education
              </Typography>
              {profile.education.map((edu, index) => (
                <Card key={index} sx={{ mb: 3 }}>
                  <CardContent>
                    <Typography variant="h6">
                      {edu.degree}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                      {edu.institution} | {edu.period}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Layout>
  );
} 