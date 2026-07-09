import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="relative mt-40 md:mt-56 border-t border-accent/10 bg-black/50 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
          <div className="md:col-span-1">
            <div className="inline-flex items-center gap-2.5">
              <Image
                src="/logo.png"
                alt="reqsh logo"
                width={28}
                height={28}
                className="rounded-md"
              />
              <span className="font-mono text-lg font-bold tracking-tight text-white">
                reqsh
              </span>
            </div>
            <p className="mt-4 text-slate-400 leading-relaxed text-sm max-w-xs">
              An interactive, persistent shell for HTTP requests. Built with Rust for ultimate speed
              and simplicity.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-white mb-6 uppercase tracking-wider">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/docs"
                  className="text-sm text-slate-400 hover:text-accent transition-colors duration-300"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  href="/install"
                  className="text-sm text-slate-400 hover:text-accent transition-colors duration-300"
                >
                  Installation
                </Link>
              </li>
              <li>
                <Link
                  href="/changelog"
                  className="text-sm text-slate-400 hover:text-accent transition-colors duration-300"
                >
                  What&apos;s New
                </Link>
              </li>
              <li>
                <a
                  href="https://github.com/hars-21/reqsh/releases"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-400 hover:text-accent transition-colors duration-300"
                >
                  Releases (v0.1.5)
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-white mb-6 uppercase tracking-wider">Community</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://github.com/hars-21/reqsh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-400 hover:text-accent transition-colors duration-300"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/hars-21/reqsh/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-400 hover:text-accent transition-colors duration-300"
                >
                  Issues
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/hars-21/reqsh/blob/main/LICENSE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-400 hover:text-accent transition-colors duration-300"
                >
                  License
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-white mb-6 uppercase tracking-wider">Tech Stack</h3>
            <ul className="space-y-3">
              <li className="text-sm text-slate-400">
                Built with <span className="text-accent font-semibold">Rust</span>
              </li>
              <li className="text-sm text-slate-400">
                <span className="text-accent font-semibold">macOS, Linux, Windows</span>
              </li>
              <li className="text-sm text-slate-400">
                <span className="text-accent font-semibold">MIT License</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-accent/10 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-xs">
          <p>© {new Date().getFullYear()} reqsh. Open source. All rights reserved.</p>
          <p>Crafted with precision and speed.</p>
        </div>
      </div>
    </footer>
  );
}
