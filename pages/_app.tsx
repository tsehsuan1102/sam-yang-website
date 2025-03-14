import React from 'react';
import type { AppProps } from 'next/app';
import '../app/globals.css';
import { CssBaseline } from '@mui/material';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <CssBaseline />
      <Component {...pageProps} />
    </>
  );
} 