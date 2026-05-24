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
      return <span className="text-[#888888]">{line}</span>;
    }

    const words = line.split(/(\s+)/);
    return words.map((word, i) => {
      if (['GET', 'POST', 'PUT', 'DELETE'].includes(word)) {
        return (
          <span key={i} className="text-accent font-semibold">
            {word}
          </span>
        );
      }
      if (['curl', 'git', 'cargo', 'mv', 'chmod', 'reqsh'].includes(word)) {
        return (
          <span key={i} className="text-white font-semibold">
            {word}
          </span>
        );
      }
      if (word === 'reqsh>' || word === '.....>') {
        return (
          <span key={i} className="text-accent font-bold">
            {word}
          </span>
        );
      }
      if (word.startsWith('https://') || word.startsWith('http://') || word.startsWith('/')) {
        return (
          <span key={i} className="text-white">
            {word}
          </span>
        );
      }
      if (word.startsWith('-')) {
        return (
          <span key={i} className="text-[#888888]">
            {word}
          </span>
        );
      }
      return (
        <span key={i} className="text-white/80">
          {word}
        </span>
      );
    });
  };

  return (
    <div className="relative group rounded-xl border border-white/8 bg-[#050505] font-mono text-[15px] leading-relaxed overflow-hidden transition-snappy hover:border-white/15">
      <div className="overflow-x-auto p-5">
        {lines.map((line, i) => (
          <div key={i} className="whitespace-pre">
            {highlightLine(line)}
          </div>
        ))}
      </div>
      <button
        onClick={handleCopy}
        className="absolute top-4 right-4 p-2 rounded-lg cursor-pointer bg-white/5 border border-transparent text-[#888888] opacity-0 group-hover:opacity-100 transition-snappy hover:bg-white/10 hover:text-white hover:border-white/10"
        aria-label="Copy code"
      >
        {copied ? <Check size={16} className="text-accent" /> : <Copy size={16} />}
      </button>
    </div>
  );
}
