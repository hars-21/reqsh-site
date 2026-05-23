import Link from 'next/link';
import { Terminal, Zap, History, Search, Star } from 'lucide-react';
import TerminalDemo from '@/components/terminal-demo';

export default function Home() {
  return (
    <div className="mx-auto max-w-4xl px-6">
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center pt-20 pb-24">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] bg-gradient-to-b from-white to-neutral-400 bg-clip-text text-transparent">
            An interactive shell for HTTP requests
          </h1>
          <p className="mt-5 text-lg text-neutral-400 leading-relaxed max-w-lg">
            reqsh is a terminal-based REPL for sending HTTP requests. Set a base URL, add headers,
            send requests, and re-run them from history. Built in Rust.
          </p>
          <div className="mt-6 flex gap-3">
            <Link
              href="/install"
              className="rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-white hover:brightness-110 transition"
            >
              Install
            </Link>
            <Link
              href="/docs"
              className="rounded-lg border border-white/[0.1] px-5 py-2.5 text-sm font-medium text-neutral-300 hover:bg-white/[0.04] transition-colors"
            >
              View Docs
            </Link>
          </div>
        </div>
        <TerminalDemo />
      </section>

      <section className="py-20 border-t border-white/[0.06]">
        <h2 className="text-2xl font-semibold tracking-tight mb-8">What it does</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Feature
            icon={Terminal}
            title="Interactive REPL"
            desc="A persistent shell session. Set your base URL and headers once, then send requests without repeating configuration."
          />
          <Feature
            icon={Zap}
            title="HTTP Methods"
            desc="Supports GET, POST, PUT, and DELETE. Add headers and a JSON body to any request."
          />
          <Feature
            icon={History}
            title="History & Re-run"
            desc="Every command is saved to history. Browse past commands and re-execute any entry with rerun."
          />
          <Feature
            icon={Search}
            title="Tab Completion"
            desc="Autocomplete for all commands and HTTP methods. Start typing and press Tab to complete."
          />
        </div>
      </section>

      <section className="py-20 border-t border-white/[0.06]">
        <h2 className="text-2xl font-semibold tracking-tight mb-8">How it works</h2>
        <div className="space-y-5">
          <Step n={1} title="Start the shell" code="reqsh" />
          <Step n={2} title="Set your base URL" code="base https://api.example.com" />
          <Step
            n={3}
            title="Send a request"
            code={
              <>
                GET /users <span className="text-neutral-600">→</span> ::send
              </>
            }
          />
        </div>
      </section>

      <section className="py-20 border-t border-white/[0.06]">
        <h2 className="text-xl font-semibold tracking-tight mb-2">Open source, built in Rust</h2>
        <p className="text-sm text-neutral-400 mb-5 max-w-md">
          reqsh is free and open source. Contributions, issues, and feedback are welcome.
        </p>
        <a
          href="https://github.com/hars-21/reqsh"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-white/[0.08] bg-white/[0.02] px-4 py-2 text-sm text-neutral-300 hover:text-white hover:border-white/[0.15] transition-all"
        >
          <Star size={15} />
          Star on GitHub
        </a>
      </section>
    </div>
  );
}

function Feature({
  icon: Icon,
  title,
  desc,
}: {
  icon: React.ElementType;
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5 hover:border-white/[0.12] hover:bg-white/[0.03] transition-colors">
      <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center mb-3">
        <Icon size={18} className="text-accent" />
      </div>
      <h3 className="font-medium mb-1">{title}</h3>
      <p className="text-sm text-neutral-400 leading-relaxed">{desc}</p>
    </div>
  );
}

function Step({ n, title, code }: { n: number; title: string; code: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3">
      <div className="flex-none w-7 h-7 rounded-full border border-white/[0.1] flex items-center justify-center text-xs font-mono text-neutral-500">
        {n}
      </div>
      <div>
        <div className="text-sm font-medium">{title}</div>
        <code className="text-sm font-mono text-neutral-500">{code}</code>
      </div>
    </div>
  );
}
