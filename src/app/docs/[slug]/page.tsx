import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { GITHUB_REPO, GITHUB_BRANCH, getDocBySlug, docs } from '@/lib/docs-config';
import MarkdownRenderer from '@/components/markdown-renderer';

export const dynamic = 'force-dynamic';

const siteUrl = 'https://reqsh.dev';

interface DocPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: DocPageProps): Promise<Metadata> {
  const { slug } = await params;
  const doc = getDocBySlug(slug);
  if (!doc) return { title: 'Not Found' };

  const pageUrl = doc.slug ? `${siteUrl}/docs/${doc.slug}` : `${siteUrl}/docs`;

  return {
    title: doc.title,
    description: `Documentation for reqsh. ${doc.title}. Learn how to use reqsh, the interactive HTTP REPL built in Rust.`,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: `${doc.title} | reqsh`,
      description: `Documentation for reqsh. ${doc.title}.`,
      type: 'article',
      url: pageUrl,
      siteName: 'reqsh',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${doc.title} | reqsh`,
      description: `Documentation for reqsh. ${doc.title}.`,
    },
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

  const docIndex = docs.findIndex((d) => d.slug === slug);
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: doc.title,
    description: `Documentation for reqsh. ${doc.title}.`,
    author: {
      '@type': 'Person',
      name: 'hars-21',
      url: 'https://github.com/hars-21',
    },
    publisher: {
      '@type': 'Organization',
      name: 'reqsh',
      url: siteUrl,
    },
    url: doc.slug ? `${siteUrl}/docs/${doc.slug}` : `${siteUrl}/docs`,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': doc.slug ? `${siteUrl}/docs/${doc.slug}` : `${siteUrl}/docs`,
    },
    position: docIndex >= 0 ? docIndex + 1 : 1,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <MarkdownRenderer content={markdown} />
    </>
  );
}
