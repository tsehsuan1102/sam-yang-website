import SEO from '@/components/SEO';
import AnimatedAccordion from '@/components/ui/animated-accordion';
import SmoothScrollReveal from '@/components/ui-effects/smooth-scroll-reveal';
import Layout from '@/src/shared/components/Layout';
import { profileService } from '@/src/shared/services/profile.service';
import { Celebration, Code, Flight, SportsVolleyball } from '@mui/icons-material';
import {
  Box,
  Container,
  Divider,
  Grid,
  Paper,
  Typography,
  useTheme,
} from '@mui/material';
import { alpha } from '@mui/material/styles';
import { motion } from 'framer-motion';
import React from 'react';

const MotionPaper = motion(Paper);

export default function About() {
  const profile = profileService.getProfile();
  const theme = useTheme();
  const [expanded, setExpanded] = React.useState<false | string>('journey');

  const handleChange = (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
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
            <SmoothScrollReveal delay={0.2}>
              <Typography
                component="h1"
                gutterBottom
                sx={{
                  background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontWeight: 'bold',
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  letterSpacing: '-0.02em',
                }}
                textAlign="center"
                variant="h3"
              >
                About Me
              </Typography>
            </SmoothScrollReveal>

            <SmoothScrollReveal delay={0.4}>
              <Divider
                sx={{
                  mb: 6,
                  mx: 'auto',
                  width: '80px',
                  height: '4px',
                  borderRadius: '2px',
                  bgcolor: 'primary.main',
                }}
              />
            </SmoothScrollReveal>

            <Grid container spacing={6}>
              {/* Personal Info Section */}
              <Grid item md={4} xs={12}>
                <SmoothScrollReveal delay={0.6} direction="left">
                  <MotionPaper
                    elevation={0}
                    sx={{
                      '&:hover': {
                        boxShadow: `0 20px 40px ${alpha(theme.palette.primary.main, 0.15)}`,
                        transform: 'translateY(-8px)',
                      },
                      alignItems: 'center',
                      background: `linear-gradient(135deg, 
                        ${alpha(theme.palette.background.paper, 0.95)} 0%, 
                        ${alpha(theme.palette.primary.main, 0.05)} 100%
                      )`,
                      backdropFilter: 'blur(20px)',
                      border: '1px solid',
                      borderColor: alpha(theme.palette.primary.main, 0.2),
                      borderRadius: 3,
                      display: 'flex',
                      flexDirection: 'column',
                      p: 4,
                      transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                    }}
                    whileHover={{ scale: 1.02 }}
                  >
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
                  </MotionPaper>
                </SmoothScrollReveal>
              </Grid>

              {/* Main Content Section */}
              <Grid item md={8} xs={12}>
                {/* Programming Journey */}
                <SmoothScrollReveal delay={0.8} direction="right">
                  <AnimatedAccordion
                    id="journey"
                    expanded={expanded}
                    onChange={handleChange}
                    icon={<Code />}
                    title="My Programming Journey"
                  >
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
                  </AnimatedAccordion>
                </SmoothScrollReveal>

                {/* Sports & Activities */}
                <SmoothScrollReveal delay={1.0} direction="right">
                  <AnimatedAccordion
                    id="sports"
                    expanded={expanded}
                    onChange={handleChange}
                    icon={<SportsVolleyball />}
                    title="Sports & Activities"
                  >
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
                  </AnimatedAccordion>
                </SmoothScrollReveal>

                {/* Japanese Culture & Life */}
                <SmoothScrollReveal delay={1.2} direction="right">
                  <AnimatedAccordion
                    id="japan"
                    expanded={expanded}
                    onChange={handleChange}
                    icon={<Flight />}
                    title="Life in Japan"
                  >
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
                  </AnimatedAccordion>
                </SmoothScrollReveal>

                {/* Goals & Aspirations */}
                <SmoothScrollReveal delay={1.4} direction="right">
                  <AnimatedAccordion
                    id="goals"
                    expanded={expanded}
                    onChange={handleChange}
                    icon={<Celebration />}
                    title="Goals & Aspirations"
                  >
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
                  </AnimatedAccordion>
                </SmoothScrollReveal>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Layout>
    </>
  );
}