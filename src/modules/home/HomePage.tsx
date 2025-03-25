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
  useTheme,
  Paper
} from '@mui/material';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { ArrowForward, GitHub, Language, School, Work, Code, Article } from '@mui/icons-material';
import Link from 'next/link';
import { profileService } from '../../shared/services/profile.service';
import { projectsService } from '../../shared/services/projects.service';
import { motion } from 'framer-motion';

// 控制是否顯示專案相關功能
const SHOW_FULL_PROJECTS = false;

const MotionBox = motion(Box);

const HomePage: React.FC = () => {
  const profile = profileService.getProfile();
  const featuredProjects = projectsService.getFeaturedProjects();
  const theme = useTheme();

  const achievements = [
    {
      title: "EMNLP Conference Presentation",
      description: "Presented research findings at EMNLP Conference in Dominican Republic",
      icon: <Article />,
      year: "2021"
    },
    {
      title: "Natural Language Processing Research",
      description: "Published three papers during undergraduate studies",
      icon: <School />,
      year: "2020-2021"
    },
    {
      title: "International Career Move",
      description: "Relocated to Tokyo, Japan to join BeyondBrain",
      icon: <Work />,
      year: "2024"
    }
  ];

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
            <MotionBox
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Typography variant="overline" color="primary">
                Hello, I'm
              </Typography>
              <Typography variant="h2" component="h1" fontWeight="bold" gutterBottom>
                {profile.name}
              </Typography>
              <Typography variant="h4" color="text.secondary" gutterBottom>
                {profile.title}
              </Typography>
              <Typography variant="body1" paragraph sx={{ mt: 2, mb: 4 }}>
                A passionate software engineer from Taiwan, now based in Tokyo. 
                My journey began with Scratch in middle school, evolved through algorithm competitions, 
                and led to research in Natural Language Processing. Today, I'm building the future of 
                technology while embracing Japanese culture and innovation.
              </Typography>
              <Stack direction="row" spacing={2}>
                <Button 
                  variant="contained" 
                  size="large" 
                  component={Link} 
                  href="/experience" 
                  endIcon={<ArrowForward />}
                >
                  View Experience
                </Button>
                <Button 
                  variant="outlined" 
                  size="large" 
                  component={Link} 
                  href="/about"
                >
                  About Me
                </Button>
              </Stack>
            </MotionBox>
          </Grid>
          <Grid item xs={12} md={6}>
            <MotionBox
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
              }}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
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
            </MotionBox>
          </Grid>
        </Grid>
      </Box>

      {/* Key Achievements Section */}
      <Box sx={{ my: 8 }}>
        <Typography variant="h4" component="h2" gutterBottom textAlign="center">
          Key Achievements
        </Typography>
        <Divider sx={{ mb: 4 }} />
        <Timeline position="alternate">
          {achievements.map((achievement, index) => (
            <TimelineItem key={index}>
              <TimelineSeparator>
                <TimelineDot color="primary">
                  {achievement.icon}
                </TimelineDot>
                {index < achievements.length - 1 && <TimelineConnector />}
              </TimelineSeparator>
              <TimelineContent>
                <Card 
                  component={motion.div}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  sx={{ 
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      transition: 'transform 0.3s ease-in-out'
                    }
                  }}
                >
                  <CardContent>
                    <Typography variant="h6" component="h3">
                      {achievement.title}
                    </Typography>
                    <Typography variant="caption" color="text.secondary" display="block" gutterBottom>
                      {achievement.year}
                    </Typography>
                    <Typography variant="body2">
                      {achievement.description}
                    </Typography>
                  </CardContent>
                </Card>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Box>

      {/* Skills Section */}
      <Box sx={{ my: 8 }}>
        <Typography variant="h4" component="h2" gutterBottom textAlign="center">
          Technical Expertise
        </Typography>
        <Divider sx={{ mb: 4 }} />
        <Box sx={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: 1, 
          justifyContent: 'center', 
          my: 4 
        }}>
          {profile.skills.map((skill, index) => (
            <Chip 
              key={skill} 
              label={skill} 
              color="primary" 
              variant="outlined" 
              sx={{ 
                m: 0.5,
                '&:hover': {
                  transform: 'translateY(-4px)',
                  transition: 'transform 0.2s ease-in-out'
                }
              }} 
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