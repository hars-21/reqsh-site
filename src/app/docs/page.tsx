import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Docs',
  description:
    'Getting started with reqsh — an interactive HTTP request shell. Learn how to install, configure, and use reqsh to send API requests from your terminal.',
};

export default function DocsPage() {
  return (
    <div className="mx-auto" style={{ maxWidth: 'var(--max-width)', padding: '0 var(--space-3)' }}>
      <div style={{ maxWidth: '42rem' }}>
        {/* Page header */}
        <header
          style={{
            paddingTop: 'var(--space-8)',
            paddingBottom: 'var(--space-8)',
            borderBottom: '1px solid var(--border-primary)',
          }}
        >
          <h1
            className="text-3xl font-bold tracking-tight"
            style={{ color: 'var(--text-primary)' }}
          >
            Documentation
          </h1>
          <p
            className="text-base"
            style={{ color: 'var(--text-secondary)', marginTop: 'var(--space-2)' }}
          >
            Getting started with reqsh — installation, first steps, and command reference.
          </p>
        </header>

        {/* Getting Started */}
        <section
          id="getting-started"
          style={{ paddingTop: 'var(--space-8)', paddingBottom: 'var(--space-8)' }}
        >
          <h2
            className="text-xl font-bold tracking-tight"
            style={{ color: 'var(--text-primary)', marginBottom: 'var(--space-3)' }}
          >
            Getting Started
          </h2>

          <div className="flex flex-col" style={{ gap: 'var(--space-4)' }}>
            <div>
              <h3
                className="text-base font-semibold"
                style={{ color: 'var(--text-primary)', marginBottom: 'var(--space-1)' }}
              >
                1. Install reqsh
              </h3>
              <p
                className="text-sm"
                style={{ color: 'var(--text-secondary)', marginBottom: 'var(--space-2)' }}
              >
                See the{' '}
                <Link
                  href="/install"
                  className="underline"
                  style={{ color: 'var(--text-primary)' }}
                >
                  installation page
                </Link>{' '}
                for all available methods.
              </p>
            </div>

            <div>
              <h3
                className="text-base font-semibold"
                style={{ color: 'var(--text-primary)', marginBottom: 'var(--space-1)' }}
              >
                2. Start the shell
              </h3>
              <CodeBlock lines={['reqsh']} />
              <p
                className="text-sm"
                style={{ color: 'var(--text-secondary)', marginTop: 'var(--space-1)' }}
              >
                This opens the interactive REPL. You&apos;ll see the{' '}
                <code className="font-mono" style={{ color: 'var(--text-primary)' }}>
                  reqsh&gt;
                </code>{' '}
                prompt.
              </p>
            </div>

            <div>
              <h3
                className="text-base font-semibold"
                style={{ color: 'var(--text-primary)', marginBottom: 'var(--space-1)' }}
              >
                3. Set a base URL
              </h3>
              <CodeBlock lines={['reqsh> base https://api.example.com']} />
              <p
                className="text-sm"
                style={{ color: 'var(--text-secondary)', marginTop: 'var(--space-1)' }}
              >
                All subsequent requests will use this as the base. You can then use relative paths
                like <code className="font-mono">/users</code>.
              </p>
            </div>

            <div>
              <h3
                className="text-base font-semibold"
                style={{ color: 'var(--text-primary)', marginBottom: 'var(--space-1)' }}
              >
                4. Send your first request
              </h3>
              <CodeBlock lines={['reqsh> GET /users', '.....> ::send']} />
              <p
                className="text-sm"
                style={{ color: 'var(--text-secondary)', marginTop: 'var(--space-1)' }}
              >
                The response — status code, headers, and body — will be printed to the terminal.
              </p>
            </div>
          </div>
        </section>

        {/* Sending Requests */}
        <section
          id="requests"
          className="border-t"
          style={{
            borderColor: 'var(--border-primary)',
            paddingTop: 'var(--space-8)',
            paddingBottom: 'var(--space-8)',
          }}
        >
          <h2
            className="text-xl font-bold tracking-tight"
            style={{ color: 'var(--text-primary)', marginBottom: 'var(--space-3)' }}
          >
            Sending Requests
          </h2>

          <p
            className="text-sm"
            style={{
              color: 'var(--text-secondary)',
              marginBottom: 'var(--space-3)',
              lineHeight: '1.7',
            }}
          >
            Requests follow a multi-line format. Start with the method and path on the first line.
            Add headers on the next lines (key: value). Leave a blank line, then add the body. End
            with{' '}
            <code className="font-mono" style={{ color: 'var(--text-primary)' }}>
              ::send
            </code>
            .
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

          <div style={{ marginTop: 'var(--space-4)' }}>
            <h3
              className="text-base font-semibold"
              style={{ color: 'var(--text-primary)', marginBottom: 'var(--space-2)' }}
            >
              Supported methods
            </h3>
            <div className="flex flex-wrap font-mono text-sm" style={{ gap: 'var(--space-1)' }}>
              {['GET', 'POST', 'PUT', 'DELETE'].map((method) => (
                <span
                  key={method}
                  className="rounded border"
                  style={{
                    borderColor: 'var(--border-primary)',
                    padding: '2px var(--space-1)',
                    color: 'var(--text-primary)',
                  }}
                >
                  {method}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Commands Reference */}
        <section
          id="commands"
          className="border-t"
          style={{
            borderColor: 'var(--border-primary)',
            paddingTop: 'var(--space-8)',
            paddingBottom: 'var(--space-8)',
          }}
        >
          <h2
            className="text-xl font-bold tracking-tight"
            style={{ color: 'var(--text-primary)', marginBottom: 'var(--space-3)' }}
          >
            Commands
          </h2>

          <p
            className="text-sm"
            style={{
              color: 'var(--text-secondary)',
              marginBottom: 'var(--space-4)',
              lineHeight: '1.7',
            }}
          >
            These built-in commands are available in the REPL alongside HTTP methods.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm" style={{ borderCollapse: 'collapse' }}>
              <thead>
                <tr className="border-b" style={{ borderColor: 'var(--border-primary)' }}>
                  <th
                    className="text-left font-semibold"
                    style={{
                      color: 'var(--text-primary)',
                      padding: 'var(--space-1) var(--space-2)',
                      paddingLeft: 0,
                    }}
                  >
                    Command
                  </th>
                  <th
                    className="text-left font-semibold"
                    style={{
                      color: 'var(--text-primary)',
                      padding: 'var(--space-1) var(--space-2)',
                    }}
                  >
                    Usage
                  </th>
                  <th
                    className="text-left font-semibold"
                    style={{
                      color: 'var(--text-primary)',
                      padding: 'var(--space-1) var(--space-2)',
                    }}
                  >
                    Description
                  </th>
                </tr>
              </thead>
              <tbody>
                <CommandRow
                  command="base"
                  usage="base <url>"
                  description="Set the base URL for all requests using relative paths"
                />
                <CommandRow
                  command="header"
                  usage="header <key> <value>"
                  description="Add a persistent header sent with every request"
                />
                <CommandRow
                  command="history"
                  usage="history"
                  description="List all commands from the current session"
                />
                <CommandRow
                  command="rerun"
                  usage="rerun <id>"
                  description="Re-execute a command from history by its index"
                />
                <CommandRow
                  command="help"
                  usage="help"
                  description="Show the help text with available commands and syntax"
                />
                <CommandRow command="exit" usage="exit" description="Exit the shell" />
              </tbody>
            </table>
          </div>
        </section>

        {/* Features */}
        <section
          id="features"
          className="border-t"
          style={{
            borderColor: 'var(--border-primary)',
            paddingTop: 'var(--space-8)',
            paddingBottom: 'var(--space-8)',
          }}
        >
          <h2
            className="text-xl font-bold tracking-tight"
            style={{ color: 'var(--text-primary)', marginBottom: 'var(--space-3)' }}
          >
            Shell Features
          </h2>

          <div className="flex flex-col" style={{ gap: 'var(--space-3)' }}>
            <div>
              <h3
                className="text-base font-semibold"
                style={{ color: 'var(--text-primary)', marginBottom: '4px' }}
              >
                Tab completion
              </h3>
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                Press Tab to autocomplete commands and HTTP methods. Supported completions: GET,
                POST, PUT, DELETE, base, header, exit, help, history, rerun.
              </p>
            </div>
            <div>
              <h3
                className="text-base font-semibold"
                style={{ color: 'var(--text-primary)', marginBottom: '4px' }}
              >
                Vi editing mode
              </h3>
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                The shell uses Vi keybindings for line editing by default.
              </p>
            </div>
            <div>
              <h3
                className="text-base font-semibold"
                style={{ color: 'var(--text-primary)', marginBottom: '4px' }}
              >
                Persistent history
              </h3>
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                Command history is saved to a <code className="font-mono">.reqsh_history</code> file
                and persists across sessions.
              </p>
            </div>
            <div>
              <h3
                className="text-base font-semibold"
                style={{ color: 'var(--text-primary)', marginBottom: '4px' }}
              >
                Formatted responses
              </h3>
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
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

function CodeBlock({ lines }: { lines: string[] }) {
  return (
    <div
      className="rounded-md border font-mono text-sm overflow-x-auto"
      style={{
        borderColor: 'var(--border-primary)',
        backgroundColor: 'var(--bg-secondary)',
        padding: 'var(--space-2)',
      }}
    >
      {lines.map((line, i) => (
        <div key={i} style={{ color: 'var(--text-primary)' }}>
          {line}
        </div>
      ))}
    </div>
  );
}

function CommandRow({
  command,
  usage,
  description,
}: {
  command: string;
  usage: string;
  description: string;
}) {
  return (
    <tr className="border-b" style={{ borderColor: 'var(--border-primary)' }}>
      <td
        className="font-mono font-medium"
        style={{
          color: 'var(--text-primary)',
          padding: 'var(--space-1) var(--space-2)',
          paddingLeft: 0,
        }}
      >
        {command}
      </td>
      <td
        className="font-mono"
        style={{ color: 'var(--text-secondary)', padding: 'var(--space-1) var(--space-2)' }}
      >
        {usage}
      </td>
      <td style={{ color: 'var(--text-secondary)', padding: 'var(--space-1) var(--space-2)' }}>
        {description}
      </td>
    </tr>
  );
}
