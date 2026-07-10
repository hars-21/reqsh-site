'use client';

import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    React.startTransition(() => {
      setMounted(true);
    });
  }, []);

  const isDark = resolvedTheme === 'dark';

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-muted text-muted-foreground transition-snappy hover:text-foreground hover:border-foreground/20"
      aria-label={mounted ? `Switch to ${isDark ? 'light' : 'dark'} theme` : 'Toggle theme'}
    >
      {mounted ? (
        isDark ? (
          <Sun size={15} className="stroke-current" />
        ) : (
          <Moon size={15} className="stroke-current" />
        )
      ) : (
        <span className="size-4" />
      )}
    </button>
  );
}
