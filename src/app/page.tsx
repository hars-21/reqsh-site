import Link from 'next/link';
import TerminalDemo from '@/components/terminal-demo';

export default function Home() {
  return (
    <div className="mx-auto" style={{ maxWidth: 'var(--max-width)', padding: '0 var(--space-3)' }}>
      {/* ───── Hero ───── */}
      <section style={{ paddingTop: 'var(--space-12)', paddingBottom: 'var(--space-12)' }}>
        <h1
          className="text-4xl md:text-5xl font-bold tracking-tight"
          style={{ color: 'var(--text-primary)', maxWidth: '36rem', lineHeight: '1.15' }}
        >
          An interactive shell for HTTP requests
        </h1>
        <p
          className="text-lg"
          style={{
            color: 'var(--text-secondary)',
            marginTop: 'var(--space-3)',
            maxWidth: '40rem',
            lineHeight: '1.7',
          }}
        >
          reqsh is a terminal-based REPL for sending HTTP requests. Set a base URL, add headers,
          send requests, and re-run them from history. Built in Rust.
        </p>
        <div
          className="flex flex-wrap"
          style={{ gap: 'var(--space-2)', marginTop: 'var(--space-4)' }}
        >
          <Link
            href="/install"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium"
            style={{
              padding: 'var(--space-1) var(--space-3)',
              backgroundColor: 'var(--text-primary)',
              color: 'var(--bg-primary)',
            }}
          >
            Install
          </Link>
          <Link
            href="/docs"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium border"
            style={{
              padding: 'var(--space-1) var(--space-3)',
              borderColor: 'var(--border-secondary)',
              color: 'var(--text-secondary)',
            }}
          >
            View Docs
          </Link>
        </div>
      </section>

      {/* ───── Terminal Demo ───── */}
      <section style={{ paddingBottom: 'var(--space-16)' }}>
        <TerminalDemo />
      </section>

      {/* ───── Capabilities ───── */}
      <section style={{ paddingBottom: 'var(--space-16)' }}>
        <h2
          className="text-2xl font-bold tracking-tight"
          style={{ color: 'var(--text-primary)', marginBottom: 'var(--space-6)' }}
        >
          What it does
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: 'var(--space-4)' }}>
          <Capability
            title="Interactive REPL"
            description="A persistent shell session. Set your base URL and headers once, then send requests without repeating configuration."
          />
          <Capability
            title="HTTP Methods"
            description="Supports GET, POST, PUT, and DELETE. Add headers and a JSON body to any request."
          />
          <Capability
            title="History & Re-run"
            description="Every command is saved to history. Browse past commands with `history` and re-execute any entry with `rerun <id>`."
          />
          <Capability
            title="Tab Completion & Vi Mode"
            description="Autocomplete for all commands and methods. Vi keybindings for line editing."
          />
        </div>
      </section>

      {/* ───── How It Works ───── */}
      <section style={{ paddingBottom: 'var(--space-16)' }}>
        <h2
          className="text-2xl font-bold tracking-tight"
          style={{ color: 'var(--text-primary)', marginBottom: 'var(--space-6)' }}
        >
          How it works
        </h2>
        <div className="flex flex-col" style={{ gap: 'var(--space-4)' }}>
          <Step number={1} title="Start the shell" code="reqsh" />
          <Step number={2} title="Set your base URL" code="base https://api.example.com" />
          <Step number={3} title="Send a request" code="GET /users  →  ::send" />
        </div>
      </section>

      {/* ───── Open Source ───── */}
      <section
        className="border-t"
        style={{
          borderColor: 'var(--border-primary)',
          paddingTop: 'var(--space-8)',
          paddingBottom: 'var(--space-8)',
        }}
      >
        <h2
          className="text-xl font-bold tracking-tight"
          style={{ color: 'var(--text-primary)', marginBottom: 'var(--space-2)' }}
        >
          Open source, built in Rust
        </h2>
        <p
          className="text-sm"
          style={{
            color: 'var(--text-secondary)',
            marginBottom: 'var(--space-3)',
            maxWidth: '32rem',
          }}
        >
          reqsh is free and open source. Contributions, issues, and feedback are welcome.
        </p>
        <a
          href="https://github.com/hars-21/reqsh"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-sm font-medium"
          style={{ color: 'var(--text-primary)' }}
        >
          View on GitHub{' '}
          <span className="ml-1" aria-hidden="true">
            ↗
          </span>
        </a>
      </section>
    </div>
  );
}

function Capability({ title, description }: { title: string; description: string }) {
  return (
    <div
      className="rounded-lg border"
      style={{ borderColor: 'var(--border-primary)', padding: 'var(--space-3)' }}
    >
      <h3
        className="text-base font-semibold"
        style={{ color: 'var(--text-primary)', marginBottom: 'var(--space-1)' }}
      >
        {title}
      </h3>
      <p className="text-sm" style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
        {description}
      </p>
    </div>
  );
}

function Step({ number, title, code }: { number: number; title: string; code: string }) {
  return (
    <div className="flex items-start" style={{ gap: 'var(--space-2)' }}>
      <div
        className="flex-none w-7 h-7 rounded-full flex items-center justify-center text-sm font-mono font-bold border"
        style={{ borderColor: 'var(--border-secondary)', color: 'var(--text-secondary)' }}
      >
        {number}
      </div>
      <div>
        <div className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
          {title}
        </div>
        <code className="text-sm font-mono" style={{ color: 'var(--text-tertiary)' }}>
          {code}
        </code>
      </div>
    </div>
  );
}
