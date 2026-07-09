import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="mx-auto flex flex-col items-center justify-center min-h-[70vh] px-6 text-center">
      <p className="font-mono text-sm text-muted mb-6">
        <span className="text-accent font-semibold">reqsh&gt;</span> GET /this-page
      </p>
      <h1 className="font-serif text-8xl md:text-9xl tracking-tight text-foreground">
        4<em className="text-accent">0</em>4
      </h1>
      <h2 className="mt-6 text-xl font-semibold tracking-tight text-foreground">
        Command not found
      </h2>
      <p className="mt-4 text-muted max-w-md leading-relaxed text-pretty">
        The page you are looking for doesn&apos;t exist or has been moved. Let&apos;s get you back
        to safety.
      </p>
      <Link
        href="/"
        className="mt-10 group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-accent px-8 py-3 text-sm font-semibold text-card transition-snappy hover:bg-accent-strong"
      >
        <ArrowLeft
          size={16}
          className="transition-transform group-hover:-translate-x-0.5"
          aria-hidden="true"
        />
        Back to home
      </Link>
    </div>
  );
}
