import type { Metadata } from 'next';
import CodeBlock from '@/components/code-block';

export const metadata: Metadata = {
  title: 'Install',
  description:
    'Install reqsh - use the install script, download a prebuilt binary or build from source.',
};

export default function InstallPage() {
  return (
    <div className="mx-auto max-w-6xl px-6">
      <div className="max-w-3xl pt-24 pb-40">
        <header className="mb-20">
          <h1 className="text-5xl font-bold tracking-tighter text-white">Installation</h1>
          <p className="mt-6 text-xl text-[#888888] leading-relaxed font-medium">
            Get reqsh running on your system in seconds. Choose the method that best fits your
            workflow.
          </p>
        </header>

        <section id="install-script" className="mb-24">
          <h2 className="text-3xl font-bold tracking-tight text-white mb-6">Install Script</h2>
          <p className="text-[#888888] text-lg leading-relaxed mb-6">
            The fastest and recommended way to install. This script detects your OS and
            architecture, downloads the latest binary, and places it in your PATH.
          </p>
          <CodeBlock
            lines={[
              'curl -fsSL https://raw.githubusercontent.com/hars-21/reqsh/main/install.sh | sh',
            ]}
          />
        </section>

        <section id="binary" className="mb-24">
          <h2 className="text-3xl font-bold tracking-tight text-white mb-6">Prebuilt Binary</h2>
          <p className="text-[#888888] text-lg leading-relaxed mb-6">
            Download a prebuilt binary from the{' '}
            <a
              href="https://github.com/hars-21/reqsh/releases"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white border-b border-white/20 hover:border-accent hover:text-accent transition-snappy pb-0.5"
            >
              GitHub Releases
            </a>{' '}
            page. Available for macOS, Linux.
          </p>
          <div className="mb-6 space-y-4 text-[#888888] text-lg">
            <p>
              <span className="text-white font-bold mr-3">1.</span>Download the binary for your
              platform.
            </p>
            <p>
              <span className="text-white font-bold mr-3">2.</span>Move it to a directory included
              in your system PATH.
            </p>
            <p>
              <span className="text-white font-bold mr-3">3.</span>Grant execution permissions.
            </p>
          </div>
          <CodeBlock
            lines={[
              '# macOS / Linux',
              'mv reqsh /.local/bin/',
              'chmod +x /.local/bin/reqsh',
              'reqsh',
            ]}
          />
        </section>

        <section id="source" className="mb-24">
          <h2 className="text-3xl font-bold tracking-tight text-white mb-6">Build from Source</h2>
          <p className="text-[#888888] text-lg leading-relaxed mb-6">
            If you want to compile reqsh yourself, you&apos;ll need the{' '}
            <a
              href="https://rustup.rs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white border-b border-white/20 hover:border-accent hover:text-accent transition-snappy pb-0.5"
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
          <p className="mt-6 text-[#888888] text-lg">
            The binary will be at{' '}
            <code className="text-white bg-white/5 px-2 py-1 rounded font-mono text-sm">
              target/release/reqsh
            </code>
            .
          </p>
        </section>

        <section id="verify">
          <h2 className="text-3xl font-bold tracking-tight text-white mb-6">Verify Installation</h2>
          <p className="text-[#888888] text-lg leading-relaxed mb-6">
            Confirm reqsh is installed and working correctly.
          </p>
          <CodeBlock lines={['reqsh --help']} />
        </section>
      </div>
    </div>
  );
}
