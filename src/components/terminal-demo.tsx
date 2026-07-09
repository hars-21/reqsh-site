'use client';
import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

export default function TerminalDemo() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const text = `base https://api.example.com
header Authorization Bearer tok_abc
GET /users
::send
history
rerun 3`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group rounded-2xl bg-ink text-ink-foreground shadow-[0_2px_24px_-8px_rgba(38,33,29,0.25)] overflow-hidden border border-ink-border">
      <div className="relative flex items-center justify-between px-5 py-3.5 border-b border-ink-border">
        <div className="flex gap-2" aria-hidden="true">
          <div className="w-3 h-3 rounded-full bg-ink-soft border border-ink-border" />
          <div className="w-3 h-3 rounded-full bg-ink-soft border border-ink-border" />
          <div className="w-3 h-3 rounded-full bg-ink-soft border border-ink-border" />
        </div>
        <span className="absolute inset-x-0 text-center pointer-events-none text-xs text-ink-muted font-mono tracking-widest">
          reqsh
        </span>
        <button
          onClick={handleCopy}
          className="relative z-10 p-1.5 rounded-md text-ink-muted transition-snappy hover:bg-ink-soft hover:text-ink-foreground"
          aria-label="Copy demo commands"
        >
          {copied ? <Check size={15} className="text-accent" /> : <Copy size={15} />}
        </button>
      </div>

      <div className="p-6 md:p-8 font-mono text-sm leading-7 overflow-x-auto">
        <Prompt shell="reqsh">
          <span className="text-ink-foreground">base</span>
          <span className="text-ink-muted">https://api.example.com</span>
        </Prompt>
        <Prompt shell="reqsh">
          <span className="text-ink-foreground">header</span>
          <span className="text-ink-muted">Authorization Bearer tok_abc</span>
        </Prompt>

        <div className="mt-5" />
        <Prompt shell="reqsh">
          <span className="text-accent font-semibold">GET</span>
          <span className="text-ink-foreground">/users</span>
        </Prompt>
        <Prompt shell=".....">
          <span className="text-ink-foreground">::send</span>
        </Prompt>

        <div className="mt-2 text-[#8fbf7f] font-medium">
          HTTP/1.1 200 OK <span className="text-ink-muted font-normal">- 142ms</span>
        </div>
        <div className="text-ink-muted mb-2">content-type: application/json</div>
        <pre className="text-ink-foreground/90 mt-1">{`[
  { "id": 1, "name": "Alice" },
  { "id": 2, "name": "Bob" }
]`}</pre>

        <div className="mt-5" />
        <Prompt shell="reqsh">
          <span className="text-ink-foreground">history</span>
        </Prompt>
        <div className="text-ink-muted mt-1 leading-6">
          <div>base https://api.example.com</div>
          <div>header Authorization Bearer tok_abc</div>
          <div>GET /users</div>
        </div>

        <div className="mt-5" />
        <Prompt shell="reqsh">
          <span className="text-ink-foreground">rerun</span>
          <span className="text-ink-muted">3</span>
        </Prompt>
        <div className="mt-2 text-[#8fbf7f] font-medium">
          HTTP/1.1 200 OK <span className="text-ink-muted font-normal">- 98ms</span>
        </div>

        <div className="mt-5 flex items-center">
          <span className="text-accent font-semibold">reqsh&gt;&nbsp;</span>
          <span className="w-2 h-4.5 bg-ink-foreground/80 animate-blink" aria-hidden="true" />
        </div>
      </div>
    </div>
  );
}

function Prompt({ shell, children }: { shell: string; children: React.ReactNode }) {
  return (
    <div className="flex whitespace-pre gap-2">
      <span className="text-accent font-semibold">{shell}&gt;</span>
      {children}
    </div>
  );
}
