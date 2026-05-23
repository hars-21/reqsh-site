import Link from 'next/link';

export default function Footer() {
  return (
    <footer
      className="border-t"
      style={{ borderColor: 'var(--border-primary)', marginTop: 'var(--space-16)' }}
    >
      <div
        className="mx-auto"
        style={{ maxWidth: 'var(--max-width)', padding: 'var(--space-8) var(--space-3)' }}
      >
        <div className="grid grid-cols-2 sm:grid-cols-3" style={{ gap: 'var(--space-8)' }}>
          {/* Product */}
          <div>
            <h3
              className="text-sm font-semibold"
              style={{ color: 'var(--text-primary)', marginBottom: 'var(--space-3)' }}
            >
              Product
            </h3>
            <ul className="flex flex-col" style={{ gap: 'var(--space-2)' }}>
              <li>
                <Link href="/" className="text-sm" style={{ color: 'var(--text-tertiary)' }}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/docs" className="text-sm" style={{ color: 'var(--text-tertiary)' }}>
                  Docs
                </Link>
              </li>
              <li>
                <Link href="/install" className="text-sm" style={{ color: 'var(--text-tertiary)' }}>
                  Install
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3
              className="text-sm font-semibold"
              style={{ color: 'var(--text-primary)', marginBottom: 'var(--space-3)' }}
            >
              Resources
            </h3>
            <ul className="flex flex-col" style={{ gap: 'var(--space-2)' }}>
              <li>
                <a
                  href="https://github.com/hars-21/reqsh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm"
                  style={{ color: 'var(--text-tertiary)' }}
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/hars-21/reqsh/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm"
                  style={{ color: 'var(--text-tertiary)' }}
                >
                  Issues
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/hars-21/reqsh/blob/main/LICENSE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm"
                  style={{ color: 'var(--text-tertiary)' }}
                >
                  License
                </a>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3
              className="text-sm font-semibold"
              style={{ color: 'var(--text-primary)', marginBottom: 'var(--space-3)' }}
            >
              Community
            </h3>
            <ul className="flex flex-col" style={{ gap: 'var(--space-2)' }}>
              <li>
                <a
                  href="https://github.com/hars-21/reqsh/blob/main/CONTRIBUTING.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm"
                  style={{ color: 'var(--text-tertiary)' }}
                >
                  Contributing
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/hars-21/reqsh/releases"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm"
                  style={{ color: 'var(--text-tertiary)' }}
                >
                  Releases
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="border-t text-sm"
          style={{
            borderColor: 'var(--border-primary)',
            marginTop: 'var(--space-8)',
            paddingTop: 'var(--space-4)',
            color: 'var(--text-tertiary)',
          }}
        >
          © {new Date().getFullYear()} reqsh — Open source.
        </div>
      </div>
    </footer>
  );
}
