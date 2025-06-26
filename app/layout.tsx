import type React from 'react';
import type { Metadata } from 'next/dist/lib/metadata/types/metadata-interface';
import { Inter } from 'next/font/google';
import './globals.css';
import profile from '@/assets/profile.json';
import { ThemeProvider } from '@/contexts/theme-context';
import { cn } from '@/lib/utils';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

const inter = Inter({ subsets: ['latin'] });

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: profile.name,
  url: profile.website,
  image: `${profile.website}${profile.image}`,
  sameAs: [
    profile.socialLinks.github,
    profile.socialLinks.linkedin,
    profile.socialLinks.twitter,
  ],
  jobTitle: profile.title,
  worksFor: {
    '@type': 'Organization',
    name: profile.company,
  },
  description: profile.seo.description,
};

export const metadata: Metadata = {
  title: profile.name,
  description: profile.seo.description,
  openGraph: {
    type: 'website',
    url: profile.website,
    title: profile.seo.title,
    description: profile.seo.description,
    siteName: profile.name,
    images: [
      {
        url: `${profile.website}${profile.image}`,
        width: 630,
        height: 630,
        alt: profile.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: profile.seo.title,
    description: profile.seo.description,
    creator: '@rahul_m_yadav',
    images: [`${profile.website}${profile.image}`],
  },
  alternates: {
    canonical: profile.website,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: {
    'application-name': profile.name,
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': profile.name,
    'format-detection': 'telephone=no',
    'mobile-web-app-capable': 'yes',
    'msapplication-config': '/browserconfig.xml',
    'msapplication-TileColor': '#000000',
    'theme-color': '#000000',
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
          }}
        />
      </head>
      <body
        className={cn(
          inter.className,
          'bg-white text-zinc-900 antialiased dark:bg-zinc-900 dark:text-white'
        )}
      >
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
