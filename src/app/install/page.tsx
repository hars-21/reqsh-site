import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Install',
  description:
    'Install reqsh — use the install script, download a prebuilt binary, or build from source.',
};

export default function InstallPage() {
  return (
    <div className="mx-auto max-w-4xl px-6">
      <div className="max-w-2xl">
        <header className="pt-12 pb-8 border-b border-white/[0.06]">
          <h1 className="text-3xl font-bold tracking-tight">Install</h1>
          <p className="mt-2 text-neutral-400">Three ways to install reqsh on your system.</p>
        </header>

        <section id="install-script" className="py-10">
          <h2 className="text-xl font-semibold tracking-tight mb-1.5">Install Script</h2>
          <p className="text-sm text-neutral-400 mb-4 leading-relaxed">
            The fastest way to install. Downloads the latest binary for your platform and sets it up
            automatically.
          </p>
          <Code
            lines={[
              'curl -fsSL https://raw.githubusercontent.com/hars-21/reqsh/main/install.sh | sh',
            ]}
          />
        </section>

        <section id="binary" className="py-10 border-t border-white/[0.06]">
          <h2 className="text-xl font-semibold tracking-tight mb-1.5">Prebuilt Binary</h2>
          <p className="text-sm text-neutral-400 mb-4 leading-relaxed">
            Download a prebuilt binary from{' '}
            <a
              href="https://github.com/hars-21/reqsh/releases"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white underline underline-offset-2"
            >
              GitHub Releases
            </a>
            . Available for macOS, Linux, and Windows.
          </p>
          <div className="space-y-2 text-sm text-neutral-400 mb-4">
            <p>1. Download the binary for your platform</p>
            <p>2. Move it to a directory in your PATH</p>
            <p>3. Make it executable and run it</p>
          </div>
          <Code
            lines={[
              '# macOS / Linux',
              'mv reqsh /usr/local/bin/',
              'chmod +x /usr/local/bin/reqsh',
              'reqsh',
            ]}
          />
        </section>

        <section id="source" className="py-10 border-t border-white/[0.06]">
          <h2 className="text-xl font-semibold tracking-tight mb-1.5">Build from Source</h2>
          <p className="text-sm text-neutral-400 mb-4 leading-relaxed">
            Clone the repository and build with Cargo. Requires the{' '}
            <a
              href="https://rustup.rs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white underline underline-offset-2"
            >
              Rust toolchain
            </a>
            .
          </p>
          <Code
            lines={[
              'git clone https://github.com/hars-21/reqsh.git',
              'cd reqsh',
              'cargo build --release',
            ]}
          />
          <p className="text-sm text-neutral-500 mt-3">
            The binary will be at{' '}
            <code className="font-mono text-neutral-300">target/release/reqsh</code>.
          </p>
        </section>

        <section id="verify" className="py-10 border-t border-white/[0.06]">
          <h2 className="text-xl font-semibold tracking-tight mb-1.5">Verify Installation</h2>
          <p className="text-sm text-neutral-400 mb-4">Run reqsh and check the help output.</p>
          <Code lines={['reqsh', 'reqsh> help']} />
        </section>

        <section id="requirements" className="py-10 border-t border-white/[0.06]">
          <h2 className="text-xl font-semibold tracking-tight mb-4">Requirements</h2>
          <ul className="space-y-2 text-sm text-neutral-400">
            <li>
              <span className="text-white font-medium">Build from source:</span> Rust toolchain
              (rustc, cargo) — install via{' '}
              <a
                href="https://rustup.rs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white underline underline-offset-2"
              >
                rustup.rs
              </a>
            </li>
            <li>
              <span className="text-white font-medium">Install script / binary:</span> No additional
              dependencies
            </li>
            <li>
              <span className="text-white font-medium">Platforms:</span> macOS, Linux, Windows
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}

function Code({ lines }: { lines: string[] }) {
  return (
    <div className="rounded-lg border border-white/[0.06] bg-surface p-4 font-mono text-sm overflow-x-auto">
      {lines.map((line, i) => (
        <div key={i} className={line.startsWith('#') ? 'text-neutral-600' : 'text-neutral-300'}>
          {line}
        </div>
      ))}
    </div>
  );
}
