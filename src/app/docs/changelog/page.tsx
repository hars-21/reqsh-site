import type { Metadata } from 'next';
import { GITHUB_REPO, GITHUB_BRANCH } from '@/lib/docs-config';
import MarkdownRenderer from '@/components/markdown-renderer';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "What's New",
  description: 'Changelog and release history for reqsh.',
};

async function fetchChangelog(): Promise<string> {
  const url = `https://raw.githubusercontent.com/${GITHUB_REPO}/${GITHUB_BRANCH}/CHANGELOG.md`;
  const res = await fetch(url, { next: { revalidate: 3600 } });

  if (!res.ok) {
    throw new Error(`Failed to fetch: ${res.status}`);
  }

  return res.text();
}

export default async function ChangelogPage() {
  const markdown = await fetchChangelog();

  return (
    <>
      <header className="mb-8">
        <h1 className="scroll-m-24 text-3xl font-semibold tracking-tight text-foreground sm:text-3xl">
          Changelog
        </h1>
        <p className="mt-2 text-[15px] text-muted-foreground">
          Every release of reqsh, from the latest features to the smallest fixes.
        </p>
      </header>

      <MarkdownRenderer content={markdown} />

      <div className="mt-8">
        <a
          href="https://github.com/hars-21/reqsh/releases"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-foreground underline underline-offset-4 transition-colors hover:text-accent"
        >
          View all releases on GitHub
        </a>
      </div>
    </>
  );
}
