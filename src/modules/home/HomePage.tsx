import React from 'react';
import { 
  Container, 
  Typography, 
  Grid, 
  Box, 
  Button, 
  Card, 
  CardContent, 
  CardMedia, 
  Chip, 
  Stack,
  Avatar,
  Divider,
  useTheme
} from '@mui/material';
import { ArrowForward, GitHub, Language } from '@mui/icons-material';
import Link from 'next/link';
import { profileService } from '../../shared/services/profile.service';
import { projectsService } from '../../shared/services/projects.service';

// 控制是否顯示專案相關功能
const SHOW_FULL_PROJECTS = false;

const HomePage: React.FC = () => {
  const profile = profileService.getProfile();
  const featuredProjects = projectsService.getFeaturedProjects();
  const theme = useTheme();

  return (
    <Container>
      {/* Hero Section */}
      <Box sx={{ 
        height: { xs: 'auto', md: '70vh' }, 
        display: 'flex', 
        alignItems: 'center',
        mb: 8 
      }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box sx={{ mb: 4 }}>
              <Typography variant="overline" color="primary">
                Hello, my name is
              </Typography>
              <Typography variant="h2" component="h1" fontWeight="bold" gutterBottom>
                {profile.name}
              </Typography>
              <Typography variant="h4" color="text.secondary" gutterBottom>
                {profile.title}
              </Typography>
              <Typography variant="body1" paragraph sx={{ mt: 2, mb: 4 }}>
                {profile.bio}
              </Typography>
              <Stack direction="row" spacing={2}>
                {SHOW_FULL_PROJECTS && (
                  <Button 
                    variant="contained" 
                    size="large" 
                    component={Link} 
                    href="/projects" 
                    endIcon={<ArrowForward />}
                  >
                    View Projects
                  </Button>
                )}
                <Button 
                  variant="outlined" 
                  size="large" 
                  component={Link} 
                  href="/contact"
                >
                  Contact Me
                </Button>
              </Stack>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
              }}
            >
              <Avatar
                sx={{
                  width: { xs: 200, md: 300 },
                  height: { xs: 200, md: 300 },
                  border: `4px solid ${theme.palette.primary.main}`,
                }}
                alt={profile.name}
                src="/avatar.jpg"
              />
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Skills Section */}
      <Box sx={{ my: 8 }}>
        <Typography variant="h4" component="h2" gutterBottom textAlign="center">
          My Skills
        </Typography>
        <Divider sx={{ mb: 4 }} />
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: 'center', my: 4 }}>
          {profile.skills.map((skill) => (
            <Chip 
              key={skill} 
              label={skill} 
              color="primary" 
              variant="outlined" 
              sx={{ m: 0.5 }} 
            />
          ))}
        </Box>
      </Box>

      {/* Featured Projects */}
      {SHOW_FULL_PROJECTS && (
        <Box sx={{ my: 8 }}>
          <Typography variant="h4" component="h2" gutterBottom textAlign="center">
            Featured Projects
          </Typography>
          <Divider sx={{ mb: 4 }} />
          <Grid container spacing={4}>
            {featuredProjects.map((project) => (
              <Grid item key={project.id} xs={12} sm={6}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={project.imageUrl || '/project-placeholder.jpg'}
                    alt={project.title}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h5" component="h3" gutterBottom>
                      {project.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" paragraph>
                      {project.description}
                    </Typography>
                    <Box sx={{ mb: 2 }}>
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Chip
                          key={tech}
                          label={tech}
                          size="small"
                          sx={{ mr: 0.5, mb: 0.5 }}
                        />
                      ))}
                      {project.technologies.length > 3 && (
                        <Chip
                          label={`+${project.technologies.length - 3}`}
                          size="small"
                          sx={{ mr: 0.5, mb: 0.5 }}
                        />
                      )}
                    </Box>
                    <Stack direction="row" spacing={1}>
                      {project.githubUrl && (
                        <Button
                          size="small"
                          startIcon={<GitHub />}
                          component="a"
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Code
                        </Button>
                      )}
                      {project.liveUrl && (
                        <Button
                          size="small"
                          startIcon={<Language />}
                          component="a"
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Demo
                        </Button>
                      )}
                      <Button 
                        size="small" 
                        component={Link} 
                        href={`/projects/${project.id}`}
                      >
                        Details
                      </Button>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Box sx={{ textAlign: 'center', mt: 4 }}>
            <Button
              variant="outlined"
              endIcon={<ArrowForward />}
              component={Link}
              href="/projects"
              size="large"
            >
              View All Projects
            </Button>
          </Box>
        </Box>
      )}
    </Container>
  );
};

export default HomePage; 