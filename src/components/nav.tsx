import Link from 'next/link';
import Image from 'next/image';
import { Star } from 'lucide-react';
import ThemeToggle from '@/components/theme-toggle';

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 px-4 pt-4">
      <nav className="mx-auto flex h-14 max-w-5xl items-center justify-between rounded-2xl border border-border bg-background/80 px-4 backdrop-blur-xl md:px-5">
        <Link href="/" className="group flex items-center gap-2.5">
          <Image src="/logo.png" alt="reqsh logo" width={28} height={28} className="rounded-lg" />
          <span className="font-mono text-lg font-semibold tracking-tight text-foreground transition-snappy group-hover:text-accent">
            reqsh
          </span>
        </Link>

        <div className="flex items-center gap-1 md:gap-2">
          <Link
            href="/docs"
            className="rounded-lg px-3 py-1.5 text-sm font-medium text-muted-foreground transition-snappy hover:bg-muted hover:text-foreground"
          >
            Docs
          </Link>
          <Link
            href="/install"
            className="rounded-lg px-3 py-1.5 text-sm font-medium text-muted-foreground transition-snappy hover:bg-muted hover:text-foreground"
          >
            Install
          </Link>
          <Link
            href="/changelog"
            className="hidden rounded-lg px-3 py-1.5 text-sm font-medium text-muted-foreground transition-snappy hover:bg-muted hover:text-foreground sm:block"
          >
            Changelog
          </Link>

          <div className="mx-1 hidden h-5 w-px bg-border sm:block" />

          <a
            href="https://github.com/hars-21/reqsh"
            target="_blank"
            rel="noopener noreferrer"
            className="group hidden items-center gap-1.5 rounded-lg border border-border bg-muted px-3 py-1.5 text-sm font-medium text-muted-foreground transition-snappy hover:text-foreground hover:border-foreground/20 sm:flex"
          >
            <Star size={13} className="stroke-current transition-snappy group-hover:text-accent" />
            <span className="font-mono text-xs">28</span>
            <span className="sr-only">stars on GitHub</span>
          </a>

          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
