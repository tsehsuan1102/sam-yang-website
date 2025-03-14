import React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import Link from 'next/link';
import Layout from '@/src/shared/components/Layout';

export default function Custom404() {
  return (
    <Layout>
      <Container maxWidth="md">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '70vh',
            textAlign: 'center',
          }}
        >
          <Typography variant="h1" component="h1" gutterBottom>
            404
          </Typography>
          <Typography variant="h4" component="h2" gutterBottom>
            Page Not Found
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            The page you are looking for does not exist or has been moved.
          </Typography>
          <Button
            variant="contained"
            component={Link}
            href="/"
            sx={{ mt: 2 }}
          >
            Return to Home
          </Button>
        </Box>
      </Container>
    </Layout>
  );
} 