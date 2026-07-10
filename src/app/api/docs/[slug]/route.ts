import { NextRequest, NextResponse } from 'next/server';
import { GITHUB_REPO, GITHUB_BRANCH, getDocBySlug } from '@/lib/docs-config';

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const doc = getDocBySlug(slug);

  if (!doc) {
    return NextResponse.json({ error: 'Doc not found' }, { status: 404 });
  }

  const url = `https://raw.githubusercontent.com/${GITHUB_REPO}/${GITHUB_BRANCH}/${doc.githubPath}`;

  const res = await fetch(url, { next: { revalidate: 3600 } });

  if (!res.ok) {
    return NextResponse.json({ error: `Failed to fetch: ${res.status}` }, { status: 502 });
  }

  const markdown = await res.text();

  return NextResponse.json({ markdown, title: doc.title, slug: doc.slug });
}
