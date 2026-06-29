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
    <div className="relative group rounded-2xl border border-white/8 bg-[#050505] shadow-[0_0_100px_-20px_rgba(255,51,51,0.15)] overflow-hidden transition-snappy hover:shadow-[0_0_120px_-20px_rgba(255,51,51,0.25)] hover:border-white/12">
      <div className="flex items-center justify-between px-5 py-4 border-b border-white/4 bg-surface/50">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-white/10" />
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-white/10" />
          <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-white/10" />
        </div>
        <div className="absolute inset-0 flex justify-center pointer-events-none items-center h-11">
          <span className="text-xs text-[#888888] font-medium tracking-widest uppercase">
            reqsh
          </span>
        </div>
        <button
          onClick={handleCopy}
          className="relative z-10 p-1.5 rounded-md bg-transparent text-[#888888] opacity-0 group-hover:opacity-100 transition-snappy hover:bg-white/10 hover:text-white"
          aria-label="Copy demo commands"
        >
          {copied ? <Check size={16} className="text-accent" /> : <Copy size={16} />}
        </button>
      </div>

      <div className="p-6 md:p-8 font-mono text-sm leading-8 overflow-x-auto selection:bg-accent/30">
        <Prompt shell="reqsh">
          <span className="text-white">base</span>
          <span className="text-[#888888]">https://api.example.com</span>
        </Prompt>
        <Prompt shell="reqsh">
          <span className="text-white">header</span>
          <span className="text-[#888888]">Authorization Bearer tok_abc</span>
        </Prompt>

        <div className="mt-6" />
        <Prompt shell="reqsh">
          <span className="text-accent font-semibold">GET</span>
          <span className="text-white">/users</span>
        </Prompt>
        <Prompt shell=".....">
          <span className="text-white">::send</span>
        </Prompt>

        <div className="mt-2 text-[#4ADE80] font-medium tracking-wide">
          HTTP/1.1 200 OK <span className="text-[#888888] font-normal">- 142ms</span>
        </div>
        <div className="text-[#888888] mb-2">content-type: application/json</div>
        <pre className="text-white mt-1">{`[
  { "id": 1, "name": "Alice" },
  { "id": 2, "name": "Bob" }
]`}</pre>

        <div className="mt-6" />
        <Prompt shell="reqsh">
          <span className="text-white">history</span>
        </Prompt>
        <div className="text-[#888888] mt-1 leading-6">
          <div>base https://api.example.com</div>
          <div>header Authorization Bearer tok_abc</div>
          <div>GET /users</div>
        </div>

        <div className="mt-6" />
        <Prompt shell="reqsh">
          <span className="text-white">rerun</span>
          <span className="text-[#888888]">3</span>
        </Prompt>
        <div className="mt-2 text-[#4ADE80] font-medium tracking-wide">
          HTTP/1.1 200 OK <span className="text-[#888888] font-normal">- 98ms</span>
        </div>

        <div className="mt-6 flex items-center">
          <span className="text-accent font-bold">reqsh&gt;&nbsp;</span>
          <span className="w-2 h-5 bg-white animate-blink" />
        </div>
      </div>
    </div>
  );
}

function Prompt({ shell, children }: { shell: string; children: React.ReactNode }) {
  return (
    <div className="flex whitespace-pre gap-2">
      <span className="text-accent font-bold">{shell}&gt;</span>
      {children}
    </div>
  );
}
