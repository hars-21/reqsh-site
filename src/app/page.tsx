import Link from 'next/link';
import {
  ArrowRight,
  Zap,
  History,
  Braces,
  Terminal,
  Timer,
  MonitorSmartphone,
} from 'lucide-react';
import TerminalDemo from '@/components/terminal-demo';
import Reveal from '@/components/reveal';

function Eyebrow({ label }: { label: string }) {
  return (
    <div className="flex items-center justify-center gap-4">
      <span className="h-px w-16 bg-gradient-to-r from-transparent to-accent/60 md:w-28" />
      <span className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">{label}</span>
      <span className="h-px w-16 bg-gradient-to-l from-transparent to-accent/60 md:w-28" />
    </div>
  );
}

const highlights = [
  {
    icon: Zap,
    title: 'Instant startup',
    description: 'Written in Rust. Launches in milliseconds with a minimal memory footprint.',
  },
  {
    icon: Terminal,
    title: 'Case-insensitive methods',
    description: 'get, GET, or GeT — reqsh understands all HTTP verbs however you type them.',
  },
  {
    icon: Braces,
    title: 'Pretty-printed output',
    description: 'JSON responses are formatted and colorized automatically. No piping to jq.',
  },
  {
    icon: History,
    title: 'Session history',
    description: 'Every command is recorded. Inspect, replay, or rerun anything instantly.',
  },
  {
    icon: Timer,
    title: 'Built-in timing',
    description: 'Every response includes its latency so you measure performance at a glance.',
  },
  {
    icon: MonitorSmartphone,
    title: 'Cross-platform',
    description: 'One binary for macOS, Linux, and Windows. No runtime, no dependencies.',
  },
];

export default function Home() {
  return (
    <div className="relative">
      <div className="hero-glow pointer-events-none absolute inset-x-0 top-0 -z-10 h-[46rem]" />

      <div className="mx-auto max-w-6xl px-6">
        {/* Hero */}
        <section className="flex flex-col items-center pt-20 pb-16 text-center md:pt-28 md:pb-20">
          <Reveal>
            <Link
              href="/changelog"
              className="group inline-flex items-center gap-2 rounded-full border border-border bg-muted px-4 py-1.5 text-xs font-medium text-muted-foreground transition-snappy hover:border-accent/40 hover:text-foreground"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              v0.2.0 is out
              <ArrowRight
                size={12}
                className="stroke-current transition-snappy group-hover:translate-x-0.5"
              />
            </Link>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="mt-8 max-w-4xl text-5xl leading-[1.04] font-bold tracking-tighter text-balance text-foreground md:text-7xl lg:text-[5.25rem]">
              The interactive shell for <span className="text-accent">HTTP</span> requests.
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-pretty text-muted-foreground md:mt-8 md:text-xl">
              Set a base URL once. Add headers once. Use variables, save requests, and re-run them
              from history. Pure terminal efficiency, built in Rust.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-9 flex flex-wrap justify-center gap-3.5">
              <Link
                href="/install"
                className="group flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3 text-sm font-semibold text-accent-foreground transition-snappy hover:brightness-110 hover:shadow-[0_0_32px_-6px_color-mix(in_srgb,var(--accent)_60%,transparent)]"
              >
                Install reqsh
                <ArrowRight
                  size={15}
                  className="stroke-current transition-snappy group-hover:translate-x-1"
                />
              </Link>
              <Link
                href="/docs"
                className="flex items-center justify-center rounded-full border border-border bg-card px-7 py-3 text-sm font-semibold text-foreground transition-snappy hover:bg-muted"
              >
                Documentation
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.32}>
            <p className="mt-8 font-mono text-xs tracking-wide text-muted-foreground">
              Open source (MIT) · 28 stars on GitHub · 30+ active users
            </p>
          </Reveal>
        </section>

        {/* Terminal demo */}
        <Reveal className="mx-auto mb-28 w-full max-w-4xl md:mb-36" delay={0.1}>
          <TerminalDemo />
        </Reveal>

        {/* Features */}
        <section className="pb-8">
          <Reveal>
            <Eyebrow label="Features" />
            <h2 className="mx-auto mt-6 max-w-2xl text-center text-3xl font-bold tracking-tight text-balance text-foreground md:text-5xl">
              Everything a terminal-first workflow needs.
            </h2>
          </Reveal>
        </section>

        <FeatureRow
          title="A persistent REPL."
          description="Stop typing the same host and authentication headers over and over. Set your base URL and headers once per session — every subsequent request uses them automatically."
        >
          <TerminalCard>
            <Line prompt>
              <Cmd>base</Cmd> <Muted>https://api.stripe.com</Muted>
            </Line>
            <Line prompt>
              <Cmd>header</Cmd> <Muted>Authorization Bearer sk_test</Muted>
            </Line>
            <div className="mt-4" />
            <Line prompt>
              <Method>GET</Method> <Fg>/v1/customers</Fg>
            </Line>
            <Line cont>
              <Fg>::send</Fg>
            </Line>
          </TerminalCard>
        </FeatureRow>

        <FeatureRow
          reverse
          title="Time-travel with history."
          description={
            <>
              Every command is saved. Type <Code>history</Code> to see everything you&apos;ve done
              in the current session. Made a typo or need to repeat a request? Just use{' '}
              <Code>rerun &lt;id&gt;</Code> to execute it instantly.
            </>
          }
        >
          <TerminalCard>
            <Line prompt>
              <Cmd>history</Cmd>
            </Line>
            <div className="mt-2 ml-4 space-y-0.5">
              <div className="flex gap-4">
                <Muted>1</Muted>
                <Muted>base https://api.stripe.com</Muted>
              </div>
              <div className="flex gap-4">
                <Muted>2</Muted>
                <Muted>header Authorization Bearer sk_test</Muted>
              </div>
              <div className="flex gap-4">
                <Muted>3</Muted>
                <Muted>GET /v1/customers</Muted>
              </div>
            </div>
            <div className="mt-4" />
            <Line prompt>
              <Cmd>rerun</Cmd> <Muted>3</Muted>
            </Line>
          </TerminalCard>
        </FeatureRow>

        <FeatureRow
          title="Variables. Save. Run."
          description={
            <>
              Use{' '}
              <Code>
                {'{{'}name{'}}'}
              </Code>{' '}
              syntax to interpolate values into paths, headers, and bodies. Save any request with{' '}
              <Code>save</Code> and replay it instantly with <Code>run</Code>. Every response
              includes its timing.
            </>
          }
        >
          <TerminalCard>
            <Line prompt>
              <Cmd>set</Cmd> <Muted>token eyJhbGciOiJIUzI1NiJ9</Muted>
            </Line>
            <div className="mt-4" />
            <Line prompt>
              <Method>GET</Method>{' '}
              <Fg>
                /users/
                <span className="text-terminal-accent">
                  {'{{'}token{'}}'}
                </span>
              </Fg>
            </Line>
            <Line cont>
              <Fg>::send</Fg>
            </Line>
            <div className="mt-3 text-xs text-terminal-success">200 OK — 142ms</div>
            <div className="mt-5" />
            <Line prompt>
              <Cmd>save</Cmd> <Muted>get-users</Muted>
            </Line>
            <Line prompt>
              <Cmd>run</Cmd> <Muted>get-users</Muted>
            </Line>
          </TerminalCard>
        </FeatureRow>

        {/* Highlights grid */}
        <section className="border-t border-border py-20 md:py-28">
          <Reveal>
            <Eyebrow label="Engineered" />
            <h2 className="mx-auto mt-6 max-w-xl text-center text-3xl font-bold tracking-tight text-balance text-foreground md:text-4xl">
              Small tool. Sharp edges filed off.
            </h2>
          </Reveal>
          <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {highlights.map((item, i) => (
              <Reveal key={item.title} delay={0.05 * i}>
                <div className="group h-full rounded-2xl border border-border bg-card p-6 transition-snappy hover:border-accent/30">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-muted text-accent">
                    <item.icon size={18} className="stroke-current" />
                  </div>
                  <h3 className="mt-5 text-base font-semibold text-card-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden rounded-3xl border border-border bg-card">
          <div className="section-glow pointer-events-none absolute inset-0" />
          <div className="relative flex flex-col items-center px-6 py-20 text-center md:py-28">
            <Reveal>
              <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-balance text-foreground md:text-5xl">
                Ready to leave curl flags behind?
              </h2>
              <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
                One command. No config files, no accounts, no runtime. Just a fast shell for your
                API work.
              </p>
              <div className="mx-auto mt-9 flex max-w-full items-center gap-3 overflow-x-auto rounded-xl border border-terminal-border bg-terminal px-5 py-3.5 font-mono text-sm">
                <span className="text-terminal-accent">$</span>
                <span className="whitespace-nowrap text-terminal-foreground">
                  curl -fsSL https://reqsh.dev/install.sh | sh
                </span>
              </div>
              <div className="mt-8 flex flex-wrap justify-center gap-3.5">
                <Link
                  href="/install"
                  className="group flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3 text-sm font-semibold text-accent-foreground transition-snappy hover:brightness-110"
                >
                  Get started
                  <ArrowRight
                    size={15}
                    className="stroke-current transition-snappy group-hover:translate-x-1"
                  />
                </Link>
                <a
                  href="https://github.com/hars-21/reqsh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center rounded-full border border-border bg-background px-7 py-3 text-sm font-semibold text-foreground transition-snappy hover:bg-muted"
                >
                  Star on GitHub
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </div>
    </div>
  );
}

/* --- Feature row building blocks --- */

function FeatureRow({
  title,
  description,
  children,
  reverse = false,
}: {
  title: string;
  description: React.ReactNode;
  children: React.ReactNode;
  reverse?: boolean;
}) {
  return (
    <section className="border-t border-border py-16 md:py-24">
      <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-20">
        <Reveal className={reverse ? 'md:order-2' : ''}>
          <h3 className="mb-5 text-2xl font-bold tracking-tight text-foreground md:text-4xl">
            {title}
          </h3>
          <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
            {description}
          </p>
        </Reveal>
        <Reveal className={reverse ? 'md:order-1' : ''} delay={0.1}>
          {children}
        </Reveal>
      </div>
    </section>
  );
}

function TerminalCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-terminal-border bg-terminal p-6 font-mono text-sm leading-8 md:p-8">
      {children}
    </div>
  );
}

function Line({
  prompt = false,
  cont = false,
  children,
}: {
  prompt?: boolean;
  cont?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="whitespace-pre">
      <span className="font-bold text-terminal-accent">
        {prompt ? 'reqsh>' : cont ? '.....>' : ''}
      </span>{' '}
      {children}
    </div>
  );
}

function Cmd({ children }: { children: React.ReactNode }) {
  return <span className="font-semibold text-terminal-foreground">{children}</span>;
}

function Fg({ children }: { children: React.ReactNode }) {
  return <span className="text-terminal-foreground">{children}</span>;
}

function Muted({ children }: { children: React.ReactNode }) {
  return <span className="text-terminal-muted">{children}</span>;
}

function Method({ children }: { children: React.ReactNode }) {
  return <span className="font-semibold text-terminal-accent">{children}</span>;
}

function Code({ children }: { children: React.ReactNode }) {
  return (
    <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm text-foreground">
      {children}
    </code>
  );
}
