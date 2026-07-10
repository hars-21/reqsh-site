import type { Metadata } from 'next';
import { GITHUB_REPO, GITHUB_BRANCH } from '@/lib/docs-config';
import MarkdownRenderer from '@/components/markdown-renderer';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Docs',
  description:
    'Getting started with reqsh - learn how to install, configure and send HTTP requests from your terminal.',
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
