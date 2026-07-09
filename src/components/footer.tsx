import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="mt-28 md:mt-40 bg-ink text-ink-foreground">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-14">
          <div className="md:col-span-1">
            <div className="inline-flex items-center gap-2.5">
              <Image src="/logo.png" alt="" width={26} height={26} className="rounded-md" />
              <span className="font-mono text-lg font-semibold tracking-tight">reqsh</span>
            </div>
            <p className="mt-4 text-ink-muted leading-relaxed text-sm max-w-xs">
              An interactive, persistent shell for HTTP requests. Built with Rust for speed and
              simplicity.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold mb-5 uppercase tracking-widest text-ink-muted">
              Resources
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <Link
                  href="/docs"
                  className="text-sm text-ink-foreground/80 transition-snappy hover:text-accent"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  href="/install"
                  className="text-sm text-ink-foreground/80 transition-snappy hover:text-accent"
                >
                  Installation
                </Link>
              </li>
              <li>
                <Link
                  href="/changelog"
                  className="text-sm text-ink-foreground/80 transition-snappy hover:text-accent"
                >
                  Changelog
                </Link>
              </li>
              <li>
                <a
                  href="https://github.com/hars-21/reqsh/releases"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-ink-foreground/80 transition-snappy hover:text-accent"
                >
                  Releases (v0.1.5)
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold mb-5 uppercase tracking-widest text-ink-muted">
              Community
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="https://github.com/hars-21/reqsh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-ink-foreground/80 transition-snappy hover:text-accent"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/hars-21/reqsh/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-ink-foreground/80 transition-snappy hover:text-accent"
                >
                  Issues
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/hars-21/reqsh/blob/main/LICENSE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-ink-foreground/80 transition-snappy hover:text-accent"
                >
                  License
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold mb-5 uppercase tracking-widest text-ink-muted">
              About
            </h3>
            <ul className="flex flex-col gap-3 text-sm text-ink-muted">
              <li>Built with Rust</li>
              <li>macOS, Linux &amp; Windows</li>
              <li>MIT License</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-ink-border flex flex-col md:flex-row justify-between items-center gap-3 text-ink-muted text-xs">
          <p>© {new Date().getFullYear()} reqsh. Open source.</p>
          <p className="font-serif italic text-sm">An interactive way to work with HTTP.</p>
        </div>
      </div>
    </footer>
  );
}
