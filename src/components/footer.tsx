import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="mt-40 border-t border-white/4 bg-[#000000]">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          <div className="col-span-2">
            <span className="font-mono text-xl font-semibold tracking-tight text-white">reqsh</span>
            <p className="mt-4 text-[#888888] max-w-xs leading-relaxed">
              An interactive, persistent shell for HTTP requests. Built with Rust for speed and
              simplicity.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-white mb-6">Resources</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/docs" className="text-[#888888] hover:text-white transition-snappy">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/install" className="text-[#888888] hover:text-white transition-snappy">
                  Installation
                </Link>
              </li>
              <li>
                <a
                  href="https://github.com/hars-21/reqsh/releases"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#888888] hover:text-white transition-snappy"
                >
                  Releases
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-medium text-white mb-6">Community</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://github.com/hars-21/reqsh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#888888] hover:text-white transition-snappy"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/hars-21/reqsh/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#888888] hover:text-white transition-snappy"
                >
                  Issues
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/hars-21/reqsh/blob/main/LICENSE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#888888] hover:text-white transition-snappy"
                >
                  License
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
