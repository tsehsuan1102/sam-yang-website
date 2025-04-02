import SEO from '@/components/SEO';
import Layout from '@/src/shared/components/Layout';
import { profileService } from '@/src/shared/services/profile.service';
import { Email } from '@mui/icons-material';
import {
  Box,
  Card,
  CardContent,
  Container,
  Divider,
  Grid,
  Typography,
  TextField,
  Button,
  Alert,
} from '@mui/material';
import { useState } from 'react';
import { saveContactMessage } from '@/lib/supabase';

export default function Contact() {
  const profile = profileService.getProfile();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setError(null);

    try {
      await saveContactMessage({
        name: formData.name,
        email: formData.email || null,
        message: formData.message,
      });

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      setStatus('error');
      setError(err instanceof Error ? err.message : 'Please try again');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

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
              {/* Contact Information */}
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

              {/* Contact Form */}
              <Grid item md={6} xs={12}>
                <Card>
                  <CardContent>
                    <Typography gutterBottom variant="h5">
                      Send a Message
                    </Typography>
                    <Typography color="text.secondary" paragraph variant="body2">
                      Leave me a message or feedback and I'll get back to you
                    </Typography>

                    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
                      <TextField
                        fullWidth
                        id="name"
                        label="Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        margin="normal"
                      />
                      <TextField
                        fullWidth
                        id="email"
                        label="Email (Optional)"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        margin="normal"
                      />
                      <TextField
                        fullWidth
                        required
                        id="message"
                        label="Message"
                        name="message"
                        multiline
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        margin="normal"
                      />
                      <Button
                        fullWidth
                        type="submit"
                        variant="contained"
                        disabled={status === 'loading'}
                        sx={{ mt: 3 }}
                      >
                        {status === 'loading' ? 'Sending...' : 'Send Message'}
                      </Button>
                    </Box>

                    {status === 'success' && (
                      <Alert severity="success" sx={{ mt: 2 }}>
                        Message sent successfully! Thank you for reaching out.
                      </Alert>
                    )}

                    {status === 'error' && (
                      <Alert severity="error" sx={{ mt: 2 }}>
                        {error}
                      </Alert>
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
