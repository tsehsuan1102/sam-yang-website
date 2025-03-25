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
import { ArrowForward, GitHub, Language, School, Work, Code, Article, ChildCare, Computer, Psychology, CameraAlt, RocketLaunch, Flight, Explore } from '@mui/icons-material';
import Link from 'next/link';
import { profileService } from '../../shared/services/profile.service';
import { projectsService } from '../../shared/services/projects.service';
import { motion } from 'framer-motion';
import { alpha } from '@mui/material/styles';

// 控制是否顯示專案相關功能
const SHOW_FULL_PROJECTS = false;

const MotionBox = motion(Box);

const HomePage: React.FC = () => {
  const profile = profileService.getProfile();
  const featuredProjects = projectsService.getFeaturedProjects();
  const theme = useTheme();

  const achievements = [
    {
      title: "A Star is Born! 👶",
      description: "Began my journey in Taiwan during the autumn of 1998. A curious mind with endless possibilities, ready to make a positive impact on the world.",
      icon: <ChildCare />,
      year: "1998 NOV",
      bgColor: "rgba(25, 118, 210, 0.05)"
    },
    {
      title: "Baby Coder Adventures 🌱",
      description: "Discovered the world of programming through Scratch. What started as a simple game project sparked a lifelong passion for software development.",
      icon: <Computer />,
      year: "2012 SEP",
      bgColor: "rgba(25, 118, 210, 0.05)"
    },
    {
      title: "University Quest: NTU Edition 🎓",
      description: "Immersed in NTU's challenging Computer Science environment, surrounded by brilliant minds. Discovered the vast landscape of CS - from systems to AI. An eye-opening journey into technology's endless possibilities.",
      icon: <School />,
      year: "2017 SEP",
      bgColor: "rgba(25, 118, 210, 0.05)"
    },
    {
      title: "First Tech Adventure ✨",
      description: "Initiated my professional journey through an internship. Each challenge became a stepping stone, shaping my understanding of software architecture and development practices.",
      icon: <Psychology />,
      year: "2020 JUL",
      bgColor: "rgba(25, 118, 210, 0.05)"
    },
    {
      title: "MixerBox Super Mission 🚀",
      description: "Advanced to Full-Stack Development at MixerBox. Transformed technical expertise into tangible user value.",
      icon: <Work />,
      year: "2021 JUN",
      bgColor: "rgba(25, 118, 210, 0.05)"
    },
    {
      title: "AI Adventure Master 🤖",
      description: "Appointed as Head of AI at BeyondBrain. Combining technical leadership with team development, driving innovation in artificial intelligence solutions.",
      icon: <RocketLaunch />,
      year: "2024 MAR",
      bgColor: "rgba(25, 118, 210, 0.05)"
    },
    {
      title: "Tokyo Tales Begin 🗼",
      description: "Embraced a new chapter in Tokyo. Building international connections while contributing to cutting-edge technology development.",
      icon: <Flight />,
      year: "2024 SEP",
      bgColor: "rgba(25, 118, 210, 0.05)"
    },
    {
      title: "The Next Chapter ⭐",
      description: "Excited to explore endless possibilities at the intersection of technology and human experience. From AI innovations to cultural bridges, from startup ecosystems to social impact - ready to embrace new challenges and create meaningful changes across borders.",
      icon: <Explore />,
      year: "Future",
      bgColor: "rgba(25, 118, 210, 0.05)"
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
        <Typography 
          variant="h4" 
          component="h2" 
          gutterBottom 
          textAlign="center"
          sx={{
            color: 'primary.main',
            fontWeight: 'bold'
          }}
        >
          My Journey So Far
        </Typography>
        <Divider sx={{ mb: 4 }} />
        <Timeline 
          position="alternate" 
          sx={{ 
            [`& .MuiTimelineItem-root`]: {
              minHeight: '120px'
            },
            [`& .MuiTimelineContent-root`]: {
              py: 1
            }
          }}
        >
          {achievements.map((achievement, index) => (
            <TimelineItem key={index}>
              <TimelineSeparator>
                <TimelineDot 
                  sx={{ 
                    background: '#d4eef1ff',
                    border: '2px solid',
                    borderColor: 'primary.main',
                    p: 0.8
                  }}
                >
                  {React.cloneElement(achievement.icon, { 
                    sx: { fontSize: 20, color: 'primary.main' } 
                  })}
                </TimelineDot>
                {index < achievements.length - 1 && (
                  <TimelineConnector sx={{ 
                    bgcolor: 'primary.main',
                    width: '2px'
                  }} />
                )}
              </TimelineSeparator>
              <TimelineContent>
                <Box
                  component={motion.div}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ 
                    opacity: 1, 
                    y: 0,
                    scale: 1,
                    transition: { duration: 0.3 }
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    rotateZ: index % 2 === 0 ? 1 : -1,
                    transition: { 
                      type: "spring",
                      stiffness: 300,
                      damping: 15
                    }
                  }}
                  viewport={{ 
                    once: true,
                    margin: "-100px"
                  }}
                  sx={{
                    transform: 'scale(0.95)',
                    transformOrigin: index % 2 === 0 ? 'left' : 'right'
                  }}
                >
                  <Card
                    sx={{ 
                      background: achievement.bgColor,
                      borderRadius: 2,
                      border: '1px solid',
                      borderColor: 'primary.main',
                      borderOpacity: 0.1,
                      boxShadow: 1,
                      transition: 'all 0.3s ease-in-out',
                      '&:hover': {
                        background: theme => `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.08)} 0%, ${alpha(theme.palette.primary.main, 0.03)} 100%)`,
                        boxShadow: theme => `
                          0 10px 20px ${alpha(theme.palette.primary.main, 0.15)},
                          0 0 0 1px ${alpha(theme.palette.primary.main, 0.1)},
                          0 0 0 4px ${alpha(theme.palette.primary.main, 0.05)}
                        `,
                        transform: 'translateY(-2px)',
                        '& .MuiTypography-subtitle1': {
                          color: 'primary.dark'
                        }
                      }
                    }}
                  >
                    <CardContent sx={{ p: 2 }}>
                      <Typography 
                        variant="subtitle1"
                        component="h3" 
                        sx={{ 
                          fontWeight: 'bold',
                          color: 'primary.main',
                          mb: 0.5,
                          transition: 'color 0.3s ease'
                        }}
                      >
                        {achievement.title}
                      </Typography>
                      <Typography 
                        variant="caption" 
                        sx={{
                          display: 'inline-block',
                          background: theme => alpha(theme.palette.primary.main, 0.1),
                          padding: '2px 8px',
                          borderRadius: '12px',
                          color: 'primary.main',
                          mb: 1,
                          fontSize: '0.7rem',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            background: theme => alpha(theme.palette.primary.main, 0.15),
                            transform: 'scale(1.05)'
                          }
                        }}
                      >
                        {achievement.year}
                      </Typography>
                      <Typography 
                        variant="body2"
                        sx={{
                          color: 'text.primary',
                          lineHeight: 1.4,
                          fontSize: '0.85rem'
                        }}
                      >
                        {achievement.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Box>
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