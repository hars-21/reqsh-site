import Link from 'next/link';
import { Star } from 'lucide-react';

export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#0a0a0a]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-4xl items-center justify-between px-6">
        <Link href="/" className="font-mono text-lg font-bold tracking-tight">
          reqsh
        </Link>
        <div className="flex items-center gap-6">
          <Link
            href="/docs"
            className="text-sm text-neutral-400 hover:text-white transition-colors"
          >
            Docs
          </Link>
          <Link
            href="/install"
            className="text-sm text-neutral-400 hover:text-white transition-colors"
          >
            Install
          </Link>
          <a
            href="https://github.com/hars-21/reqsh"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-lg border border-white/[0.08] bg-white/[0.02] px-3 py-1.5 text-xs text-neutral-400 hover:text-white hover:border-white/[0.15] transition-all"
          >
            <Star size={13} />
            Star
          </a>
        </div>
      </div>
    </nav>
  );
}
