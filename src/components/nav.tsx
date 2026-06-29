import Link from 'next/link';
import Image from 'next/image';
import { Star } from 'lucide-react';

export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 bg-[#000000]/90 backdrop-blur-md border-b border-white/4">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3 group">
          <Image src="/logo.png" alt="reqsh logo" width={32} height={32} className="rounded-lg" />
          <span className="font-mono text-xl font-semibold tracking-tight text-white group-hover:text-accent transition-snappy">
            reqsh
          </span>
        </Link>
        <div className="flex items-center gap-8">
          <Link
            href="/docs"
            className="text-sm font-medium text-[#888888] hover:text-white transition-snappy"
          >
            Docs
          </Link>
          <Link
            href="/install"
            className="text-sm font-medium text-[#888888] hover:text-white transition-snappy"
          >
            Install
          </Link>
          <a
            href="https://github.com/hars-21/reqsh"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-[#888888] hover:text-white transition-snappy group"
          >
            <Star size={15} className="group-hover:text-accent transition-snappy" />
            <span>GitHub</span>
            <span className="hidden sm:inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs text-[#888888] group-hover:text-white group-hover:border-white/20 transition-snappy">
              <Star size={10} className="fill-current" /> 26
            </span>
          </a>
        </div>
      </div>
    </nav>
  );
}
