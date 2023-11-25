import './global.css';
import clsx from 'clsx';
import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import Sidebar from './components/sidebar';
import { Analytics } from '@vercel/analytics/react';
import Head from 'next/head';

export const metadata: Metadata = {
  metadataBase: new URL('https://simplifiedweb.netlify.app'),
  title: {
    default: 'Dev Mehta',
    template: '%s | Dev Mehta',
  },
  description: 'Developer, writer, and creator.',
  openGraph: {
    title: 'Dev Mehta',
    description: 'Developer, writer, and creator.',
    url: 'https://simplifiedweb.netlify.app',
    siteName: 'Dev Mehta',
    locale: 'en_US',
    type: 'website',
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
  twitter: {
    title: 'Dev Mehta',
    card: 'summary_large_image',
  },
  verification: {
    google: 'eZSdmzAXlLkKhNJzfgwDqWORghxnJ8qR9_CHdAh5-xw',
  },
  alternates: {
    types: {
      "application/rss+xml": "http://simplifiedweb.netlify.app/api/blog/feed.xml",
    }
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={clsx(
        'text-black bg-white dark:text-white dark:bg-[#111010]',
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <body className="antialiased max-w-2xl mb-40 flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <Sidebar />
          {children}
          <Analytics />
        </main>
      </body>
    </html>
  );
}
