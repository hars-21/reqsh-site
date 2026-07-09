import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import ThemeToggle from '@/components/theme-toggle';

export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 bg-ink border-b border-ink-border">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3 group" aria-label="reqsh home">
          <Image src="/logo.png" alt="" width={28} height={28} className="rounded-md" />
          <span className="font-mono text-lg font-semibold tracking-tight text-ink-foreground transition-snappy group-hover:text-accent">
            reqsh
          </span>
        </Link>

        <div className="flex items-center gap-2 md:gap-4">
          <div className="flex items-center gap-5 md:gap-7 mr-2 md:mr-4">
            <Link
              href="/docs"
              className="text-sm font-medium text-ink-muted transition-snappy hover:text-ink-foreground"
            >
              Docs
            </Link>
            <Link
              href="/changelog"
              className="hidden sm:inline text-sm font-medium text-ink-muted transition-snappy hover:text-ink-foreground"
            >
              Changelog
            </Link>
            <a
              href="https://github.com/hars-21/reqsh"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline text-sm font-medium text-ink-muted transition-snappy hover:text-ink-foreground"
            >
              GitHub
            </a>
          </div>

          <ThemeToggle />

          <Link
            href="/install"
            className="group inline-flex min-h-10 items-center justify-center gap-1.5 rounded-full bg-accent px-5 py-2 text-sm font-semibold text-ink-foreground transition-snappy hover:bg-accent-strong"
          >
            Download
            <ArrowRight
              size={14}
              className="transition-transform group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </nav>
  );
}
