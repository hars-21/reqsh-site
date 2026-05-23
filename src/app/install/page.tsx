import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Install',
  description:
    'Install reqsh — build from source, use the install script, or download a prebuilt binary. Requires the Rust toolchain.',
};

export default function InstallPage() {
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
            Install
          </h1>
          <p
            className="text-base"
            style={{ color: 'var(--text-secondary)', marginTop: 'var(--space-2)' }}
          >
            Three ways to install reqsh on your system.
          </p>
        </header>

        {/* Install Script */}
        <section
          id="install-script"
          style={{ paddingTop: 'var(--space-8)', paddingBottom: 'var(--space-8)' }}
        >
          <h2
            className="text-xl font-bold tracking-tight"
            style={{ color: 'var(--text-primary)', marginBottom: 'var(--space-1)' }}
          >
            Install Script
          </h2>
          <p
            className="text-sm"
            style={{
              color: 'var(--text-secondary)',
              marginBottom: 'var(--space-3)',
              lineHeight: '1.7',
            }}
          >
            The fastest way to install. Downloads the latest binary for your platform and sets it up
            automatically.
          </p>
          <CodeBlock
            lines={[
              'curl -fsSL https://raw.githubusercontent.com/hars-21/reqsh/main/install.sh | sh',
            ]}
          />
        </section>

        {/* Prebuilt Binary */}
        <section
          id="binary"
          className="border-t"
          style={{
            borderColor: 'var(--border-primary)',
            paddingTop: 'var(--space-8)',
            paddingBottom: 'var(--space-8)',
          }}
        >
          <h2
            className="text-xl font-bold tracking-tight"
            style={{ color: 'var(--text-primary)', marginBottom: 'var(--space-1)' }}
          >
            Prebuilt Binary
          </h2>
          <p
            className="text-sm"
            style={{
              color: 'var(--text-secondary)',
              marginBottom: 'var(--space-3)',
              lineHeight: '1.7',
            }}
          >
            Download a prebuilt binary from GitHub Releases. Available for macOS, Linux, and
            Windows.
          </p>
          <div className="flex flex-col" style={{ gap: 'var(--space-2)' }}>
            <StepItem
              number={1}
              text={
                <>
                  Go to{' '}
                  <a
                    href="https://github.com/hars-21/reqsh/releases"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    GitHub Releases
                  </a>{' '}
                  and download the binary for your platform.
                </>
              }
            />
            <StepItem number={2} text="Move the binary to a directory in your PATH." />
            <StepItem number={3} text="Make it executable and run it." />
          </div>
          <div style={{ marginTop: 'var(--space-3)' }}>
            <CodeBlock
              lines={[
                '# Example for macOS / Linux',
                'mv reqsh /usr/local/bin/',
                'chmod +x /usr/local/bin/reqsh',
                'reqsh',
              ]}
            />
          </div>
        </section>

        {/* Build from Source */}
        <section
          id="source"
          className="border-t"
          style={{
            borderColor: 'var(--border-primary)',
            paddingTop: 'var(--space-8)',
            paddingBottom: 'var(--space-8)',
          }}
        >
          <h2
            className="text-xl font-bold tracking-tight"
            style={{ color: 'var(--text-primary)', marginBottom: 'var(--space-1)' }}
          >
            Build from Source
          </h2>
          <p
            className="text-sm"
            style={{
              color: 'var(--text-secondary)',
              marginBottom: 'var(--space-3)',
              lineHeight: '1.7',
            }}
          >
            Clone the repository and build with Cargo. Requires the{' '}
            <a
              href="https://rustup.rs"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
              style={{ color: 'var(--text-primary)' }}
            >
              Rust toolchain
            </a>
            .
          </p>
          <CodeBlock
            lines={[
              'git clone https://github.com/hars-21/reqsh.git',
              'cd reqsh',
              'cargo build --release',
            ]}
          />
          <p
            className="text-sm"
            style={{ color: 'var(--text-secondary)', marginTop: 'var(--space-2)' }}
          >
            The compiled binary will be at{' '}
            <code className="font-mono" style={{ color: 'var(--text-primary)' }}>
              target/release/reqsh
            </code>
            .
          </p>
        </section>

        {/* Verify */}
        <section
          id="verify"
          className="border-t"
          style={{
            borderColor: 'var(--border-primary)',
            paddingTop: 'var(--space-8)',
            paddingBottom: 'var(--space-8)',
          }}
        >
          <h2
            className="text-xl font-bold tracking-tight"
            style={{ color: 'var(--text-primary)', marginBottom: 'var(--space-1)' }}
          >
            Verify Installation
          </h2>
          <p
            className="text-sm"
            style={{ color: 'var(--text-secondary)', marginBottom: 'var(--space-3)' }}
          >
            Run reqsh and check the help output.
          </p>
          <CodeBlock lines={['reqsh', 'reqsh> help']} />
        </section>

        {/* Requirements */}
        <section
          id="requirements"
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
            Requirements
          </h2>
          <ul
            className="flex flex-col text-sm"
            style={{ gap: 'var(--space-1)', color: 'var(--text-secondary)' }}
          >
            <li>
              • <strong style={{ color: 'var(--text-primary)' }}>Build from source:</strong> Rust
              toolchain (rustc, cargo) — install via{' '}
              <a
                href="https://rustup.rs"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
                style={{ color: 'var(--text-primary)' }}
              >
                rustup.rs
              </a>
            </li>
            <li>
              • <strong style={{ color: 'var(--text-primary)' }}>Install script / binary:</strong>{' '}
              No additional dependencies
            </li>
            <li>
              • <strong style={{ color: 'var(--text-primary)' }}>Platforms:</strong> macOS, Linux,
              Windows
            </li>
          </ul>
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
        <div
          key={i}
          style={{ color: line.startsWith('#') ? 'var(--text-tertiary)' : 'var(--text-primary)' }}
        >
          {line}
        </div>
      ))}
    </div>
  );
}

function StepItem({ number, text }: { number: number; text: React.ReactNode }) {
  return (
    <div className="flex items-start" style={{ gap: 'var(--space-1)' }}>
      <span
        className="flex-none font-mono text-sm font-bold"
        style={{ color: 'var(--text-tertiary)' }}
      >
        {number}.
      </span>
      <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>
        {text}
      </span>
    </div>
  );
}
