import type { Metadata } from 'next';
import CodeBlock from '@/components/code-block';

export const metadata: Metadata = {
  title: 'Install',
  description:
    'Install reqsh - use the install script, download a prebuilt binary or build from source.',
};

function InlineCode({ children }: { children: React.ReactNode }) {
  return (
    <code className="rounded bg-accent-soft px-1.5 py-0.5 font-mono text-[0.85em] text-accent-strong">
      {children}
    </code>
  );
}

export default function InstallPage() {
  return (
    <div className="mx-auto max-w-6xl px-6">
      <div className="max-w-3xl pt-20 md:pt-28 pb-24">
        <header className="mb-16 md:mb-20">
          <h1 className="font-serif text-5xl md:text-6xl tracking-tight text-foreground text-balance">
            Installation
          </h1>
          <p className="mt-6 text-lg text-muted leading-relaxed text-pretty">
            Get reqsh running on your system in seconds. Choose the method that best fits your
            workflow.
          </p>
        </header>

        <section id="install-script" className="mb-16 md:mb-20">
          <h2 className="font-serif text-3xl md:text-4xl tracking-tight text-foreground mb-5">
            Install script
          </h2>
          <p className="text-muted leading-relaxed mb-6">
            The fastest and recommended way to install. This script detects your OS and
            architecture, downloads the latest binary, and places it in your PATH.
          </p>
          <CodeBlock
            lines={[
              'curl -fsSL https://raw.githubusercontent.com/hars-21/reqsh/main/install.sh | sh',
            ]}
          />
        </section>

        <section id="binary" className="mb-16 md:mb-20">
          <h2 className="font-serif text-3xl md:text-4xl tracking-tight text-foreground mb-5">
            Prebuilt binary
          </h2>
          <p className="text-muted leading-relaxed mb-6">
            Download the latest binary for your platform from the{' '}
            <a
              href="https://github.com/hars-21/reqsh/releases"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline underline-offset-4 decoration-accent/40 transition-snappy hover:decoration-accent"
            >
              GitHub Releases
            </a>{' '}
            page. Available for macOS (Intel &amp; Silicon), Linux (x86_64), and Windows (x86_64).
          </p>
          <ol className="mb-6 flex flex-col gap-3 text-muted list-decimal list-inside marker:text-accent marker:font-semibold">
            <li>Download the binary for your platform.</li>
            <li>Move it to a directory included in your system PATH.</li>
            <li>Grant execution permissions.</li>
          </ol>
          <CodeBlock
            lines={[
              '# macOS / Linux',
              'mv reqsh ~/.local/bin/',
              'chmod +x ~/.local/bin/reqsh',
              'reqsh',
            ]}
          />
          <p className="mt-5 text-muted leading-relaxed">
            Windows users: place <InlineCode>reqsh.exe</InlineCode> in a directory listed in your{' '}
            <InlineCode>%PATH%</InlineCode>.
          </p>
        </section>

        <section id="source" className="mb-16 md:mb-20">
          <h2 className="font-serif text-3xl md:text-4xl tracking-tight text-foreground mb-5">
            Build from source
          </h2>
          <p className="text-muted leading-relaxed mb-6">
            If you want to compile reqsh yourself, you&apos;ll need the{' '}
            <a
              href="https://rustup.rs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline underline-offset-4 decoration-accent/40 transition-snappy hover:decoration-accent"
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
          <p className="mt-5 text-muted leading-relaxed">
            The binary will be at <InlineCode>target/release/reqsh</InlineCode>.
          </p>
        </section>

        <section id="verify">
          <h2 className="font-serif text-3xl md:text-4xl tracking-tight text-foreground mb-5">
            Verify installation
          </h2>
          <p className="text-muted leading-relaxed mb-6">
            Confirm reqsh is installed and working correctly.
          </p>
          <CodeBlock lines={['reqsh --help']} />
        </section>
      </div>
    </div>
  );
}
