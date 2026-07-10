import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { GITHUB_REPO, GITHUB_BRANCH, getDocBySlug } from '@/lib/docs-config';
import MarkdownRenderer from '@/components/markdown-renderer';

export const dynamic = 'force-dynamic';

interface DocPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: DocPageProps): Promise<Metadata> {
  const { slug } = await params;
  const doc = getDocBySlug(slug);
  if (!doc) return { title: 'Not Found' };

  return {
    title: doc.title,
    description: `Documentation for reqsh - ${doc.title}`,
  };
}

async function fetchMarkdown(githubPath: string): Promise<string> {
  const url = `https://raw.githubusercontent.com/${GITHUB_REPO}/${GITHUB_BRANCH}/${githubPath}`;
  const res = await fetch(url, { next: { revalidate: 3600 } });

  if (!res.ok) {
    throw new Error(`Failed to fetch: ${res.status}`);
  }

  return res.text();
}

export default async function DocPage({ params }: DocPageProps) {
  const { slug } = await params;
  const doc = getDocBySlug(slug);

  if (!doc) {
    notFound();
  }

  const markdown = await fetchMarkdown(doc.githubPath);

  return <MarkdownRenderer content={markdown} />;
}
