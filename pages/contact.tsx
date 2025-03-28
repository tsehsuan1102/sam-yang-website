import SEO from '@/components/SEO';
import Layout from '@/src/shared/components/Layout';
import { profileService } from '@/src/shared/services/profile.service';
import { Email } from '@mui/icons-material';
import { Box, Card, CardContent, Container, Divider, Grid, Typography } from '@mui/material';

export default function Contact() {
  const profile = profileService.getProfile();
  return (
    <>
      <SEO
        title="Contact Me"
        description="Get in touch with Sam Yang. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions."
      />
      <Layout>
        <Container maxWidth="lg">
          <Box sx={{ my: 4 }}>
            <Typography component="h1" gutterBottom textAlign="center" variant="h3">
              Contact Me
            </Typography>
            <Typography color="text.secondary" paragraph textAlign="center" variant="subtitle1">
              Feel free to reach out to me for collaborations or inquiries
            </Typography>
            <Divider sx={{ my: 4 }} />

            <Grid container justifyContent="center" spacing={6}>
              {/* 联系方式 */}
              <Grid item md={6} xs={12}>
                <Card>
                  <CardContent>
                    <Typography gutterBottom variant="h5">
                      Contact Information
                    </Typography>
                    <Typography color="text.secondary" paragraph variant="body2">
                      Here's how you can reach me
                    </Typography>

                    <Box sx={{ alignItems: 'center', display: 'flex', mb: 2, mt: 3 }}>
                      <Email color="primary" sx={{ mr: 2 }} />
                      <Typography variant="body1">{profile.contact.email}</Typography>
                    </Box>

                    {profile.contact.linkedin && (
                      <Box sx={{ alignItems: 'center', display: 'flex', mb: 2 }}>
                        <Box
                          alt="LinkedIn"
                          component="img"
                          src="/linkedin-icon.png"
                          sx={{ height: 24, mr: 2, width: 24 }}
                        />
                        <Typography variant="body1">
                          <Box
                            component="a"
                            href={profile.contact.linkedin}
                            rel="noopener noreferrer"
                            sx={{ color: 'text.primary', textDecoration: 'none' }}
                            target="_blank"
                          >
                            LinkedIn Profile
                          </Box>
                        </Typography>
                      </Box>
                    )}

                    {profile.contact.github && (
                      <Box sx={{ alignItems: 'center', display: 'flex', mb: 2 }}>
                        <Box
                          alt="GitHub"
                          component="img"
                          src="/github-icon.png"
                          sx={{ height: 24, mr: 2, width: 24 }}
                        />
                        <Typography variant="body1">
                          <Box
                            component="a"
                            href={profile.contact.github}
                            rel="noopener noreferrer"
                            sx={{ color: 'text.primary', textDecoration: 'none' }}
                            target="_blank"
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
    </>
  );
}
