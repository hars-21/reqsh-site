import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="mx-auto flex flex-col items-center justify-center min-h-[70vh] px-6 text-center">
      <h1 className="text-8xl md:text-9xl font-bold tracking-tighter text-white drop-shadow-[0_0_80px_rgba(255,51,51,0.2)]">
        404
      </h1>
      <h2 className="mt-8 text-2xl font-bold tracking-tight text-white">Command not found</h2>
      <p className="mt-4 text-[#888888] text-lg max-w-md leading-relaxed">
        The page you are looking for doesn&apos;t exist or has been moved. Let&apos;s get you back
        to safety.
      </p>
      <Link
        href="/"
        className="mt-10 group flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-3.5 text-sm font-bold text-white transition-snappy hover:brightness-110 hover:shadow-[0_0_30px_-5px_rgba(255,51,51,0.4)]"
      >
        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-snappy" />
        Back to Home
      </Link>
    </div>
  );
}
