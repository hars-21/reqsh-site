import type { Metadata } from 'next';
import Link from 'next/link';
import CodeBlock from '@/components/code-block';

export const metadata: Metadata = {
  title: 'Docs',
  description:
    'Getting started with reqsh - learn how to install, configure and send HTTP requests from your terminal.',
};

function InlineCode({ children }: { children: React.ReactNode }) {
  return (
    <code className="rounded bg-accent-soft px-1.5 py-0.5 font-mono text-[0.85em] text-accent-strong">
      {children}
    </code>
  );
}

export default function DocsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6">
      <div className="max-w-3xl pt-20 md:pt-28 pb-24">
        <header className="mb-16 md:mb-20">
          <h1 className="font-serif text-5xl md:text-6xl tracking-tight text-foreground text-balance">
            Documentation
          </h1>
          <p className="mt-6 text-lg text-muted leading-relaxed text-pretty">
            Learn how to install reqsh, configure your session, and send requests efficiently —
            all from the comfort of your terminal.
          </p>
        </header>

        <section id="getting-started" className="mb-20 md:mb-24">
          <h2 className="font-serif text-3xl md:text-4xl tracking-tight text-foreground mb-10">
            Getting started
          </h2>
          <div className="flex flex-col gap-12">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">1. Install reqsh</h3>
              <p className="text-muted leading-relaxed mb-4">
                Head over to the{' '}
                <Link
                  href="/install"
                  className="text-accent underline underline-offset-4 decoration-accent/40 transition-snappy hover:decoration-accent"
                >
                  installation guide
                </Link>{' '}
                to download the binary or build from source.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">2. Start the shell</h3>
              <p className="text-muted leading-relaxed mb-5">
                Simply type <InlineCode>reqsh</InlineCode> in your terminal. This drops you into
                the interactive REPL.
              </p>
              <CodeBlock lines={['reqsh']} />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">3. Set a base URL</h3>
              <p className="text-muted leading-relaxed mb-5">
                Define your target host. All subsequent requests in this session will be appended
                to this base URL automatically.
              </p>
              <CodeBlock lines={['reqsh> base https://api.example.com']} />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">4. Send a request</h3>
              <p className="text-muted leading-relaxed mb-5">
                Type the HTTP method and the relative path. Then execute it using the special{' '}
                <InlineCode>::send</InlineCode> command.
              </p>
              <CodeBlock lines={['reqsh> GET /users', '.....> ::send']} />
            </div>
          </div>
        </section>

        <section id="requests" className="mb-20 md:mb-24">
          <h2 className="font-serif text-3xl md:text-4xl tracking-tight text-foreground mb-6">
            Sending requests
          </h2>
          <p className="text-muted leading-relaxed mb-7">
            The shell supports building complex requests step-by-step. Start with the method and
            path. HTTP methods are case-insensitive — <InlineCode>GET</InlineCode>,{' '}
            <InlineCode>POST</InlineCode>, <InlineCode>PUT</InlineCode>,{' '}
            <InlineCode>PATCH</InlineCode>, <InlineCode>DELETE</InlineCode> are all supported. You
            can also use absolute URLs — no base URL required. Add headers on the following lines.
            Leave a blank line to start writing the body.
          </p>
          <CodeBlock
            lines={[
              'reqsh> PATCH /users/1',
              '.....> Content-Type: application/json',
              '.....>',
              '.....> {"name": "Alice"}',
              '.....> ::send',
            ]}
          />
          <p className="mt-6 text-muted leading-relaxed">
            Response time is displayed after every request: <InlineCode>200 OK - 142ms</InlineCode>
            . JSON responses are automatically pretty-printed with colored syntax.
          </p>
        </section>

        <section id="variables" className="mb-20 md:mb-24">
          <h2 className="font-serif text-3xl md:text-4xl tracking-tight text-foreground mb-6">
            Variables
          </h2>
          <p className="text-muted leading-relaxed mb-7">
            Store values with <InlineCode>set</InlineCode> and reference them anywhere in your
            request using <InlineCode>{'{{name}}'}</InlineCode>. Variables are interpolated at
            request time.
          </p>
          <CodeBlock
            lines={[
              'reqsh> set token eyJhbGciOiJIUzI1NiJ9',
              'reqsh> set host api.example.com',
              'reqsh> GET /users/{{token}}',
              '.....> Authorization: Bearer {{token}}',
              '.....> ::send',
            ]}
          />
        </section>

        <section id="query-params" className="mb-20 md:mb-24">
          <h2 className="font-serif text-3xl md:text-4xl tracking-tight text-foreground mb-6">
            Query parameters
          </h2>
          <p className="text-muted leading-relaxed mb-7">
            Add query parameters with <InlineCode>param:</InlineCode> lines. Values are URL-encoded
            automatically.
          </p>
          <CodeBlock
            lines={[
              'reqsh> GET /users',
              '.....> param: page=1',
              '.....> param: limit=20',
              '.....> ::send',
            ]}
          />
        </section>

        <section id="save-run" className="mb-20 md:mb-24">
          <h2 className="font-serif text-3xl md:text-4xl tracking-tight text-foreground mb-6">
            Save &amp; run
          </h2>
          <p className="text-muted leading-relaxed mb-7">
            Save a request to session memory after executing it, then run it again instantly
            without retyping.
          </p>
          <CodeBlock
            lines={[
              'reqsh> GET /users/{{id}}',
              '.....> ::send',
              'reqsh> save get-user',
              'saved',
              'reqsh> run get-user',
            ]}
          />
        </section>

        <section id="commands">
          <h2 className="font-serif text-3xl md:text-4xl tracking-tight text-foreground mb-6">
            Built-in commands
          </h2>
          <p className="text-muted leading-relaxed mb-9">
            Beyond standard HTTP methods (<InlineCode>GET</InlineCode>,{' '}
            <InlineCode>POST</InlineCode>, <InlineCode>PUT</InlineCode>,{' '}
            <InlineCode>PATCH</InlineCode>, <InlineCode>DELETE</InlineCode>), reqsh provides
            specific REPL commands to manage your session.
          </p>
          <div className="rounded-2xl border border-border bg-card overflow-hidden overflow-x-auto shadow-[0_1px_2px_rgba(38,33,29,0.05)]">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-border bg-background">
                  <th className="px-6 py-4 text-sm font-semibold text-foreground">Command</th>
                  <th className="px-6 py-4 text-sm font-semibold text-foreground">Usage</th>
                  <th className="px-6 py-4 text-sm font-semibold text-foreground">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <Row
                  cmd="base"
                  usage="base <url>"
                  desc="Set the global base URL for the session."
                />
                <Row
                  cmd="header"
                  usage="header <key> <value>"
                  desc="Add a persistent header applied to all requests."
                />
                <Row
                  cmd="set"
                  usage="set <name> <value>"
                  desc="Store a variable for interpolation."
                />
                <Row cmd="unset" usage="unset <name>" desc="Remove a variable." />
                <Row cmd="unset header" usage="unset header <key>" desc="Remove a global header." />
                <Row
                  cmd="save"
                  usage="save <name>"
                  desc="Save the last executed request to memory."
                />
                <Row cmd="run" usage="run <name>" desc="Execute a saved request." />
                <Row cmd="vars" usage="vars" desc="List all session variables." />
                <Row cmd="headers" usage="headers" desc="List all global headers." />
                <Row cmd="requests" usage="requests" desc="List all saved requests." />
                <Row
                  cmd="history"
                  usage="history"
                  desc="View the numbered history of past commands."
                />
                <Row
                  cmd="rerun"
                  usage="rerun <id>"
                  desc="Instantly re-execute a request from history."
                />
                <Row cmd="help" usage="help" desc="Display syntax and command documentation." />
                <Row cmd="exit" usage="exit" desc="Terminate the shell session." />
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}

function Row({ cmd, usage, desc }: { cmd: string; usage: string; desc: string }) {
  return (
    <tr className="transition-snappy hover:bg-accent-soft/40">
      <td className="px-6 py-4 font-mono text-sm text-accent-strong font-medium">{cmd}</td>
      <td className="px-6 py-4 font-mono text-sm text-muted">{usage}</td>
      <td className="px-6 py-4 text-sm text-muted">{desc}</td>
    </tr>
  );
}
