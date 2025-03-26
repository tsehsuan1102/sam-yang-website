import HomePage from '@/src/modules/home/HomePage';
import Layout from '@/src/shared/components/Layout';
import React from 'react';
import SEO from '@/components/SEO';

export default function Home() {
  return (
    <>
      <SEO />
      <Layout>
        <HomePage />
      </Layout>
    </>
  );
}
