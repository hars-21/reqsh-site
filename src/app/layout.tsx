import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import Nav from '@/components/nav';
import Footer from '@/components/footer';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const siteUrl = 'https://reqsh.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'reqsh - Interactive HTTP Shell',
    template: '%s - reqsh',
  },
  description:
    'An interactive terminal shell for HTTP requests. Set base URLs, manage headers, use variables, save and run requests, and re-run from history. Built in Rust. Open source.',
  keywords: [
    'reqsh',
    'HTTP shell',
    'terminal',
    'REPL',
    'Rust',
    'CLI',
    'HTTP client',
    'variables',
    'save requests',
  ],
  authors: [{ name: 'hars-21', url: 'https://github.com/hars-21' }],
  creator: 'hars-21',
  openGraph: {
    title: 'reqsh - Interactive HTTP Shell',
    description:
      'An interactive terminal shell for HTTP requests. Set base URLs, manage headers, use variables, save and run requests, and re-run from history.',
    type: 'website',
    locale: 'en_US',
    siteName: 'reqsh',
    url: siteUrl,
    images: [
      {
        url: '/banner.svg',
        width: 1200,
        height: 630,
        alt: 'reqsh - Interactive HTTP Shell',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'reqsh - Interactive HTTP Shell',
    description: 'An interactive terminal shell for HTTP requests. Built in Rust. Open source.',
    images: ['/banner.svg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl,
  },

  icons: {
    icon: [
      {
        url: '/icon-16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        url: '/icon-32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        url: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        url: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    apple: [
      {
        url: '/apple-touch-icon.png',
        sizes: '180x180',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'reqsh',
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'macOS, Linux',
    description:
      'An interactive terminal shell for HTTP requests. Set base URLs, manage headers, use variables, save and run requests, and re-run from history.',
    url: siteUrl,
    author: {
      '@type': 'Person',
      name: 'hars-21',
      url: 'https://github.com/hars-21',
    },
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
  };

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
