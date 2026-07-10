import type { Metadata } from 'next';
import { GITHUB_REPO, GITHUB_BRANCH } from '@/lib/docs-config';
import MarkdownRenderer from '@/components/markdown-renderer';

export const dynamic = 'force-dynamic';

const siteUrl = 'https://reqsh.dev';

export const metadata: Metadata = {
  title: 'Docs',
  description:
    'Getting started with reqsh. Learn how to install, configure and send HTTP requests from your terminal.',
  alternates: {
    canonical: `${siteUrl}/docs`,
  },
  openGraph: {
    title: 'Documentation | reqsh',
    description:
      'Getting started with reqsh. Learn how to install, configure and send HTTP requests from your terminal.',
    type: 'article',
    url: `${siteUrl}/docs`,
    siteName: 'reqsh',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Documentation | reqsh',
    description:
      'Getting started with reqsh. Learn how to install, configure and send HTTP requests from your terminal.',
  },
};

async function fetchIntroduction(): Promise<string> {
  const url = `https://raw.githubusercontent.com/${GITHUB_REPO}/${GITHUB_BRANCH}/docs/introduction.md`;
  const res = await fetch(url, { next: { revalidate: 3600 } });

  if (!res.ok) {
    throw new Error(`Failed to fetch: ${res.status}`);
  }

  return res.text();
}

export default async function DocsPage() {
  const markdown = await fetchIntroduction();

  return <MarkdownRenderer content={markdown} />;
}
