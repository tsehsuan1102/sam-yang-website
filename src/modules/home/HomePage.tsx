import { ArrowForward, Article, CameraAlt, ChildCare, Code, Computer, Explore, Flight, GitHub, Language, Psychology, RocketLaunch, School, Work } from '@mui/icons-material';
import Timeline from '@mui/lab/Timeline';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import { 
  Avatar, 
  Box, 
  Button, 
  Card, 
  CardContent, 
  CardMedia, 
  Chip, 
  Container, 
  Divider, 
  Grid,
  Paper,
  Stack,
  Typography,
  useTheme
} from '@mui/material';
import { alpha } from '@mui/material/styles';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

import { profileService } from '../../shared/services/profile.service';
import { projectsService } from '../../shared/services/projects.service';

// 控制是否顯示專案相關功能
const SHOW_FULL_PROJECTS = false;

const MotionBox = motion(Box);

const HomePage: React.FC = () => {
  const profile = profileService.getProfile();
  const featuredProjects = projectsService.getFeaturedProjects();
  const theme = useTheme();

  const achievements = [
    {
      bgColor: "rgba(25, 118, 210, 0.05)",
      description: "Began my journey in Taiwan during the autumn of 1998. A curious mind with endless possibilities, ready to make a positive impact on the world.",
      icon: <ChildCare />,
      title: "A Star is Born! 👶",
      year: "1998 NOV"
    },
    {
      bgColor: "rgba(25, 118, 210, 0.05)",
      description: "Discovered the world of programming through Scratch. What started as a simple game project sparked a lifelong passion for software development.",
      icon: <Computer />,
      title: "Baby Coder Adventures 🌱",
      year: "2012 SEP"
    },
    {
      bgColor: "rgba(25, 118, 210, 0.05)",
      description: "Immersed in NTU's challenging Computer Science environment, surrounded by brilliant minds. Discovered the vast landscape of CS - from systems to AI. An eye-opening journey into technology's endless possibilities.",
      icon: <School />,
      title: "University Quest: NTU Edition 🎓",
      year: "2017 SEP"
    },
    {
      bgColor: "rgba(25, 118, 210, 0.05)",
      description: "Initiated my professional journey through an internship. Each challenge became a stepping stone, shaping my understanding of software architecture and development practices.",
      icon: <Psychology />,
      title: "First Tech Adventure ✨",
      year: "2020 JUL"
    },
    {
      bgColor: "rgba(25, 118, 210, 0.05)",
      description: "Advanced to Full-Stack Development at MixerBox. Transformed technical expertise into tangible user value.",
      icon: <Work />,
      title: "MixerBox Super Mission 🚀",
      year: "2021 JUN"
    },
    {
      bgColor: "rgba(25, 118, 210, 0.05)",
      description: "Appointed as Head of AI at BeyondBrain. Combining technical leadership with team development, driving innovation in artificial intelligence solutions.",
      icon: <RocketLaunch />,
      title: "AI Adventure Master 🤖",
      year: "2024 MAR"
    },
    {
      bgColor: "rgba(25, 118, 210, 0.05)",
      description: "Embraced a new chapter in Tokyo. Building international connections while contributing to cutting-edge technology development.",
      icon: <Flight />,
      title: "Tokyo Tales Begin 🗼",
      year: "2024 SEP"
    },
    {
      bgColor: "rgba(25, 118, 210, 0.05)",
      description: "Excited to explore endless possibilities at the intersection of technology and human experience. From AI innovations to cultural bridges, from startup ecosystems to social impact - ready to embrace new challenges and create meaningful changes across borders.",
      icon: <Explore />,
      title: "The Next Chapter ⭐",
      year: "Future"
    }
  ];

  return (
    <>
      <Head>
        <title>Sam Yang | Software Engineer</title>
        <meta content="Sam Yang - Software Engineer based in Tokyo, specializing in AI and full-stack development." name="description" />
      </Head>
      <Container>
        {/* Hero Section */}
        <Box sx={{ 
          alignItems: 'center', 
          display: 'flex', 
          height: { md: '70vh', xs: 'auto' },
          mb: 8 
        }}>
          <Grid alignItems="center" container spacing={4}>
            <Grid item md={6} xs={12}>
              <MotionBox
                animate={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
              >
                <Typography color="primary" variant="overline">
                  Hello, I'm
                </Typography>
                <Typography component="h1" fontWeight="bold" gutterBottom variant="h2">
                  {profile.name}
                </Typography>
                <Typography color="text.secondary" gutterBottom variant="h4">
                  {profile.title}
                </Typography>
                <Typography paragraph sx={{ mb: 4, mt: 2 }} variant="body1">
                  A passionate software engineer from Taiwan, now based in Tokyo. 
                  My journey began with Scratch in middle school, evolved through algorithm competitions, 
                  and led to research in Natural Language Processing. Today, I'm building the future of 
                  technology while embracing Japanese culture and innovation.
                </Typography>
                <Stack direction="row" spacing={2}>
                  <Button 
                    component={Link} 
                    endIcon={<ArrowForward />} 
                    href="/experience" 
                    size="large" 
                    variant="contained"
                  >
                    View Experience
                  </Button>
                  <Button 
                    component={Link} 
                    href="/about" 
                    size="large" 
                    variant="outlined"
                  >
                    About Me
                  </Button>
                </Stack>
              </MotionBox>
            </Grid>
            <Grid item md={6} xs={12}>
              <MotionBox
                animate={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0, scale: 0.5 }}
                sx={{
                  alignItems: 'center',
                  display: 'flex',
                  height: '100%',
                  justifyContent: 'center',
                }}
                transition={{ duration: 0.5 }}
              >
                <Avatar
                  alt={profile.name}
                  src="/avatar.jpg"
                  sx={{
                    border: `4px solid ${theme.palette.primary.main}`,
                    height: { md: 300, xs: 200 },
                    width: { md: 300, xs: 200 },
                  }}
                />
              </MotionBox>
            </Grid>
          </Grid>
        </Box>

        {/* Key Achievements Section */}
        <Box sx={{ my: 8 }}>
          <Typography 
            component="h2" 
            gutterBottom 
            sx={{
              color: 'primary.main',
              fontWeight: 'bold'
            }} 
            textAlign="center"
            variant="h4"
          >
            My Journey So Far
          </Typography>
          <Divider sx={{ mb: 4 }} />
          <Timeline 
            position="alternate" 
            sx={{ 
              [`& .MuiTimelineContent-root`]: {
                py: 1
              },
              [`& .MuiTimelineItem-root`]: {
                minHeight: '120px'
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
                      sx: { color: 'primary.main', fontSize: 20 } 
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
                    sx={{
                      transform: 'scale(0.95)',
                      transformOrigin: index % 2 === 0 ? 'left' : 'right'
                    }}
                    viewport={{ 
                      margin: "-100px",
                      once: true
                    }}
                    whileHover={{ 
                      rotateZ: index % 2 === 0 ? 1 : -1,
                      scale: 1.05,
                      transition: { 
                        damping: 15,
                        stiffness: 300,
                        type: "spring"
                      }
                    }}
                    whileInView={{ 
                      opacity: 1, 
                      scale: 1,
                      transition: { duration: 0.3 },
                      y: 0
                    }}
                  >
                    <Card
                      sx={{ 
                        '&:hover': {
                          '& .MuiTypography-subtitle1': {
                            color: 'primary.dark'
                          },
                          background: theme => `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.08)} 0%, ${alpha(theme.palette.primary.main, 0.03)} 100%)`,
                          boxShadow: theme => `
                            0 10px 20px ${alpha(theme.palette.primary.main, 0.15)},
                            0 0 0 1px ${alpha(theme.palette.primary.main, 0.1)},
                            0 0 0 4px ${alpha(theme.palette.primary.main, 0.05)}
                          `,
                          transform: 'translateY(-2px)'
                        },
                        background: achievement.bgColor,
                        border: '1px solid',
                        borderColor: 'primary.main',
                        borderOpacity: 0.1,
                        borderRadius: 2,
                        boxShadow: 1,
                        transition: 'all 0.3s ease-in-out'
                      }}
                    >
                      <CardContent sx={{ p: 2 }}>
                        <Typography 
                          component="h3"
                          sx={{ 
                            color: 'primary.main',
                            fontWeight: 'bold',
                            mb: 0.5,
                            transition: 'color 0.3s ease'
                          }} 
                          variant="subtitle1"
                        >
                          {achievement.title}
                        </Typography>
                        <Typography 
                          sx={{
                            '&:hover': {
                              background: theme => alpha(theme.palette.primary.main, 0.15),
                              transform: 'scale(1.05)'
                            },
                            background: theme => alpha(theme.palette.primary.main, 0.1),
                            borderRadius: '12px',
                            color: 'primary.main',
                            display: 'inline-block',
                            fontSize: '0.7rem',
                            mb: 1,
                            padding: '2px 8px',
                            transition: 'all 0.3s ease'
                          }} 
                          variant="caption"
                        >
                          {achievement.year}
                        </Typography>
                        <Typography 
                          sx={{
                            color: 'text.primary',
                            fontSize: '0.85rem',
                            lineHeight: 1.4
                          }}
                          variant="body2"
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
          <Typography component="h2" gutterBottom textAlign="center" variant="h4">
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
                color="primary" 
                key={skill} 
                label={skill} 
                sx={{ 
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    transition: 'transform 0.2s ease-in-out'
                  },
                  m: 0.5
                }} 
                variant="outlined" 
              />
            ))}
          </Box>
        </Box>

        {/* Featured Projects */}
        {SHOW_FULL_PROJECTS && (
          <Box sx={{ my: 8 }}>
            <Typography component="h2" gutterBottom textAlign="center" variant="h4">
              Featured Projects
            </Typography>
            <Divider sx={{ mb: 4 }} />
            <Grid container spacing={4}>
              {featuredProjects.map((project) => (
                <Grid item key={project.id} sm={6} xs={12}>
                  <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                    <CardMedia
                      alt={project.title}
                      component="img"
                      height="200"
                      image={project.imageUrl || '/project-placeholder.jpg'}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography component="h3" gutterBottom variant="h5">
                        {project.title}
                      </Typography>
                      <Typography color="text.secondary" paragraph variant="body2">
                        {project.description}
                      </Typography>
                      <Box sx={{ mb: 2 }}>
                        {project.technologies.slice(0, 3).map((tech) => (
                          <Chip
                            key={tech}
                            label={tech}
                            size="small"
                            sx={{ mb: 0.5, mr: 0.5 }}
                          />
                        ))}
                        {project.technologies.length > 3 && (
                          <Chip
                            label={`+${project.technologies.length - 3}`}
                            size="small"
                            sx={{ mb: 0.5, mr: 0.5 }}
                          />
                        )}
                      </Box>
                      <Stack direction="row" spacing={1}>
                        {project.githubUrl && (
                          <Button
                            component="a"
                            href={project.githubUrl}
                            rel="noopener noreferrer"
                            size="small"
                            startIcon={<GitHub />}
                            target="_blank"
                          >
                            Code
                          </Button>
                        )}
                        {project.liveUrl && (
                          <Button
                            component="a"
                            href={project.liveUrl}
                            rel="noopener noreferrer"
                            size="small"
                            startIcon={<Language />}
                            target="_blank"
                          >
                            Demo
                          </Button>
                        )}
                        <Button 
                          component={Link} 
                          href={`/projects/${project.id}`} 
                          size="small"
                        >
                          Details
                        </Button>
                      </Stack>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
            <Box sx={{ mt: 4, textAlign: 'center' }}>
              <Button
                component={Link}
                endIcon={<ArrowForward />}
                href="/projects"
                size="large"
                variant="outlined"
              >
                View All Projects
              </Button>
            </Box>
          </Box>
        )}
      </Container>
    </>
  );
};

export default HomePage; 