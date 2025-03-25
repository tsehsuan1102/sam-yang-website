import Layout from '@/src/shared/components/Layout';
import { Box, Button, Container, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';

export default function Custom404() {
  return (
    <Layout>
      <Container maxWidth="md">
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
            height: '70vh',
            justifyContent: 'center',
            textAlign: 'center',
          }}
        >
          <Typography component="h1" gutterBottom variant="h1">
            404
          </Typography>
          <Typography component="h2" gutterBottom variant="h4">
            Page Not Found
          </Typography>
          <Typography color="text.secondary" paragraph variant="body1">
            The page you are looking for does not exist or has been moved.
          </Typography>
          <Button
            component={Link}
            href="/"
            sx={{ mt: 2 }}
            variant="contained"
          >
            Return to Home
          </Button>
        </Box>
      </Container>
    </Layout>
  );
} 