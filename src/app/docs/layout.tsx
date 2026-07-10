'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowLeft, ArrowRight, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { docs } from '@/lib/docs-config';
import { cn } from '@/lib/utils';

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const items = docs.map((doc) => ({
    title: doc.title,
    href: doc.slug ? `/docs/${doc.slug}` : '/docs',
  }));

  const currentIndex = items.findIndex((item) => item.href === pathname);
  const prevItem = currentIndex > 0 ? items[currentIndex - 1] : null;
  const nextItem = currentIndex < items.length - 1 ? items[currentIndex + 1] : null;

  return (
    <div className="mx-auto max-w-7xl px-6">
      <div className="flex min-h-[calc(100svh-3.5rem)] gap-8 lg:gap-12">
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="fixed bottom-4 right-4 z-50 flex size-10 items-center justify-center rounded-full border border-border bg-background shadow-lg lg:hidden"
          aria-label="Toggle navigation"
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>

        {mobileOpen && (
          <div
            className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm lg:hidden"
            onClick={() => setMobileOpen(false)}
          />
        )}

        <aside
          className={cn(
            'fixed top-14 bottom-0 z-40 flex w-60 flex-col border-r border-border/60 bg-background transition-transform lg:sticky lg:translate-x-0 lg:shrink-0',
            mobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
          )}
          style={{ height: 'calc(100svh - 3.5rem)' }}
        >
          <nav className="flex flex-1 flex-col gap-0.5 overflow-y-auto px-3 py-6">
            {items.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    'rounded-md px-2.5 py-1.5 text-sm transition-colors',
                    isActive
                      ? 'font-medium text-accent'
                      : 'text-muted-foreground hover:text-foreground'
                  )}
                >
                  {item.title}
                </Link>
              );
            })}
          </nav>
        </aside>

        <main className="flex min-w-0 flex-1 flex-col py-10">
          <article className="max-w-2xl">{children}</article>

          <div className="mt-16 border-t border-border pt-6">
            <div className="flex items-center gap-4">
              {prevItem ? (
                <Link
                  href={prevItem.href}
                  className="group flex-1 flex items-center gap-3 rounded-lg border border-border/60 px-4 py-3 transition-colors hover:border-border hover:bg-muted/30"
                >
                  <ArrowLeft
                    size={14}
                    className="text-muted-foreground transition-colors group-hover:text-foreground"
                  />
                  <div className="flex flex-col">
                    <span className="text-[11px] text-muted-foreground">Previous</span>
                    <span className="text-sm font-medium text-foreground">{prevItem.title}</span>
                  </div>
                </Link>
              ) : (
                <div className="flex-1" />
              )}

              {nextItem ? (
                <Link
                  href={nextItem.href}
                  className="group flex-1 flex items-center justify-end gap-3 rounded-lg border border-border/60 px-4 py-3 transition-colors hover:border-border hover:bg-muted/30"
                >
                  <div className="flex flex-col text-right">
                    <span className="text-[11px] text-muted-foreground">Next</span>
                    <span className="text-sm font-medium text-foreground">{nextItem.title}</span>
                  </div>
                  <ArrowRight
                    size={14}
                    className="text-muted-foreground transition-colors group-hover:text-foreground"
                  />
                </Link>
              ) : (
                <div className="flex-1" />
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
