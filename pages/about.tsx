import SEO from '@/components/SEO';
import Layout from '@/src/shared/components/Layout';
import { profileService } from '@/src/shared/services/profile.service';
import { Celebration, Code, ExpandMore, Flight, SportsVolleyball } from '@mui/icons-material';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Box,
  Container,
  Divider,
  Grid,
  Paper,
  Typography,
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';
import React from 'react';
const MotionPaper = motion(Paper);

export default function About() {
  const profile = profileService.getProfile();
  const theme = useTheme();
  const [expanded, setExpanded] = React.useState<false | string>('story');

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <SEO
        title="About Me"
        description="Learn more about Sam Yang, a passionate Full Stack Developer with experience in modern web technologies and cloud solutions."
      />
      <Layout>
        <Container maxWidth="lg">
          <Box sx={{ my: 4 }}>
            <Typography component="h1" gutterBottom textAlign="center" variant="h3">
              About Me
            </Typography>

            <Divider sx={{ mb: 6 }} />

            <Grid container spacing={6}>
              {/* Personal Info Section */}
              <Grid item md={4} xs={12}>
                <MotionPaper
                  animate={{ opacity: 1, y: 0 }}
                  elevation={0}
                  initial={{ opacity: 0, y: 20 }}
                  sx={{
                    '&:hover': {
                      boxShadow: theme.shadows[4],
                      transform: 'translateY(-8px)',
                    },
                    alignItems: 'center',
                    borderRadius: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    p: 4,
                    transition: 'all 0.3s ease-in-out',
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {/* <Avatar
                    alt={profile.name}
                    src="/avatar.jpg"
                    sx={{
                      '&:hover': {
                        transform: 'scale(1.05)',
                      },
                      height: 200,
                      mb: 3,
                      transition: 'transform 0.3s ease-in-out',
                      width: 200,
                    }}
                  /> */}
                  <Box
                    sx={{
                      mt: 4,
                      mb: 6,
                      width: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                    }}
                  >
                    <img
                      src="/ai-business-card.png"
                      alt="AI Business Card"
                      style={{
                        maxHeight: '300px',
                        borderRadius: 8,
                        boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                        margin: '0 auto',
                        display: 'block',
                      }}
                    />
                  </Box>
                  <Typography gutterBottom variant="h5">
                    {profile.name}
                  </Typography>
                  <Typography color="text.secondary" gutterBottom variant="subtitle1">
                    Software Engineer in Tokyo
                  </Typography>
                  <Typography sx={{ mt: 2 }} textAlign="center" variant="body2">
                    A tech enthusiast from Taiwan, embracing new adventures in Japan
                  </Typography>
                  {/* Business Card Preview */}
                </MotionPaper>
              </Grid>

              {/* Main Content Section */}
              <Grid item md={8} xs={12}>
                {/* Programming Journey */}
                <Accordion
                  expanded={expanded === 'journey'}
                  onChange={handleChange('journey')}
                  sx={{
                    '&:before': { display: 'none' },
                    '&:not([aria-expanded="true"]):hover': {
                      bgcolor: 'background.paper',
                      transform: 'translateX(8px)',
                    },
                    borderRadius: '8px !important',
                    mb: 2,
                    transition: 'all 0.3s ease-in-out',
                  }}
                >
                  <AccordionSummary expandIcon={<ExpandMore />}>
                    <Box sx={{ alignItems: 'center', display: 'flex' }}>
                      <Code color="primary" sx={{ mr: 2 }} />
                      <Typography color="primary" variant="h5">
                        My Programming Journey
                      </Typography>
                    </Box>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography paragraph variant="body1">
                      My fascination with programming began in middle school when I first
                      encountered Scratch. That simple block-based programming language opened up a
                      world of possibilities, showing me how I could create and bring my ideas to
                      life through code.
                    </Typography>
                    <Typography paragraph variant="body1">
                      This early exposure sparked a passion that would shape my future. During high
                      school, I dove deeper into algorithmic problem-solving, finding joy in the
                      logical challenges and the satisfaction of creating efficient solutions.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                {/* Sports & Activities */}
                <Accordion
                  expanded={expanded === 'sports'}
                  onChange={handleChange('sports')}
                  sx={{
                    '&:before': { display: 'none' },
                    '&:not([aria-expanded="true"]):hover': {
                      bgcolor: 'background.paper',
                      transform: 'translateX(8px)',
                    },
                    borderRadius: '8px !important',
                    mb: 2,
                    transition: 'all 0.3s ease-in-out',
                  }}
                >
                  <AccordionSummary expandIcon={<ExpandMore />}>
                    <Box sx={{ alignItems: 'center', display: 'flex' }}>
                      <SportsVolleyball color="primary" sx={{ mr: 2 }} />
                      <Typography color="primary" variant="h5">
                        Sports & Activities
                      </Typography>
                    </Box>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography paragraph variant="body1">
                      Volleyball has been my sporting passion since high school. What started as
                      casual games with friends evolved into a more serious commitment when I joined
                      the department team at university. The sport taught me valuable lessons about
                      teamwork, communication, and perseverance.
                    </Typography>
                    <Typography variant="body1">
                      The thrill of a well-executed play, the camaraderie among teammates, and the
                      excitement of inter-departmental tournaments created some of my most cherished
                      university memories. Even today, I try to find time for volleyball, as it's
                      not just exercise but a way to connect with others and maintain a healthy
                      work-life balance.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                {/* Japanese Culture & Life */}
                <Accordion
                  expanded={expanded === 'japan'}
                  onChange={handleChange('japan')}
                  sx={{
                    '&:before': { display: 'none' },
                    '&:not([aria-expanded="true"]):hover': {
                      bgcolor: 'background.paper',
                      transform: 'translateX(8px)',
                    },
                    borderRadius: '8px !important',
                    mb: 2,
                    transition: 'all 0.3s ease-in-out',
                  }}
                >
                  <AccordionSummary expandIcon={<ExpandMore />}>
                    <Box sx={{ alignItems: 'center', display: 'flex' }}>
                      <Flight color="primary" sx={{ mr: 2 }} />
                      <Typography color="primary" variant="h5">
                        Life in Japan
                      </Typography>
                    </Box>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography paragraph variant="body1">
                      My connection with Japanese culture began long before moving here, through
                      anime, games, and J-pop during my childhood. This early exposure cultivated a
                      deep appreciation for Japanese creativity and attention to detail.
                    </Typography>
                    <Typography paragraph variant="body1">
                      Now living in Tokyo since September 2024, I'm experiencing firsthand the
                      fascinating blend of tradition and innovation that makes Japan unique. From
                      the efficiency of daily life to the warmth of local communities, every day
                      brings new discoveries and learning opportunities.
                    </Typography>
                    <Typography variant="body1">
                      While adapting to life in a new country has its challenges, the experience has
                      been incredibly rewarding. I'm excited to continue exploring Japanese culture,
                      improving my language skills, and contributing to the local tech community.
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                {/* Goals & Aspirations */}
                <Accordion
                  expanded={expanded === 'goals'}
                  onChange={handleChange('goals')}
                  sx={{
                    '&:before': { display: 'none' },
                    '&:not([aria-expanded="true"]):hover': {
                      bgcolor: 'background.paper',
                      transform: 'translateX(8px)',
                    },
                    borderRadius: '8px !important',
                    transition: 'all 0.3s ease-in-out',
                  }}
                >
                  <AccordionSummary expandIcon={<ExpandMore />}>
                    <Box sx={{ alignItems: 'center', display: 'flex' }}>
                      <Celebration color="primary" sx={{ mr: 2 }} />
                      <Typography color="primary" variant="h5">
                        Goals & Aspirations
                      </Typography>
                    </Box>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography paragraph variant="body1">
                      As I establish my life in Japan, my goals extend beyond professional
                      development. I aim to create meaningful connections within both the tech
                      community and the broader society, serving as a bridge between Taiwanese and
                      Japanese cultures.
                    </Typography>
                    <Typography variant="body1">
                      Looking ahead, I'm excited about the possibilities of combining my technical
                      expertise with my cross-cultural experiences to contribute to innovative
                      solutions. Whether it's through technology, community involvement, or cultural
                      exchange, I hope to make a positive impact in my new home while continuing to
                      grow both personally and professionally.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Layout>
    </>
  );
}
