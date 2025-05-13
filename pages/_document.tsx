import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Sam Yang | Software Engineer</title>
        <meta
          content="Sam Yang - Software Engineer based in Tokyo, specializing in AI and full-stack development."
          name="description"
        />
        <link href="/Sam_logo.png" rel="icon" type="image/svg+xml" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
