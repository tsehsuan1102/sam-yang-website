import React from 'react';
import Head from 'next/head';
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
  Fade,
  ImageList,
  ImageListItem
} from '@mui/material';
import { ExpandMore, Code, SportsVolleyball, Flight, Celebration } from '@mui/icons-material';
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
      <Head>
        <title>Sam Yang | About Me</title>
        <meta name="description" content="Learn more about Sam Yang, a software engineer based in Tokyo with a passion for technology and cross-cultural experiences." />
      </Head>
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
                  Software Engineer in Tokyo
                </Typography>
                <Typography variant="body2" textAlign="center" sx={{ mt: 2 }}>
                  A tech enthusiast from Taiwan, embracing new adventures in Japan
                </Typography>
              </MotionPaper>
            </Grid>
            
            {/* Main Content Section */}
            <Grid item xs={12} md={8}>
              {/* Programming Journey */}
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
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Code color="primary" sx={{ mr: 2 }} />
                    <Typography variant="h5" color="primary">My Programming Journey</Typography>
                  </Box>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body1" paragraph>
                    My fascination with programming began in middle school when I first encountered Scratch. 
                    That simple block-based programming language opened up a world of possibilities, showing me 
                    how I could create and bring my ideas to life through code.
                  </Typography>
                  <Typography variant="body1" paragraph>
                    This early exposure sparked a passion that would shape my future. During high school, 
                    I dove deeper into algorithmic problem-solving, finding joy in the logical challenges 
                    and the satisfaction of creating efficient solutions.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              {/* Sports & Activities */}
              <Accordion 
                expanded={expanded === 'sports'} 
                onChange={handleChange('sports')}
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
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <SportsVolleyball color="primary" sx={{ mr: 2 }} />
                    <Typography variant="h5" color="primary">Sports & Activities</Typography>
                  </Box>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body1" paragraph>
                    Volleyball has been my sporting passion since high school. What started as casual games 
                    with friends evolved into a more serious commitment when I joined the department team 
                    at university. The sport taught me valuable lessons about teamwork, communication, and 
                    perseverance.
                  </Typography>
                  <Typography variant="body1">
                    The thrill of a well-executed play, the camaraderie among teammates, and the excitement 
                    of inter-departmental tournaments created some of my most cherished university memories. 
                    Even today, I try to find time for volleyball, as it's not just exercise but a way to 
                    connect with others and maintain a healthy work-life balance.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              {/* Japanese Culture & Life */}
              <Accordion 
                expanded={expanded === 'japan'} 
                onChange={handleChange('japan')}
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
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Flight color="primary" sx={{ mr: 2 }} />
                    <Typography variant="h5" color="primary">Life in Japan</Typography>
                  </Box>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body1" paragraph>
                    My connection with Japanese culture began long before moving here, through anime, games, 
                    and J-pop during my childhood. This early exposure cultivated a deep appreciation for 
                    Japanese creativity and attention to detail.
                  </Typography>
                  <Typography variant="body1" paragraph>
                    Now living in Tokyo since September 2024, I'm experiencing firsthand the fascinating blend 
                    of tradition and innovation that makes Japan unique. From the efficiency of daily life to 
                    the warmth of local communities, every day brings new discoveries and learning opportunities.
                  </Typography>
                  <Typography variant="body1">
                    While adapting to life in a new country has its challenges, the experience has been 
                    incredibly rewarding. I'm excited to continue exploring Japanese culture, improving my 
                    language skills, and contributing to the local tech community.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              {/* Goals & Aspirations */}
              <Accordion 
                expanded={expanded === 'goals'} 
                onChange={handleChange('goals')}
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
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Celebration color="primary" sx={{ mr: 2 }} />
                    <Typography variant="h5" color="primary">Goals & Aspirations</Typography>
                  </Box>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body1" paragraph>
                    As I establish my life in Japan, my goals extend beyond professional development. 
                    I aim to create meaningful connections within both the tech community and the broader 
                    society, serving as a bridge between Taiwanese and Japanese cultures.
                  </Typography>
                  <Typography variant="body1">
                    Looking ahead, I'm excited about the possibilities of combining my technical expertise 
                    with my cross-cultural experiences to contribute to innovative solutions. Whether it's 
                    through technology, community involvement, or cultural exchange, I hope to make a 
                    positive impact in my new home while continuing to grow both personally and professionally.
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