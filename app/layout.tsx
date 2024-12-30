import './global.css';
import clsx from 'clsx';
import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import Sidebar from './components/sidebar';
import { Analytics } from '@vercel/analytics/react';
import Head from 'next/head';
import { GoogleAnalytics } from '@next/third-parties/google'
import Image from 'next/image';
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
    siteName: 'SimplifiedWeb',
    images: [
      {
        url: "http://blog-tau-vercel.app/og",
        width: 1920,
        height: 1080,
      }
    ],
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
    images: [
      {
        url: "http://blog-vercel-tau.app/og",
        width: 1920,
        height: 1080,
      }
    ],
  },
  verification: {
    google: 'rTvXexlG0sbNMyCg3orpiy18EujIBaV8Y9LCG1zRmlU',
  },
  alternates: {
    types: {
      "application/rss+xml": "http://simplifiedweb.netlify.app/api/blog/feed.xml",
    }
  },
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
        'text-black bg-white dark:text-white dark:bg-[#000000]',
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <body className="antialiased max-w-2xl mb-40 flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <Sidebar />
          {children}
          <Analytics />
          <hr className='my-8' />
          <div className='mt-4'>
            <a target="_blank" href="https://icons8.com/icon/MgH5EHKyvgjX/satoru-gojo">
              <Image className='inline-block mt-[-4px]' src={"/icon.png"} width={24} height={24} alt="Rick Sanchez" /></a>
            <span className='ml-2'>Favicon by <a target="_blank" href="https://icons8.com">Icons8
            </a></span>
            <p></p>
            <p className='mt-2 prose dark:prose-invert prose-neutral'>Design Template by <a href="https://leerob.io">Lee Robinson</a></p>
          </div>
        </main>
        <GoogleAnalytics gaId="G-32B2WMKLZV" />
      </body>
    </html>
  );
}
