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
      return <span className="text-terminal-muted">{line}</span>;
    }

    const words = line.split(/(\s+)/);
    return words.map((word, i) => {
      if (['GET', 'POST', 'PUT', 'PATCH', 'DELETE'].includes(word)) {
        return (
          <span key={i} className="font-semibold text-terminal-accent">
            {word}
          </span>
        );
      }
      if (['curl', 'git', 'cargo', 'mv', 'chmod', 'reqsh'].includes(word)) {
        return (
          <span key={i} className="font-semibold text-terminal-foreground">
            {word}
          </span>
        );
      }
      if (word === 'reqsh>' || word === '.....>') {
        return (
          <span key={i} className="font-bold text-terminal-accent">
            {word}
          </span>
        );
      }
      if (word.startsWith('https://') || word.startsWith('http://') || word.startsWith('/')) {
        return (
          <span key={i} className="text-terminal-foreground">
            {word}
          </span>
        );
      }
      if (word.startsWith('-')) {
        return (
          <span key={i} className="text-terminal-muted">
            {word}
          </span>
        );
      }
      return (
        <span key={i} className="text-terminal-foreground/80">
          {word}
        </span>
      );
    });
  };

  return (
    <div className="group relative overflow-hidden rounded-xl border border-terminal-border bg-terminal font-mono text-[15px] leading-relaxed transition-snappy hover:border-white/15">
      <div className="overflow-x-auto p-5">
        {lines.map((line, i) => (
          <div key={i} className="whitespace-pre">
            {highlightLine(line)}
          </div>
        ))}
      </div>
      <button
        onClick={handleCopy}
        className="absolute top-4 right-4 cursor-pointer rounded-lg border border-transparent bg-white/5 p-2 text-terminal-muted opacity-0 transition-snappy group-hover:opacity-100 hover:border-white/10 hover:bg-white/10 hover:text-terminal-foreground"
        aria-label="Copy code"
      >
        {copied ? <Check size={16} className="text-terminal-accent" /> : <Copy size={16} />}
      </button>
    </div>
  );
}
