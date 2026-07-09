import Link from 'next/link';
import { ArrowRight, Terminal, History, Braces, Gauge } from 'lucide-react';
import TerminalDemo from '@/components/terminal-demo';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="mx-auto max-w-6xl px-6 pt-24 md:pt-36 pb-16 md:pb-20">
        <div className="flex flex-col items-center text-center">
          <p className="mb-8 font-mono text-xs tracking-widest uppercase text-muted animate-fade-up">
            An interactive HTTP shell, built in Rust
          </p>

          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight text-foreground max-w-4xl text-balance animate-fade-up">
            A <em className="text-accent">calmer</em> way to work with HTTP
          </h1>

          <p className="mt-8 text-base md:text-lg text-muted leading-relaxed max-w-2xl text-pretty animate-fade-up-delay-1">
            Set a base URL once. Keep your headers. Use variables, save requests, and replay them
            from history — all from a quiet, focused terminal session.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4 animate-fade-up-delay-2">
            <Link
              href="/install"
              className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-accent px-8 py-3 text-sm font-semibold text-card transition-snappy hover:bg-accent-strong"
            >
              Install reqsh
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
            <Link
              href="/docs"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-border bg-card px-8 py-3 text-sm font-semibold text-foreground transition-snappy hover:border-accent hover:text-accent"
            >
              Read the docs
            </Link>
          </div>
        </div>
      </section>

      {/* Terminal Demo */}
      <section className="mx-auto max-w-4xl px-6 mb-24 md:mb-36" aria-label="reqsh demo">
        <TerminalDemo />
      </section>

      {/* Feature overview cards */}
      <section className="mx-auto max-w-6xl px-6 mb-24 md:mb-36">
        <div className="max-w-2xl mb-12 md:mb-16">
          <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-foreground text-balance">
            Everything stays where you left it
          </h2>
          <p className="mt-5 text-muted leading-relaxed text-pretty">
            reqsh is a persistent REPL, not a one-shot command. Your session remembers context so
            you can focus on the request, not the boilerplate.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <FeatureCard
            icon={<Terminal size={20} aria-hidden="true" />}
            title="Persistent session"
            description="Set your base URL and auth headers once. Every request that follows uses them automatically."
          />
          <FeatureCard
            icon={<History size={20} aria-hidden="true" />}
            title="History & rerun"
            description="Every command is numbered and saved. Replay any request instantly with rerun."
          />
          <FeatureCard
            icon={<Braces size={20} aria-hidden="true" />}
            title="Variables & templates"
            description="Interpolate values into paths, headers, and bodies. Save named requests and run them again."
          />
          <FeatureCard
            icon={<Gauge size={20} aria-hidden="true" />}
            title="Fast by default"
            description="Written in Rust. Instant startup, minimal memory, and response timing on every request."
          />
        </div>
      </section>

      {/* Feature 1: Persistent REPL */}
      <FeatureSection
        label="Persistent state"
        title="Say it once, use it everywhere"
        description="Stop typing the same host and authentication headers over and over. Set your base URL and headers at the start of a session — every subsequent request picks them up automatically."
        snippet={
          <>
            <SnippetLine prompt="reqsh">
              <span className="text-ink-foreground">base</span>{' '}
              <span className="text-ink-muted">https://api.stripe.com</span>
            </SnippetLine>
            <SnippetLine prompt="reqsh">
              <span className="text-ink-foreground">header</span>{' '}
              <span className="text-ink-muted">Authorization Bearer sk_test</span>
            </SnippetLine>
            <div className="mt-4" />
            <SnippetLine prompt="reqsh">
              <span className="text-accent font-semibold">GET</span>{' '}
              <span className="text-ink-foreground">/v1/customers</span>
            </SnippetLine>
            <SnippetLine prompt=".....">
              <span className="text-ink-foreground">::send</span>
            </SnippetLine>
          </>
        }
      />

      {/* Feature 2: History */}
      <FeatureSection
        reversed
        label="History"
        title="Nothing you type is lost"
        description={
          <>
            Type <InlineCode>history</InlineCode> to see everything from the current session. Made a
            typo, or need to repeat a request? <InlineCode>rerun &lt;id&gt;</InlineCode> executes it
            again instantly.
          </>
        }
        snippet={
          <>
            <SnippetLine prompt="reqsh">
              <span className="text-ink-foreground">history</span>
            </SnippetLine>
            <div className="mt-2 ml-4 text-ink-muted leading-6">
              <div className="flex gap-4">
                <span className="opacity-60">1</span>
                <span>base https://api.stripe.com</span>
              </div>
              <div className="flex gap-4">
                <span className="opacity-60">2</span>
                <span>header Authorization Bearer sk_test</span>
              </div>
              <div className="flex gap-4">
                <span className="opacity-60">3</span>
                <span>GET /v1/customers</span>
              </div>
            </div>
            <div className="mt-4" />
            <SnippetLine prompt="reqsh">
              <span className="text-ink-foreground">rerun</span>{' '}
              <span className="text-ink-muted">3</span>
            </SnippetLine>
          </>
        }
      />

      {/* Feature 3: Variables & saved requests */}
      <FeatureSection
        label="Dynamic requests"
        title="Variables, saved and replayed"
        description={
          <>
            Use <InlineCode>{'{{name}}'}</InlineCode> syntax to interpolate values into paths,
            headers, and bodies. Save any request with <InlineCode>save</InlineCode> and replay it
            with <InlineCode>run</InlineCode> — timing included on every response.
          </>
        }
        snippet={
          <>
            <SnippetLine prompt="reqsh">
              <span className="text-ink-foreground">set</span>{' '}
              <span className="text-ink-muted">token eyJhbGciOiJIUzI1NiJ9</span>
            </SnippetLine>
            <div className="mt-4" />
            <SnippetLine prompt="reqsh">
              <span className="text-accent font-semibold">GET</span>{' '}
              <span className="text-ink-foreground">/users/</span>
              <span className="text-accent">{'{{token}}'}</span>
            </SnippetLine>
            <SnippetLine prompt=".....">
              <span className="text-ink-foreground">::send</span>
            </SnippetLine>
            <div className="mt-2 text-[#8fbf7f] text-xs">200 OK — 142ms</div>
            <div className="mt-4" />
            <SnippetLine prompt="reqsh">
              <span className="text-ink-foreground">save</span>{' '}
              <span className="text-ink-muted">get-users</span>
            </SnippetLine>
            <SnippetLine prompt="reqsh">
              <span className="text-ink-foreground">run</span>{' '}
              <span className="text-ink-muted">get-users</span>
            </SnippetLine>
          </>
        }
      />

      {/* Closing CTA */}
      <section className="mx-auto max-w-6xl px-6 pt-8 md:pt-16">
        <div className="rounded-3xl bg-accent-soft border border-border px-6 py-16 md:px-16 md:py-20 text-center">
          <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-foreground text-balance">
            Your terminal, <em className="text-accent">a little quieter</em>
          </h2>
          <p className="mt-5 text-muted leading-relaxed max-w-xl mx-auto text-pretty">
            Free, open source, and available for macOS, Linux, and Windows. Install in seconds and
            send your first request right away.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/install"
              className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-accent px-8 py-3 text-sm font-semibold text-card transition-snappy hover:bg-accent-strong"
            >
              Get started
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
            <a
              href="https://github.com/hars-21/reqsh"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-accent/30 bg-card px-8 py-3 text-sm font-semibold text-foreground transition-snappy hover:border-accent hover:text-accent"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl bg-card border border-border p-6 shadow-[0_1px_2px_rgba(38,33,29,0.05)]">
      <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-accent-soft text-accent mb-5">
        {icon}
      </div>
      <h3 className="text-base font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-sm text-muted leading-relaxed">{description}</p>
    </div>
  );
}

function FeatureSection({
  label,
  title,
  description,
  snippet,
  reversed,
}: {
  label: string;
  title: string;
  description: React.ReactNode;
  snippet: React.ReactNode;
  reversed?: boolean;
}) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-14 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
        <div className={reversed ? 'md:order-2' : ''}>
          <p className="mb-4 font-mono text-xs tracking-widest uppercase text-accent">{label}</p>
          <h2 className="font-serif text-3xl md:text-4xl tracking-tight text-foreground mb-5 text-balance">
            {title}
          </h2>
          <p className="text-muted leading-relaxed text-pretty">{description}</p>
        </div>
        <div className={reversed ? 'md:order-1' : ''}>
          <div className="rounded-2xl bg-ink border border-ink-border p-6 md:p-7 font-mono text-sm leading-7 text-ink-muted overflow-x-auto shadow-[0_2px_16px_-6px_rgba(38,33,29,0.2)]">
            {snippet}
          </div>
        </div>
      </div>
    </section>
  );
}

function SnippetLine({ prompt, children }: { prompt: string; children: React.ReactNode }) {
  return (
    <div className="whitespace-pre">
      <span className="text-accent font-semibold">{prompt}&gt;</span> {children}
    </div>
  );
}

function InlineCode({ children }: { children: React.ReactNode }) {
  return (
    <code className="rounded bg-accent-soft px-1.5 py-0.5 font-mono text-[0.85em] text-accent-strong">
      {children}
    </code>
  );
}
