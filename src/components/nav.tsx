import Link from 'next/link';
import { Star } from 'lucide-react';
import Image from 'next/image';

export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 bg-[#000000]/90 backdrop-blur-md border-b border-white/4">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 flex items-center justify-center overflow-hidden">
            <Image src="/logo.png" alt="reqsh logo" height={48} width={48} className="rounded-xl" />
          </div>
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
            GitHub
          </a>
        </div>
      </div>
    </nav>
  );
}
