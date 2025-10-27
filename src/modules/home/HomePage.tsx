import { ArrowForward, ChildCare, Computer, Explore, Flight, Psychology, RocketLaunch, School, Work } from '@mui/icons-material';
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
  Stack,
  Typography,
  useTheme
} from '@mui/material';
import { alpha } from '@mui/material/styles';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

import GlassCard from '../../../components/ui-effects/glass-card';
import InteractiveButton from '../../../components/ui-effects/interactive-button';
import SmoothScrollReveal from '../../../components/ui-effects/smooth-scroll-reveal';

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
          mb: 8,
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Background gradient overlay */}
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: `
                radial-gradient(circle at 20% 50%, ${theme.palette.primary.main}15 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, ${theme.palette.secondary.main}15 0%, transparent 50%),
                radial-gradient(circle at 40% 80%, ${theme.palette.primary.light}10 0%, transparent 50%)
              `,
              zIndex: -1
            }}
          />
          <Grid alignItems="center" container spacing={4}>
            <Grid item md={6} xs={12}>
              <MotionBox
                animate={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <motion.div
                  animate={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 20 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  <Typography 
                    sx={{
                      background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      fontWeight: 500,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      fontSize: '0.9rem'
                    }} 
                    variant="overline"
                  >
                    Hello, I'm
                  </Typography>
                </motion.div>
                
                <motion.div
                  animate={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 30 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  <Typography 
                    component="h1" 
                    sx={{
                      fontWeight: 800,
                      background: `linear-gradient(135deg, ${theme.palette.text.primary} 0%, ${theme.palette.primary.main} 50%, ${theme.palette.secondary.main} 100%)`,
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      fontSize: { xs: '2.5rem', md: '4rem' },
                      lineHeight: 1.1,
                      letterSpacing: '-0.02em',
                      mb: 2
                    }}
                    variant="h2"
                  >
                    {profile.name}
                  </Typography>
                </motion.div>
                
                <motion.div
                  animate={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 20 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                >
                  <Typography 
                    sx={{
                      color: 'text.secondary',
                      fontSize: { xs: '1.2rem', md: '1.5rem' },
                      fontWeight: 400,
                      mb: 3,
                      opacity: 0.9
                    }}
                    variant="h4"
                  >
                    {profile.title}
                  </Typography>
                </motion.div>
                
                <motion.div
                  animate={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 20 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                >
                  <Typography 
                    paragraph 
                    sx={{ 
                      mb: 4, 
                      mt: 2,
                      fontSize: { xs: '1rem', md: '1.1rem' },
                      lineHeight: 1.6,
                      color: 'text.primary',
                      opacity: 0.8,
                      maxWidth: '600px'
                    }} 
                    variant="body1"
                  >
                    A passionate software engineer from Taiwan, now based in Tokyo. 
                    My journey began with Scratch in middle school, evolved through algorithm competitions, 
                    and led to research in Natural Language Processing. Today, I'm building the future of 
                    technology while embracing Japanese culture and innovation.
                  </Typography>
                </motion.div>
                
                <motion.div
                  animate={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 30 }}
                  transition={{ delay: 1.0, duration: 0.6 }}
                >
                  <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mt: 4 }}>
                    <InteractiveButton
                      component={Link}
                      endIcon={<ArrowForward />}
                      href="/experience"
                      size="large"
                      variant="contained"
                    >
                      View Experience
                    </InteractiveButton>
                    
                    <InteractiveButton
                      component={Link}
                      href="/about"
                      size="large"
                      variant="outlined"
                      glowColor={theme.palette.secondary.main}
                      sx={{
                        background: 'transparent',
                        border: '2px solid',
                        borderColor: theme.palette.primary.main,
                        color: theme.palette.primary.main,
                        '&:hover': {
                          background: `${theme.palette.primary.main}10`,
                          borderColor: theme.palette.primary.main,
                        }
                      }}
                    >
                      About Me
                    </InteractiveButton>
                  </Stack>
                </motion.div>
              </MotionBox>
            </Grid>
            <Grid item md={6} xs={12}>
              <MotionBox
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                sx={{
                  alignItems: 'center',
                  display: 'flex',
                  height: '100%',
                  justifyContent: 'center',
                  position: 'relative'
                }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              >
                {/* Floating background elements */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: '10%',
                    right: '10%',
                    width: 100,
                    height: 100,
                    borderRadius: '50%',
                    background: `linear-gradient(45deg, ${theme.palette.primary.main}20, ${theme.palette.secondary.main}20)`,
                    filter: 'blur(20px)',
                    animation: 'float 6s ease-in-out infinite',
                    '@keyframes float': {
                      '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
                      '50%': { transform: 'translateY(-20px) rotate(180deg)' }
                    }
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: '15%',
                    left: '5%',
                    width: 60,
                    height: 60,
                    borderRadius: '50%',
                    background: `linear-gradient(135deg, ${theme.palette.secondary.main}30, ${theme.palette.primary.main}30)`,
                    filter: 'blur(15px)',
                    animation: 'float-reverse 4s ease-in-out infinite',
                    '@keyframes float-reverse': {
                      '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
                      '50%': { transform: 'translateY(15px) rotate(-180deg)' }
                    }
                  }}
                />
                
                <motion.div
                  whileHover={{ 
                    scale: 1.05,
                    rotate: 2,
                    transition: { duration: 0.3 }
                  }}
                  style={{ position: 'relative', zIndex: 1 }}
                >
                  <Avatar
                    alt={profile.name}
                    src="/avatar.jpg"
                    sx={{
                      height: { md: 320, xs: 240 },
                      width: { md: 320, xs: 240 },
                      border: `6px solid transparent`,
                      background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                      backgroundClip: 'padding-box',
                      position: 'relative',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: -6,
                        left: -6,
                        right: -6,
                        bottom: -6,
                        background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                        borderRadius: '50%',
                        zIndex: -1,
                        filter: 'blur(8px)',
                        opacity: 0.7
                      },
                      boxShadow: `
                        0 20px 40px rgba(0,0,0,0.1),
                        0 0 0 1px ${theme.palette.primary.main}20,
                        inset 0 0 0 4px ${theme.palette.background.paper}
                      `,
                      transition: 'all 0.3s ease-in-out'
                    }}
                  />
                  
                  {/* Decorative ring */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      width: { md: 400, xs: 300 },
                      height: { md: 400, xs: 300 },
                      transform: 'translate(-50%, -50%)',
                      border: `2px solid ${theme.palette.primary.main}30`,
                      borderRadius: '50%',
                      zIndex: 0,
                      animation: 'rotate 20s linear infinite',
                      '@keyframes rotate': {
                        from: { transform: 'translate(-50%, -50%) rotate(0deg)' },
                        to: { transform: 'translate(-50%, -50%) rotate(360deg)' }
                      }
                    }}
                  />
                </motion.div>
              </MotionBox>
            </Grid>
          </Grid>
        </Box>

        {/* Key Achievements Section */}
        <Box sx={{ my: 8 }}>
          <SmoothScrollReveal delay={0.2}>
            <Typography 
              component="h2" 
              gutterBottom 
              sx={{
                background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 'bold',
                fontSize: { xs: '2rem', md: '2.5rem' },
                letterSpacing: '-0.02em'
              }} 
              textAlign="center"
              variant="h4"
            >
              My Journey So Far
            </Typography>
          </SmoothScrollReveal>
          <SmoothScrollReveal delay={0.4}>
            <Divider sx={{ mb: 6, mx: 'auto', width: '60px', height: '4px', borderRadius: '2px', bgcolor: 'primary.main' }} />
          </SmoothScrollReveal>
          <Timeline 
            position="alternate" 
            sx={{ 
              [`& .MuiTimelineContent-root`]: {
                py: 1
              },
              [`& .MuiTimelineItem-root`]: {
                minHeight: '140px'
              }
            }}
          >
            {achievements.map((achievement, index) => (
              <TimelineItem key={index}>
                <TimelineSeparator>
                  <SmoothScrollReveal delay={0.1 * index} direction={index % 2 === 0 ? 'left' : 'right'}>
                    <TimelineDot 
                      sx={{ 
                        background: `linear-gradient(45deg, ${theme.palette.primary.main}20, ${theme.palette.secondary.main}20)`,
                        border: '3px solid',
                        borderColor: 'primary.main',
                        p: 1,
                        backdropFilter: 'blur(10px)',
                        boxShadow: `0 4px 20px ${theme.palette.primary.main}30`
                      }}
                    >
                      {React.cloneElement(achievement.icon, { 
                        sx: { color: 'primary.main', fontSize: 24 } 
                      })}
                    </TimelineDot>
                  </SmoothScrollReveal>
                  {index < achievements.length - 1 && (
                    <TimelineConnector sx={{ 
                      background: `linear-gradient(180deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                      width: '3px',
                      borderRadius: '2px'
                    }} />
                  )}
                </TimelineSeparator>
                <TimelineContent>
                  <SmoothScrollReveal 
                    delay={0.2 + (0.1 * index)} 
                    direction={index % 2 === 0 ? 'right' : 'left'}
                  >
                    <motion.div
                      whileHover={{ 
                        rotateZ: index % 2 === 0 ? 1 : -1,
                        scale: 1.02,
                        transition: { 
                          damping: 15,
                          stiffness: 300,
                          type: "spring"
                        }
                      }}
                    >
                      <GlassCard
                        sx={{
                          '&:hover': {
                            '& .MuiTypography-subtitle1': {
                              color: 'primary.dark'
                            },
                            transform: 'translateY(-4px)'
                          },
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
                    </GlassCard>
                    </motion.div>
                  </SmoothScrollReveal>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </Box>

        {/* Skills Section */}
        <Box sx={{ my: 8 }}>
          <SmoothScrollReveal delay={0.2}>
            <Typography 
              component="h2" 
              gutterBottom 
              sx={{
                background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 'bold',
                fontSize: { xs: '2rem', md: '2.5rem' },
                letterSpacing: '-0.02em'
              }}
              textAlign="center" 
              variant="h4"
            >
              Technical Expertise
            </Typography>
          </SmoothScrollReveal>
          <SmoothScrollReveal delay={0.4}>
            <Divider sx={{ mb: 6, mx: 'auto', width: '60px', height: '4px', borderRadius: '2px', bgcolor: 'primary.main' }} />
          </SmoothScrollReveal>
          <Box sx={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: 2, 
            justifyContent: 'center', 
            my: 4 
          }}>
            {profile.skills.map((skill, index) => (
              <SmoothScrollReveal 
                key={skill}
                delay={0.1 * index}
                direction={index % 2 === 0 ? 'up' : 'down'}
              >
                <motion.div
                  whileHover={{ 
                    scale: 1.1,
                    y: -8,
                    rotateZ: Math.random() * 6 - 3
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Chip 
                    label={skill} 
                    sx={{ 
                      background: `linear-gradient(45deg, ${theme.palette.primary.main}10, ${theme.palette.secondary.main}10)`,
                      border: '2px solid',
                      borderColor: alpha(theme.palette.primary.main, 0.3),
                      color: 'primary.main',
                      fontWeight: 600,
                      fontSize: '0.9rem',
                      px: 2,
                      py: 0.5,
                      backdropFilter: 'blur(10px)',
                      boxShadow: `0 4px 20px ${theme.palette.primary.main}20`,
                      transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                      '&:hover': {
                        background: `linear-gradient(45deg, ${theme.palette.primary.main}20, ${theme.palette.secondary.main}20)`,
                        borderColor: theme.palette.primary.main,
                        boxShadow: `0 8px 30px ${theme.palette.primary.main}40`,
                        color: 'primary.dark'
                      },
                      m: 0.5
                    }} 
                  />
                </motion.div>
              </SmoothScrollReveal>
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