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

export const metadata: Metadata = {
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
  },
  twitter: {
    card: 'summary_large_image',
    title: 'reqsh - Interactive HTTP Shell',
    description: 'An interactive terminal shell for HTTP requests. Built in Rust. Open source.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
