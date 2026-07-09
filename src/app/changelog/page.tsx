import type { Metadata } from 'next';

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
        <code key={i} className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm text-foreground">
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
      <div className="max-w-3xl pt-24 pb-40">
        <header className="mb-24">
          <h1 className="text-5xl font-bold tracking-tighter text-foreground md:text-6xl">
            What&apos;s New
          </h1>
          <p className="mt-4 text-xl leading-relaxed font-medium text-muted-foreground">
            Every release of reqsh, from the latest features to the smallest fixes.
          </p>
        </header>

        <div className="space-y-20">
          {releases.map((release, i) => (
            <section key={release.version}>
              <div className="mb-3 flex items-baseline gap-4">
                <h2 className="text-2xl font-bold tracking-tight text-foreground font-mono">
                  v{release.version}
                </h2>
                {i === 0 && (
                  <span className="text-xs font-medium tracking-wide text-accent uppercase">
                    Latest
                  </span>
                )}
              </div>
              <time className="block font-mono text-sm text-muted-foreground">
                {formatDate(release.date)}
              </time>

              <ul className="mt-6 space-y-3">
                {release.items.map((item, j) => (
                  <li key={j} className="text-lg leading-relaxed text-muted-foreground">
                    {renderInline(item)}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <div className="mt-24">
          <a
            href="https://github.com/hars-21/reqsh/releases"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-snappy hover:text-foreground"
          >
            View all releases on GitHub
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 17l9.2-9.2M17 17V7H7" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
