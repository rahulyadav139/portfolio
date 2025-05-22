import type React from 'react';
import type { Metadata } from 'next/dist/lib/metadata/types/metadata-interface';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Portfolio | Creative Designer',
  description: 'Portfolio website showcasing creative design work and projects',
  metadataBase: new URL('https://your-portfolio-website.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://your-portfolio-website.com',
    title: 'Portfolio | Creative Designer',
    description:
      'Portfolio website showcasing creative design work and projects',
    siteName: 'Creative Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Portfolio Open Graph Image',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio | Creative Designer',
    description:
      'Portfolio website showcasing creative design work and projects',
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Your Name',
              url: 'https://your-portfolio-website.com',
              jobTitle: 'UI/UX Designer',
              worksFor: {
                '@type': 'Organization',
                name: 'Creative Studio',
              },
              image: 'https://your-portfolio-website.com/profile.jpg',
              description: 'UI/UX designer with over 6 years of experience',
              sameAs: [
                'https://twitter.com/yourhandle',
                'https://linkedin.com/in/yourprofile',
                'https://dribbble.com/yourprofile',
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
