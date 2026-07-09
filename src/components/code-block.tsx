'use client';
import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

export default function CodeBlock({ lines }: { lines: string[] }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const cleanText = lines
      .map((line) => line.replace(/^(reqsh>\s+|\.\.\.\.\.>\s+)/, ''))
      .join('\n');
    navigator.clipboard.writeText(cleanText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const highlightLine = (line: string) => {
    if (line.startsWith('#')) {
      return <span className="text-ink-muted">{line}</span>;
    }

    const words = line.split(/(\s+)/);
    return words.map((word, i) => {
      if (['GET', 'POST', 'PUT', 'PATCH', 'DELETE'].includes(word)) {
        return (
          <span key={i} className="text-accent font-semibold">
            {word}
          </span>
        );
      }
      if (['curl', 'git', 'cargo', 'mv', 'chmod', 'reqsh'].includes(word)) {
        return (
          <span key={i} className="text-ink-foreground font-semibold">
            {word}
          </span>
        );
      }
      if (word === 'reqsh>' || word === '.....>') {
        return (
          <span key={i} className="text-accent font-semibold">
            {word}
          </span>
        );
      }
      if (word.startsWith('https://') || word.startsWith('http://') || word.startsWith('/')) {
        return (
          <span key={i} className="text-ink-foreground">
            {word}
          </span>
        );
      }
      if (word.startsWith('-')) {
        return (
          <span key={i} className="text-ink-muted">
            {word}
          </span>
        );
      }
      return (
        <span key={i} className="text-ink-foreground/75">
          {word}
        </span>
      );
    });
  };

  return (
    <div className="relative group rounded-xl bg-ink border border-ink-border font-mono text-[15px] leading-relaxed overflow-hidden shadow-[0_1px_8px_-2px_rgba(38,33,29,0.15)]">
      <div className="overflow-x-auto p-5">
        {lines.map((line, i) => (
          <div key={i} className="whitespace-pre">
            {highlightLine(line)}
          </div>
        ))}
      </div>
      <button
        onClick={handleCopy}
        className="absolute top-3.5 right-3.5 p-2 rounded-lg cursor-pointer text-ink-muted opacity-0 group-hover:opacity-100 focus-visible:opacity-100 transition-snappy hover:bg-ink-soft hover:text-ink-foreground"
        aria-label="Copy code"
      >
        {copied ? <Check size={16} className="text-accent" /> : <Copy size={16} />}
      </button>
    </div>
  );
}
