import React, { useState } from 'react';
import Layout from '@/src/shared/components/Layout';
import { 
  Container, 
  Typography, 
  Box, 
  Grid, 
  TextField, 
  Button, 
  Paper,
  Alert,
  Snackbar,
  Divider,
  Card,
  CardContent,
  CircularProgress,
  AlertProps
} from '@mui/material';
import { Send, Email, LocationOn, Phone } from '@mui/icons-material';
import { profileService } from '@/src/shared/services/profile.service';
import { contactService, ContactForm } from '@/src/shared/services/contact.service';

export default function Contact() {
  const profile = profileService.getProfile();
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{
    success: boolean;
    message: string;
  } | null>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // 清除该字段的错误
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // 验证表单
    const validation = contactService.validateForm(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }
    
    // 提交表单
    setIsSubmitting(true);
    try {
      const result = await contactService.submitContactForm(formData);
      setSubmitResult(result);
      
      // 如果成功，清空表单
      if (result.success) {
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      }
    } catch (error) {
      setSubmitResult({
        success: false,
        message: 'There was an error sending your message. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const handleCloseSnackbar = () => {
    setSubmitResult(null);
  };
  
  return (
    <Layout>
      <Container maxWidth="lg">
        <Box sx={{ my: 4 }}>
          <Typography variant="h3" component="h1" gutterBottom textAlign="center">
            Contact Me
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" paragraph textAlign="center">
            Feel free to reach out to me for collaborations or inquiries
          </Typography>
          <Divider sx={{ my: 4 }} />
          
          <Grid container spacing={6}>
            {/* 联系方式 */}
            <Grid item xs={12} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    Contact Information
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    Here's how you can reach me
                  </Typography>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, mt: 3 }}>
                    <Email color="primary" sx={{ mr: 2 }} />
                    <Typography variant="body1">
                      {profile.contact.email}
                    </Typography>
                  </Box>
                  
                  {profile.contact.linkedin && (
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Box 
                        component="img" 
                        src="/linkedin-icon.png" 
                        alt="LinkedIn" 
                        sx={{ width: 24, height: 24, mr: 2 }} 
                      />
                      <Typography variant="body1">
                        <Box 
                          component="a" 
                          href={profile.contact.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{ color: 'text.primary', textDecoration: 'none' }}
                        >
                          LinkedIn Profile
                        </Box>
                      </Typography>
                    </Box>
                  )}
                  
                  {profile.contact.github && (
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Box 
                        component="img" 
                        src="/github-icon.png" 
                        alt="GitHub" 
                        sx={{ width: 24, height: 24, mr: 2 }} 
                      />
                      <Typography variant="body1">
                        <Box 
                          component="a" 
                          href={profile.contact.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{ color: 'text.primary', textDecoration: 'none' }}
                        >
                          GitHub Profile
                        </Box>
                      </Typography>
                    </Box>
                  )}
                </CardContent>
              </Card>
            </Grid>
            
            {/* 联系表单 */}
            <Grid item xs={12} md={8}>
              <Paper elevation={3} sx={{ p: 4 }}>
                <Typography variant="h5" gutterBottom>
                  Send Me a Message
                </Typography>
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Your Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        error={!!errors.name}
                        helperText={errors.name}
                        required
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Your Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        error={!!errors.email}
                        helperText={errors.email}
                        required
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        error={!!errors.subject}
                        helperText={errors.subject}
                        required
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Message"
                        name="message"
                        multiline
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        error={!!errors.message}
                        helperText={errors.message}
                        required
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button 
                        type="submit" 
                        variant="contained" 
                        size="large"
                        disabled={isSubmitting}
                        startIcon={isSubmitting ? <CircularProgress size={20} /> : <Send />}
                      >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </Paper>
            </Grid>
          </Grid>
        </Box>
        
        {/* 提交结果通知 */}
        {submitResult && (
          <Snackbar 
            open={true} 
            autoHideDuration={6000} 
            onClose={handleCloseSnackbar}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          >
            <Alert 
              onClose={handleCloseSnackbar} 
              severity={submitResult.success ? 'success' : 'error'}
              variant="filled"
            >
              {submitResult.message}
            </Alert>
          </Snackbar>
        )}
      </Container>
    </Layout>
  );
} 