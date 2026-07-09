import Link from 'next/link';
import Image from 'next/image';
import { Star } from 'lucide-react';

export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 bg-ink border-b border-ink-border">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link
          href="/"
          className="flex items-center gap-3 group"
          aria-label="reqsh home"
        >
          <Image
            src="/logo.png"
            alt=""
            width={28}
            height={28}
            className="rounded-md"
          />
          <span className="font-mono text-lg font-semibold tracking-tight text-ink-foreground transition-snappy group-hover:text-accent">
            reqsh
          </span>
        </Link>

        <div className="flex items-center gap-5 md:gap-8">
          <Link
            href="/docs"
            className="text-sm font-medium text-ink-muted transition-snappy hover:text-ink-foreground"
          >
            Docs
          </Link>
          <Link
            href="/install"
            className="text-sm font-medium text-ink-muted transition-snappy hover:text-ink-foreground"
          >
            Install
          </Link>
          <Link
            href="/changelog"
            className="hidden sm:inline text-sm font-medium text-ink-muted transition-snappy hover:text-ink-foreground"
          >
            What&apos;s New
          </Link>
          <a
            href="https://github.com/hars-21/reqsh"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-ink-soft border border-ink-border px-3.5 py-2 text-sm font-medium text-ink-foreground transition-snappy hover:border-accent hover:text-accent"
          >
            <Star size={14} aria-hidden="true" />
            <span>GitHub</span>
            <span className="hidden sm:inline text-xs text-ink-muted">26</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
