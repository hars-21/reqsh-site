import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Docs',
  description:
    'Getting started with reqsh — learn how to install, configure, and send HTTP requests from your terminal.',
};

export default function DocsPage() {
  return (
    <div className="mx-auto max-w-4xl px-6">
      <div className="max-w-2xl">
        <header className="pt-12 pb-8 border-b border-white/[0.06]">
          <h1 className="text-3xl font-bold tracking-tight">Documentation</h1>
          <p className="mt-2 text-neutral-400">
            Getting started with reqsh — installation, first steps, and command reference.
          </p>
        </header>

        <section id="getting-started" className="py-10">
          <h2 className="text-xl font-semibold tracking-tight mb-5">Getting Started</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-medium mb-1.5">1. Install reqsh</h3>
              <p className="text-sm text-neutral-400">
                See the{' '}
                <Link href="/install" className="text-white underline underline-offset-2">
                  installation page
                </Link>{' '}
                for all available methods.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-1.5">2. Start the shell</h3>
              <Code lines={['reqsh']} />
              <p className="text-sm text-neutral-500 mt-2">
                This opens the interactive REPL with the{' '}
                <code className="font-mono text-neutral-300">reqsh&gt;</code> prompt.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-1.5">3. Set a base URL</h3>
              <Code lines={['reqsh> base https://api.example.com']} />
              <p className="text-sm text-neutral-500 mt-2">
                All subsequent requests use this as the base. Use relative paths like{' '}
                <code className="font-mono text-neutral-300">/users</code>.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-1.5">4. Send your first request</h3>
              <Code lines={['reqsh> GET /users', '.....> ::send']} />
              <p className="text-sm text-neutral-500 mt-2">
                The response — status code, headers, and body — prints to the terminal.
              </p>
            </div>
          </div>
        </section>

        <section id="requests" className="py-10 border-t border-white/[0.06]">
          <h2 className="text-xl font-semibold tracking-tight mb-3">Sending Requests</h2>
          <p className="text-sm text-neutral-400 leading-relaxed mb-4">
            Start with the method and path. Add headers as key: value pairs. Leave a blank line,
            then add the body. End with <code className="font-mono text-neutral-300">::send</code>.
          </p>
          <Code
            lines={[
              'reqsh> POST /users',
              '.....> Content-Type: application/json',
              '.....>',
              '.....> {"name": "Alice", "email": "alice@example.com"}',
              '.....> ::send',
            ]}
          />
          <div className="mt-6">
            <h3 className="text-sm font-medium mb-2">Supported methods</h3>
            <div className="flex gap-1.5 font-mono text-sm">
              {['GET', 'POST', 'PUT', 'DELETE'].map((m) => (
                <span
                  key={m}
                  className="rounded border border-white/[0.08] bg-white/[0.02] px-2 py-0.5 text-neutral-300"
                >
                  {m}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section id="commands" className="py-10 border-t border-white/[0.06]">
          <h2 className="text-xl font-semibold tracking-tight mb-3">Commands</h2>
          <p className="text-sm text-neutral-400 mb-5">
            Built-in commands available in the REPL alongside HTTP methods.
          </p>
          <div className="rounded-xl border border-white/[0.06] overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/[0.06] bg-white/[0.02]">
                  <th className="text-left font-medium px-4 py-2.5">Command</th>
                  <th className="text-left font-medium px-4 py-2.5">Usage</th>
                  <th className="text-left font-medium px-4 py-2.5">Description</th>
                </tr>
              </thead>
              <tbody className="text-neutral-400">
                <Row cmd="base" usage="base <url>" desc="Set the base URL for relative paths" />
                <Row
                  cmd="header"
                  usage="header <key> <value>"
                  desc="Add a persistent header to every request"
                />
                <Row
                  cmd="history"
                  usage="history"
                  desc="List all commands from the current session"
                />
                <Row
                  cmd="rerun"
                  usage="rerun <id>"
                  desc="Re-execute a command from history by index"
                />
                <Row cmd="help" usage="help" desc="Show available commands and syntax" />
                <Row cmd="exit" usage="exit" desc="Exit the shell" />
              </tbody>
            </table>
          </div>
        </section>

        <section id="features" className="py-10 border-t border-white/[0.06]">
          <h2 className="text-xl font-semibold tracking-tight mb-5">Shell Features</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-medium mb-1">Tab completion</h3>
              <p className="text-sm text-neutral-500">
                Press Tab to autocomplete commands and HTTP methods: GET, POST, PUT, DELETE, base,
                header, exit, help, history, rerun.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-1">Persistent history</h3>
              <p className="text-sm text-neutral-500">
                Command history saves to{' '}
                <code className="font-mono text-neutral-300">.reqsh_history</code> and persists
                across sessions.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-1">Formatted responses</h3>
              <p className="text-sm text-neutral-500">
                Responses are color-coded by status (2xx, 4xx, 5xx). JSON bodies are automatically
                pretty-printed.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

function Code({ lines }: { lines: string[] }) {
  return (
    <div className="rounded-lg border border-white/[0.06] bg-surface p-4 font-mono text-sm overflow-x-auto">
      {lines.map((line, i) => (
        <div key={i} className="text-neutral-300">
          {line}
        </div>
      ))}
    </div>
  );
}

function Row({ cmd, usage, desc }: { cmd: string; usage: string; desc: string }) {
  return (
    <tr className="border-b border-white/[0.04] last:border-0">
      <td className="px-4 py-2.5 font-mono text-white">{cmd}</td>
      <td className="px-4 py-2.5 font-mono text-neutral-500">{usage}</td>
      <td className="px-4 py-2.5">{desc}</td>
    </tr>
  );
}
