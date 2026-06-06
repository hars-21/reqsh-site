import type { Metadata } from 'next';
import Link from 'next/link';
import CodeBlock from '@/components/code-block';

export const metadata: Metadata = {
  title: 'Docs',
  description:
    'Getting started with reqsh - learn how to install, configure and send HTTP requests from your terminal.',
};

export default function DocsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6">
      <div className="max-w-3xl pt-24 pb-40">
        <header className="mb-20">
          <h1 className="text-5xl font-bold tracking-tighter text-white">Documentation</h1>
          <p className="mt-6 text-xl text-[#888888] leading-relaxed font-medium">
            Master the interactive HTTP shell. Learn how to install, configure your environment, and
            execute requests efficiently.
          </p>
        </header>

        <section id="getting-started" className="mb-32">
          <h2 className="text-3xl font-bold tracking-tight text-white mb-10">Getting Started</h2>
          <div className="space-y-16">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">1. Install reqsh</h3>
              <p className="text-[#888888] text-lg leading-relaxed mb-4">
                Head over to the{' '}
                <Link
                  href="/install"
                  className="text-white border-b border-white/20 hover:border-accent hover:text-accent transition-snappy pb-0.5"
                >
                  installation guide
                </Link>{' '}
                to download the binary or build from source.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-4">2. Start the shell</h3>
              <p className="text-[#888888] text-lg leading-relaxed mb-6">
                Simply type{' '}
                <code className="text-white bg-white/5 px-1.5 py-0.5 rounded font-mono text-sm">
                  reqsh
                </code>{' '}
                in your terminal. This drops you into the interactive REPL.
              </p>
              <CodeBlock lines={['reqsh']} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-4">3. Set a base URL</h3>
              <p className="text-[#888888] text-lg leading-relaxed mb-6">
                Define your target host. All subsequent requests in this session will be appended to
                this base URL automatically.
              </p>
              <CodeBlock lines={['reqsh> base https://api.example.com']} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-4">4. Send a request</h3>
              <p className="text-[#888888] text-lg leading-relaxed mb-6">
                Type the HTTP method and the relative path. Then execute it using the special{' '}
                <code className="text-white bg-white/5 px-1.5 py-0.5 rounded font-mono text-sm">
                  ::send
                </code>{' '}
                command.
              </p>
              <CodeBlock lines={['reqsh> GET /users', '.....> ::send']} />
            </div>
          </div>
        </section>

        <section id="requests" className="mb-32">
          <h2 className="text-3xl font-bold tracking-tight text-white mb-6">Sending Requests</h2>
          <p className="text-[#888888] text-lg leading-relaxed mb-8">
            The shell supports building complex requests step-by-step. Start with the method and
            path. Add headers on the following lines. Leave a blank line to start writing the JSON
            body.
          </p>
          <CodeBlock
            lines={[
              'reqsh> POST /users',
              '.....> Content-Type: application/json',
              '.....>',
              '.....> {"name": "Alice", "email": "alice@example.com"}',
              '.....> ::send',
            ]}
          />
        </section>

        <section id="variables" className="mb-32">
          <h2 className="text-3xl font-bold tracking-tight text-white mb-6">Variables</h2>
          <p className="text-[#888888] text-lg leading-relaxed mb-8">
            Store values with{' '}
            <code className="text-white bg-white/5 px-1.5 py-0.5 rounded font-mono text-sm">
              set
            </code>{' '}
            and reference them anywhere in your request using{' '}
            <code className="text-white bg-white/5 px-1.5 py-0.5 rounded font-mono text-sm">
              {'{{name}}'}
            </code>
            . Variables are interpolated at request time.
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

        <section id="query-params" className="mb-32">
          <h2 className="text-3xl font-bold tracking-tight text-white mb-6">Query Parameters</h2>
          <p className="text-[#888888] text-lg leading-relaxed mb-8">
            Add query parameters with{' '}
            <code className="text-white bg-white/5 px-1.5 py-0.5 rounded font-mono text-sm">
              param:
            </code>{' '}
            lines. Values are URL-encoded automatically.
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

        <section id="save-run" className="mb-32">
          <h2 className="text-3xl font-bold tracking-tight text-white mb-6">Save &amp; Run</h2>
          <p className="text-[#888888] text-lg leading-relaxed mb-8">
            Save a request to session memory after executing it, then run it again instantly without
            retyping.
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
          <h2 className="text-3xl font-bold tracking-tight text-white mb-6">Built-in Commands</h2>
          <p className="text-[#888888] text-lg leading-relaxed mb-10">
            Beyond standard HTTP methods (GET, POST, PUT, DELETE), reqsh provides specific REPL
            commands to manage your session.
          </p>
          <div className="rounded-2xl border border-white/8 bg-[#050505] overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/8 bg-white/2">
                  <th className="px-6 py-4 text-sm font-semibold text-white">Command</th>
                  <th className="px-6 py-4 text-sm font-semibold text-white">Usage</th>
                  <th className="px-6 py-4 text-sm font-semibold text-white">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/4">
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
    <tr className="hover:bg-white/2 transition-snappy">
      <td className="px-6 py-5 font-mono text-white font-medium">{cmd}</td>
      <td className="px-6 py-5 font-mono text-[#888888] text-sm">{usage}</td>
      <td className="px-6 py-5 text-[#888888] text-base">{desc}</td>
    </tr>
  );
}
