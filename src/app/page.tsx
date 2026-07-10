'use client';

import Link from 'next/link';
import { useState } from 'react';
import {
  ArrowRight,
  Zap,
  History,
  Braces,
  Terminal as TerminalIcon,
  Timer,
  Copy,
  Check,
} from 'lucide-react';
import TerminalDemo from '@/components/terminal-demo';
import Reveal from '@/components/reveal';
import { Cmd, Code, FeatureRow, Fg, Line, Method, Muted, TerminalCard } from '@/components/feature';
import {
  StartupVisual,
  CaseInsensitiveVisual,
  PrettyPrintVisual,
  SessionHistoryVisual,
  BuiltInTimingVisual,
} from '@/components/bento-visuals';

export default function Home() {
  const [curlCopied, setCurlCopied] = useState(false);

  const handleCopyCurl = () => {
    const cmd = 'curl -fsSL https://reqsh.dev/install.sh | sh';
    navigator.clipboard.writeText(cmd);
    setCurlCopied(true);
    setTimeout(() => setCurlCopied(false), 2000);
  };

  return (
    <div className="relative">
      <div className="hero-glow pointer-events-none absolute inset-x-0 top-0 -z-10 h-184" />

      <div className="mx-auto max-w-6xl px-6">
        <section
          className="flex flex-col items-center pt-20 pb-16 text-center md:pt-28 md:pb-20"
          aria-labelledby="hero-heading"
        >
          <Reveal delay={0.08}>
            <h1
              id="hero-heading"
              className="mt-8 max-w-4xl text-5xl leading-[1.04] font-bold tracking-tighter text-balance text-foreground md:text-7xl lg:text-[5.25rem]"
            >
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
                href="/docs/install"
                className="group flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3 text-sm font-semibold text-accent-foreground transition-snappy hover:brightness-110 hover:shadow-[0_0_32px_-6px_color-mix(in_oklch,var(--accent)_60%,transparent)]"
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
            <div className="mx-auto mt-9 flex w-120 items-center gap-3 overflow-x-auto rounded-xl border border-terminal-border bg-terminal px-4 py-3.5 font-mono text-sm relative sm:px-5">
              <span className="text-terminal-accent shrink-0">$</span>
              <span className="whitespace-nowrap text-terminal-foreground">
                curl -fsSL https://reqsh.dev/install.sh | sh
              </span>
              <button
                onClick={handleCopyCurl}
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-md p-1.5 text-terminal-muted hover:bg-white/10 hover:text-terminal-foreground transition-colors"
                aria-label="Copy curl command"
              >
                {curlCopied ? (
                  <Check size={14} className="text-terminal-success" />
                ) : (
                  <Copy size={14} />
                )}
              </button>
            </div>
          </Reveal>
        </section>

        <Reveal className="mx-auto mb-28 w-full max-w-4xl md:mb-36" delay={0.1}>
          <TerminalDemo />
        </Reveal>

        <section className="pb-8" aria-labelledby="features-heading">
          <Reveal>
            <h2
              id="features-heading"
              className="mx-auto mt-6 max-w-2xl text-center text-3xl font-bold tracking-tight text-balance text-foreground md:text-5xl"
            >
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
                <Muted>1:</Muted>
                <Muted>base https://api.stripe.com</Muted>
              </div>
              <div className="flex gap-4">
                <Muted>2:</Muted>
                <Muted>header Authorization Bearer sk_test</Muted>
              </div>
              <div className="flex gap-4">
                <Muted>3:</Muted>
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
            <div className="mt-3 text-xs text-terminal-success">HTTP/1.1 200 OK 142ms</div>
            <div className="mt-5" />
            <Line prompt>
              <Cmd>save</Cmd> <Muted>get-users</Muted>
            </Line>
            <Line prompt>
              <Cmd>run</Cmd> <Muted>get-users</Muted>
            </Line>
          </TerminalCard>
        </FeatureRow>

        <section
          className="border-t border-border py-20 md:py-28"
          aria-labelledby="small-tool-heading"
        >
          <Reveal>
            <h2
              id="small-tool-heading"
              className="mx-auto mt-6 max-w-xl text-center text-3xl font-bold tracking-tight text-balance text-foreground md:text-4xl"
            >
              Small tool. Sharp edges filed off.
            </h2>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
            <div className="group rounded-2xl border border-border/60 bg-card p-6 flex flex-col justify-between transition-colors hover:border-border hover:bg-muted/30">
              <div>
                <h3 className="text-base font-semibold text-foreground flex items-center gap-2">
                  <Zap size={15} className="text-accent" />
                  Instant startup
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Written in Rust. Launches in milliseconds with a minimal memory footprint.
                </p>
              </div>
              <StartupVisual />
            </div>

            <div className="group rounded-2xl border border-border/60 bg-card p-6 flex flex-col justify-between transition-colors hover:border-border hover:bg-muted/30">
              <div>
                <h3 className="text-base font-semibold text-foreground flex items-center gap-2">
                  <TerminalIcon size={15} className="text-accent" />
                  Case-insensitive methods
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  get, GET, or GeT — reqsh understands all HTTP verbs however you type them.
                </p>
              </div>
              <CaseInsensitiveVisual />
            </div>

            <div className="group rounded-2xl border border-border/60 bg-card p-6 flex flex-col justify-between transition-colors hover:border-border hover:bg-muted/30">
              <div>
                <h3 className="text-base font-semibold text-foreground flex items-center gap-2">
                  <Braces size={15} className="text-accent" />
                  Pretty-printed output
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  JSON responses are formatted and colorized automatically. No piping to jq.
                </p>
              </div>
              <PrettyPrintVisual />
            </div>

            <div className="group rounded-2xl border border-border/60 bg-card p-6 flex flex-col justify-between md:col-span-2 transition-colors hover:border-border hover:bg-muted/30">
              <div>
                <h3 className="text-base font-semibold text-foreground flex items-center gap-2">
                  <History size={15} className="text-accent" />
                  Session history
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Every command is recorded. Inspect, replay, or rerun anything instantly from the
                  history list.
                </p>
              </div>
              <div className="flex-1 mt-4">
                <SessionHistoryVisual />
              </div>
            </div>

            <div className="group rounded-2xl border border-border/60 bg-card p-6 flex flex-col justify-between transition-colors hover:border-border hover:bg-muted/30">
              <div>
                <h3 className="text-base font-semibold text-foreground flex items-center gap-2">
                  <Timer size={15} className="text-accent" />
                  Built-in timing
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Every response includes its latency so you measure performance at a glance.
                </p>
              </div>
              <BuiltInTimingVisual />
            </div>
          </div>
        </section>

        <section
          className="relative overflow-hidden rounded-3xl border border-border bg-card"
          aria-labelledby="cta-heading"
        >
          <div className="section-glow pointer-events-none absolute inset-0" />
          <div className="relative flex flex-col items-center px-6 py-20 text-center md:py-28">
            <Reveal>
              <h2
                id="cta-heading"
                className="max-w-2xl text-3xl font-bold tracking-tight text-balance text-foreground md:text-5xl"
              >
                Ready to leave curl flags behind?
              </h2>
              <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
                One command. No config files, no accounts, no runtime. Just a fast shell for your
                API work.
              </p>
              <div className="mx-auto mt-9 flex w-full max-w-lg items-center gap-3 overflow-x-auto rounded-xl border border-terminal-border bg-terminal px-4 py-3.5 font-mono text-sm relative sm:px-5">
                <span className="text-terminal-accent shrink-0">$</span>
                <span className="whitespace-nowrap text-terminal-foreground">
                  curl -fsSL https://reqsh.dev/install.sh | sh
                </span>
                <button
                  onClick={handleCopyCurl}
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded-md p-1.5 text-terminal-muted hover:bg-white/10 hover:text-terminal-foreground transition-colors"
                  aria-label="Copy curl command"
                >
                  {curlCopied ? (
                    <Check size={14} className="text-terminal-success" />
                  ) : (
                    <Copy size={14} />
                  )}
                </button>
              </div>
              <div className="mt-8 flex flex-wrap justify-center gap-3.5">
                <Link
                  href="/docs/install"
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
