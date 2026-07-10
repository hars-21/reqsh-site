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
    <>
      <header className="mb-16">
        <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
          Documentation
        </h1>
        <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
          Master the interactive HTTP shell. Learn how to install, configure your environment, and
          execute requests efficiently.
        </p>
      </header>

      <section id="getting-started" className="mb-24">
        <h2 className="text-2xl font-bold tracking-tight text-foreground mb-8">Getting Started</h2>
        <div className="space-y-12">
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">1. Install reqsh</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Head over to the{' '}
              <Link
                href="/docs/install"
                className="text-foreground border-b border-border hover:border-accent hover:text-accent transition-colors pb-0.5"
              >
                installation guide
              </Link>{' '}
              to download the binary or build from source.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">2. Start the shell</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Simply type{' '}
              <code className="text-foreground bg-muted px-1.5 py-0.5 rounded font-mono text-sm">
                reqsh
              </code>{' '}
              in your terminal. This drops you into the interactive REPL.
            </p>
            <CodeBlock lines={['reqsh']} />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">3. Set a base URL</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Define your target host. All subsequent requests in this session will be appended to
              this base URL automatically.
            </p>
            <CodeBlock lines={['reqsh> base https://api.example.com']} />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">4. Send a request</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Type the HTTP method and the relative path. Then execute it using the special{' '}
              <code className="text-foreground bg-muted px-1.5 py-0.5 rounded font-mono text-sm">
                ::send
              </code>{' '}
              command.
            </p>
            <CodeBlock lines={['reqsh> GET /users', '.....> ::send']} />
          </div>
        </div>
      </section>

      <section id="requests" className="mb-24">
        <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">Sending Requests</h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          The shell supports building complex requests step-by-step. Start with the method and path.
          HTTP methods are case-insensitive -{' '}
          <code className="text-foreground bg-muted px-1.5 py-0.5 rounded font-mono text-sm">
            GET
          </code>
          ,{' '}
          <code className="text-foreground bg-muted px-1.5 py-0.5 rounded font-mono text-sm">
            POST
          </code>
          ,{' '}
          <code className="text-foreground bg-muted px-1.5 py-0.5 rounded font-mono text-sm">
            PUT
          </code>
          ,{' '}
          <code className="text-foreground bg-muted px-1.5 py-0.5 rounded font-mono text-sm">
            PATCH
          </code>
          ,{' '}
          <code className="text-foreground bg-muted px-1.5 py-0.5 rounded font-mono text-sm">
            DELETE
          </code>{' '}
          are all supported. You can also use absolute URLs — no base URL required. Add headers on
          the following lines. Leave a blank line to start writing the body.
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
        <div className="mt-4 text-muted-foreground leading-relaxed">
          Response time is displayed after every request:{' '}
          <code className="text-foreground bg-muted px-1.5 py-0.5 rounded font-mono text-sm">
            200 OK - 142ms
          </code>
          . JSON responses are automatically pretty-printed with colored syntax.
        </div>
      </section>

      <section id="variables" className="mb-24">
        <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">Variables</h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Store values with{' '}
          <code className="text-foreground bg-muted px-1.5 py-0.5 rounded font-mono text-sm">
            set
          </code>{' '}
          and reference them anywhere in your request using{' '}
          <code className="text-foreground bg-muted px-1.5 py-0.5 rounded font-mono text-sm">
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

      <section id="query-params" className="mb-24">
        <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">Query Parameters</h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Add query parameters with{' '}
          <code className="text-foreground bg-muted px-1.5 py-0.5 rounded font-mono text-sm">
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

      <section id="save-run" className="mb-24">
        <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">Save &amp; Run</h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
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
        <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">
          Built-in Commands
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-8">
          Beyond standard HTTP methods (
          <code className="text-foreground bg-muted px-1.5 py-0.5 rounded font-mono text-sm">
            GET
          </code>
          ,{' '}
          <code className="text-foreground bg-muted px-1.5 py-0.5 rounded font-mono text-sm">
            POST
          </code>
          ,{' '}
          <code className="text-foreground bg-muted px-1.5 py-0.5 rounded font-mono text-sm">
            PUT
          </code>
          ,{' '}
          <code className="text-foreground bg-muted px-1.5 py-0.5 rounded font-mono text-sm">
            PATCH
          </code>
          ,{' '}
          <code className="text-foreground bg-muted px-1.5 py-0.5 rounded font-mono text-sm">
            DELETE
          </code>
          ), reqsh provides specific REPL commands to manage your session.
        </p>
        <div className="rounded-xl border border-border overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-5 py-3 text-sm font-semibold text-foreground">Command</th>
                <th className="px-5 py-3 text-sm font-semibold text-foreground">Usage</th>
                <th className="px-5 py-3 text-sm font-semibold text-foreground">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <Row cmd="base" usage="base <url>" desc="Set the global base URL for the session." />
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
    </>
  );
}

function Row({ cmd, usage, desc }: { cmd: string; usage: string; desc: string }) {
  return (
    <tr className="hover:bg-muted/50 transition-colors">
      <td className="px-5 py-4 font-mono text-foreground font-medium">{cmd}</td>
      <td className="px-5 py-4 font-mono text-muted-foreground text-sm">{usage}</td>
      <td className="px-5 py-4 text-muted-foreground text-sm">{desc}</td>
    </tr>
  );
}
