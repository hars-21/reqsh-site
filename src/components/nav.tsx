import Link from 'next/link';
import Image from 'next/image';
import { Star } from 'lucide-react';

export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 bg-black/40 backdrop-blur-xl border-b border-accent/10">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3 group">
          <Image src="/logo.png" alt="reqsh logo" width={32} height={32} className="rounded-lg group-hover:shadow-lg group-hover:shadow-accent/30 transition-all duration-300" />
          <span className="font-mono text-xl font-bold tracking-tight text-white group-hover:text-accent transition-colors duration-300">
            reqsh
          </span>
        </Link>
        <div className="flex items-center gap-6 md:gap-8">
          <Link
            href="/docs"
            className="text-sm font-medium text-slate-300 hover:text-white hover:text-accent transition-colors duration-300"
          >
            Docs
          </Link>
          <Link
            href="/install"
            className="text-sm font-medium text-slate-300 hover:text-white transition-colors duration-300"
          >
            Install
          </Link>
          <Link
            href="/changelog"
            className="text-sm font-medium text-slate-300 hover:text-white transition-colors duration-300"
          >
            What&apos;s New
          </Link>
          <a
            href="https://github.com/hars-21/reqsh"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white transition-colors duration-300 group"
          >
            <Star size={15} className="group-hover:text-accent transition-colors duration-300 group-hover:fill-accent" />
            <span>GitHub</span>
            <span className="hidden sm:inline-flex items-center gap-1 rounded-full border border-accent/20 bg-accent/5 px-2.5 py-0.5 text-xs text-slate-300 group-hover:text-white group-hover:border-accent/40 group-hover:bg-accent/10 transition-all duration-300">
              <Star size={10} className="fill-current" /> 26
            </span>
          </a>
        </div>
      </div>
    </nav>
  );
}
