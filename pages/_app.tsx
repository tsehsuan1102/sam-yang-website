import type { AppProps } from 'next/app';

import { CssBaseline } from '@mui/material';
import React from 'react';

import '../app/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <CssBaseline />
      <Component {...pageProps} />
    </>
  );
} 