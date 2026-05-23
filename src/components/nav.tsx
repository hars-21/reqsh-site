import Link from 'next/link';

export default function Nav() {
  return (
    <nav
      className="sticky top-0 z-50 border-b"
      style={{ borderColor: 'var(--border-primary)', backgroundColor: 'var(--bg-primary)' }}
    >
      <div
        className="mx-auto flex items-center justify-between"
        style={{
          maxWidth: 'var(--max-width)',
          height: 'var(--nav-height)',
          padding: '0 var(--space-3)',
        }}
      >
        <Link
          href="/"
          className="font-mono text-lg font-bold tracking-tight"
          style={{ color: 'var(--text-primary)' }}
        >
          reqsh
        </Link>

        <div className="flex items-center" style={{ gap: 'var(--space-4)' }}>
          <Link
            href="/docs"
            className="text-sm font-medium"
            style={{ color: 'var(--text-secondary)' }}
          >
            Docs
          </Link>
          <Link
            href="/install"
            className="text-sm font-medium"
            style={{ color: 'var(--text-secondary)' }}
          >
            Install
          </Link>
          <a
            href="https://github.com/hars-21/reqsh"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium"
            style={{ color: 'var(--text-secondary)' }}
          >
            GitHub
            <span className="ml-1" aria-hidden="true">
              ↗
            </span>
          </a>
        </div>
      </div>
    </nav>
  );
}
