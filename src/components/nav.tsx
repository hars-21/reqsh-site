'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Star, Download } from 'lucide-react';
import { useState, useEffect } from 'react';
import ThemeToggle from '@/components/theme-toggle';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [stars, setStars] = useState<number | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    fetch('https://api.github.com/repos/hars-21/reqsh')
      .then((res) => res.json())
      .then((data) => {
        if (data.stargazers_count) setStars(data.stargazers_count);
      })
      .catch(() => {});
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-background transition-colors ${scrolled ? 'border-b border-border/60' : ''}`}
    >
      <nav
        className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6"
        aria-label="Main navigation"
      >
        <div className="flex items-center gap-1">
          <Link href="/" className="group flex items-center gap-2.5 px-2.5 py-1.5">
            <Image
              src="/logo.png"
              alt="reqsh logo"
              width={24}
              height={24}
              className="rounded-md"
              loading="eager"
            />
            <span className="font-mono text-lg font-semibold tracking-tight text-foreground transition-colors group-hover:text-accent">
              reqsh
            </span>
          </Link>

          <div className="mx-1.5 h-4 w-px bg-border" />
          <Link
            href="/docs"
            className="rounded-md px-2.5 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Docs
          </Link>
        </div>

        <div className="flex items-center gap-0.5">
          <a
            href="https://github.com/hars-21/reqsh"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <Star size={14} className="transition-colors group-hover:text-accent" />
            <span className="font-mono text-xs tabular-nums">{stars !== null ? stars : '—'}</span>
          </a>

          <div className="mx-1.5 h-4 w-px bg-border" />

          <ThemeToggle />

          <div className="mx-1.5 h-4 w-px bg-border" />

          <Link
            href="/docs/install"
            className="mx-2.5 inline-flex items-center gap-1.5 rounded-md bg-foreground px-3 py-1.5 text-xs font-medium text-background transition-colors hover:bg-foreground/90"
          >
            <Download size={13} />
            Install
          </Link>
        </div>
      </nav>
    </header>
  );
}
