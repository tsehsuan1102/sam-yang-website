import Head from 'next/head';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

const SEO = ({
  title = 'Sam Yang - Full Stack Developer',
  description = 'Full Stack Developer with expertise in React, Node.js, and cloud technologies. Check out my portfolio and projects.',
  image = '/og-image.jpg', // 請確保這個圖片存在於 public 目錄
  url = 'https://sam-yang.com', // 請替換成你的網站網址
}: SEOProps) => {
  const siteTitle = title.includes('Sam Yang') ? title : `${title} | Sam Yang`;

  return (
    <Head>
      {/* 基本 Meta 標籤 */}
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${url}${image}`} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={siteTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={`${url}${image}`} />
    </Head>
  );
};

export default SEO;
