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
    <div className="group relative overflow-hidden rounded-2xl border border-terminal-border bg-terminal shadow-[0_0_100px_-20px_color-mix(in_srgb,var(--accent)_25%,transparent)] transition-snappy hover:shadow-[0_0_120px_-20px_color-mix(in_srgb,var(--accent)_35%,transparent)]">
      <div className="flex items-center justify-between border-b border-terminal-border px-5 py-3.5">
        <div className="flex gap-2">
          <div className="h-3 w-3 rounded-full bg-[#FF5F56]" />
          <div className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
          <div className="h-3 w-3 rounded-full bg-[#27C93F]" />
        </div>
        <div className="pointer-events-none absolute inset-x-0 top-0 flex h-11 items-center justify-center">
          <span className="text-xs font-medium tracking-widest text-terminal-muted uppercase">
            reqsh
          </span>
        </div>
        <button
          onClick={handleCopy}
          className="relative z-10 rounded-md p-1.5 text-terminal-muted opacity-0 transition-snappy group-hover:opacity-100 hover:bg-white/10 hover:text-terminal-foreground"
          aria-label="Copy demo commands"
        >
          {copied ? <Check size={16} className="text-terminal-accent" /> : <Copy size={16} />}
        </button>
      </div>

      <div className="overflow-x-auto p-6 font-mono text-sm leading-8 md:p-8">
        <Prompt shell="reqsh">
          <span className="text-terminal-foreground">base</span>
          <span className="text-terminal-muted">https://api.example.com</span>
        </Prompt>
        <Prompt shell="reqsh">
          <span className="text-terminal-foreground">header</span>
          <span className="text-terminal-muted">Authorization Bearer tok_abc</span>
        </Prompt>

        <div className="mt-6" />
        <Prompt shell="reqsh">
          <span className="font-semibold text-terminal-accent">GET</span>
          <span className="text-terminal-foreground">/users</span>
        </Prompt>
        <Prompt shell=".....">
          <span className="text-terminal-foreground">::send</span>
        </Prompt>

        <div className="mt-2 font-medium tracking-wide text-terminal-success">
          HTTP/1.1 200 OK <span className="font-normal text-terminal-muted">- 142ms</span>
        </div>
        <div className="mb-2 text-terminal-muted">content-type: application/json</div>
        <pre className="mt-1 text-terminal-foreground">{`[
  { "id": 1, "name": "Alice" },
  { "id": 2, "name": "Bob" }
]`}</pre>

        <div className="mt-6" />
        <Prompt shell="reqsh">
          <span className="text-terminal-foreground">history</span>
        </Prompt>
        <div className="mt-1 leading-6 text-terminal-muted">
          <div>base https://api.example.com</div>
          <div>header Authorization Bearer tok_abc</div>
          <div>GET /users</div>
        </div>

        <div className="mt-6" />
        <Prompt shell="reqsh">
          <span className="text-terminal-foreground">rerun</span>
          <span className="text-terminal-muted">3</span>
        </Prompt>
        <div className="mt-2 font-medium tracking-wide text-terminal-success">
          HTTP/1.1 200 OK <span className="font-normal text-terminal-muted">- 98ms</span>
        </div>

        <div className="mt-6 flex items-center">
          <span className="font-bold text-terminal-accent">reqsh&gt;&nbsp;</span>
          <span className="animate-blink h-5 w-2 bg-terminal-foreground" />
        </div>
      </div>
    </div>
  );
}

function Prompt({ shell, children }: { shell: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-2 whitespace-pre">
      <span className="font-bold text-terminal-accent">{shell}&gt;</span>
      {children}
    </div>
  );
}
