import type { Metadata } from 'next';
import { ArrowUpRight } from 'lucide-react';

export const metadata: Metadata = {
  title: "What's New",
  description: 'Changelog and release history for reqsh - see what has changed in each version.',
};

interface Release {
  version: string;
  date: string;
  items: string[];
}

function parseChangelog(markdown: string): Release[] {
  const releases: Release[] = [];
  const lines = markdown.split('\n');
  let current: Release | null = null;

  for (const line of lines) {
    const versionMatch = line.match(/^##\s+(\S+)\s+\((\d{4}-\d{2}-\d{2})\)/);
    if (versionMatch) {
      if (current) releases.push(current);
      current = { version: versionMatch[1], date: versionMatch[2], items: [] };
      continue;
    }
    const itemMatch = line.match(/^-\s+(.+)/);
    if (itemMatch && current) {
      current.items.push(itemMatch[1]);
    }
  }
  if (current) releases.push(current);
  return releases;
}

function formatDate(dateStr: string): string {
  const [y, m, d] = dateStr.split('-').map(Number);
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  return `${months[m - 1]} ${d}, ${y}`;
}

function renderInline(text: string): React.ReactNode {
  const parts = text.split(/(`[^`]+`)/g);
  return parts.map((part, i) => {
    if (part.startsWith('`') && part.endsWith('`')) {
      return (
        <code
          key={i}
          className="rounded bg-accent-soft px-1.5 py-0.5 font-mono text-sm text-accent-strong"
        >
          {part.slice(1, -1)}
        </code>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

export default async function ChangelogPage() {
  const res = await fetch('https://raw.githubusercontent.com/hars-21/reqsh/main/CHANGELOG.md', {
    next: { revalidate: 3600 },
  });
  const markdown = await res.text();
  const releases = parseChangelog(markdown);

  return (
    <div className="mx-auto max-w-6xl px-6">
      <div className="max-w-3xl pt-20 md:pt-28 pb-24">
        <header className="mb-16 md:mb-20">
          <p className="mb-5 font-mono text-xs tracking-widest uppercase text-accent">Changelog</p>
          <h1 className="font-serif text-5xl md:text-6xl tracking-tight text-foreground text-balance">
            What&apos;s new
          </h1>
          <p className="mt-6 text-lg text-muted leading-relaxed text-pretty">
            Every release of reqsh, from the latest features to the smallest fixes.
          </p>
        </header>

        <div className="flex flex-col gap-6">
          {releases.map((release, i) => (
            <section
              key={release.version}
              className="rounded-2xl bg-card border border-border p-6 md:p-8 shadow-[0_1px_2px_rgba(38,33,29,0.05)]"
            >
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
                <h2 className="font-mono text-xl font-semibold tracking-tight text-foreground">
                  v{release.version}
                </h2>
                {i === 0 && (
                  <span className="rounded-full bg-accent-soft px-2.5 py-0.5 text-xs font-medium tracking-wide text-accent-strong uppercase">
                    Latest
                  </span>
                )}
                <time className="ml-auto font-mono text-sm text-muted">
                  {formatDate(release.date)}
                </time>
              </div>

              <ul className="mt-5 flex flex-col gap-2.5">
                {release.items.map((item, j) => (
                  <li key={j} className="flex gap-3 leading-relaxed text-muted">
                    <span
                      className="mt-2.5 h-1 w-3 shrink-0 rounded-full bg-accent/50"
                      aria-hidden="true"
                    />
                    <span>{renderInline(item)}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <div className="mt-16">
          <a
            href="https://github.com/hars-21/reqsh/releases"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-snappy hover:text-accent"
          >
            View all releases on GitHub
            <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  );
}
