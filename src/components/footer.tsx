import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="mt-32 border-t border-white/[0.06]">
      <div className="mx-auto max-w-4xl px-6 py-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-12">
          <div>
            <h3 className="text-sm font-medium mb-4">Product</h3>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/"
                  className="text-sm text-neutral-500 hover:text-neutral-300 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/docs"
                  className="text-sm text-neutral-500 hover:text-neutral-300 transition-colors"
                >
                  Docs
                </Link>
              </li>
              <li>
                <Link
                  href="/install"
                  className="text-sm text-neutral-500 hover:text-neutral-300 transition-colors"
                >
                  Install
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-medium mb-4">Resources</h3>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="https://github.com/hars-21/reqsh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-neutral-500 hover:text-neutral-300 transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/hars-21/reqsh/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-neutral-500 hover:text-neutral-300 transition-colors"
                >
                  Issues
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/hars-21/reqsh/releases"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-neutral-500 hover:text-neutral-300 transition-colors"
                >
                  Releases
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-medium mb-4">Community</h3>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="https://github.com/hars-21/reqsh/blob/main/CONTRIBUTING.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-neutral-500 hover:text-neutral-300 transition-colors"
                >
                  Contributing
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/hars-21/reqsh/blob/main/LICENSE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-neutral-500 hover:text-neutral-300 transition-colors"
                >
                  License
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-white/[0.06] text-sm text-neutral-600">
          © {new Date().getFullYear()} reqsh · Open source
        </div>
      </div>
    </footer>
  );
}
