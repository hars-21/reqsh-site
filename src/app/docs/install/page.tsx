import type { Metadata } from 'next';
import CodeBlock from '@/components/code-block';

export const metadata: Metadata = {
  title: 'Install',
  description:
    'Install reqsh - use the install script, download a prebuilt binary or build from source.',
};

export default function InstallPage() {
  return (
    <>
      <header className="mb-16">
        <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
          Installation
        </h1>
        <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
          Get reqsh running on your system in seconds. Choose the method that best fits your
          workflow.
        </p>
      </header>

      <section id="install-script" className="mb-20">
        <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">Install Script</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          The fastest and recommended way to install. This script detects your OS and architecture,
          downloads the latest binary, and places it in your PATH.
        </p>
        <CodeBlock
          lines={[
            'curl -fsSL https://raw.githubusercontent.com/hars-21/reqsh/main/install.sh | sh',
          ]}
        />
      </section>

      <section id="binary" className="mb-20">
        <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">Prebuilt Binary</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Download the latest binary for your platform from the{' '}
          <a
            href="https://github.com/hars-21/reqsh/releases"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground border-b border-border hover:border-accent hover:text-accent transition-colors pb-0.5"
          >
            GitHub Releases
          </a>{' '}
          page. Available for macOS (Intel &amp; Silicon), Linux (x86_64), and Windows (x86_64).
        </p>
        <div className="mb-4 space-y-3 text-muted-foreground">
          <p>
            <span className="text-foreground font-semibold mr-2">1.</span>Download the binary for
            your platform.
          </p>
          <p>
            <span className="text-foreground font-semibold mr-2">2.</span>Move it to a directory
            included in your system PATH.
          </p>
          <p>
            <span className="text-foreground font-semibold mr-2">3.</span>Grant execution
            permissions.
          </p>
        </div>
        <CodeBlock
          lines={[
            '# macOS / Linux',
            'mv reqsh ~/.local/bin/',
            'chmod +x ~/.local/bin/reqsh',
            'reqsh',
          ]}
        />
        <p className="mt-4 text-muted-foreground">
          Windows users: place{' '}
          <code className="text-foreground bg-muted px-1.5 py-0.5 rounded font-mono text-sm">
            reqsh.exe
          </code>{' '}
          in a directory listed in your{' '}
          <code className="text-foreground bg-muted px-1.5 py-0.5 rounded font-mono text-sm">
            %PATH%
          </code>
          .
        </p>
      </section>

      <section id="source" className="mb-20">
        <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">
          Build from Source
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          If you want to compile reqsh yourself, you&apos;ll need the{' '}
          <a
            href="https://rustup.rs"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground border-b border-border hover:border-accent hover:text-accent transition-colors pb-0.5"
          >
            Rust toolchain
          </a>{' '}
          installed.
        </p>
        <CodeBlock
          lines={[
            'git clone https://github.com/hars-21/reqsh.git',
            'cd reqsh',
            'cargo build --release',
          ]}
        />
        <p className="mt-4 text-muted-foreground">
          The binary will be at{' '}
          <code className="text-foreground bg-muted px-1.5 py-0.5 rounded font-mono text-sm">
            target/release/reqsh
          </code>
          .
        </p>
      </section>

      <section id="verify">
        <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">
          Verify Installation
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Confirm reqsh is installed and working correctly.
        </p>
        <CodeBlock lines={['reqsh --help']} />
      </section>
    </>
  );
}
