import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="mt-40 border-t border-white/4 bg-[#000000]">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex flex-col md:flex-row justify-between gap-16">
          <div className="max-w-xs">
            <span className="font-mono text-xl font-semibold tracking-tight text-white flex items-center gap-2.5">
              <Image
                src="/logo.png"
                alt="reqsh logo"
                width={24}
                height={24}
                className="rounded-md"
              />
              reqsh
            </span>
            <p className="mt-5 text-[#888888] leading-relaxed text-sm">
              An interactive, persistent shell for HTTP requests. Built with Rust for ultimate speed
              and simplicity.
            </p>
          </div>

          <div className="flex flex-wrap gap-16">
            <div>
              <h3 className="text-sm font-semibold text-white mb-6">Resources</h3>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="/docs"
                    className="text-sm text-[#888888] hover:text-white transition-snappy"
                  >
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link
                    href="/install"
                    className="text-sm text-[#888888] hover:text-white transition-snappy"
                  >
                    Installation
                  </Link>
                </li>
                <li>
                  <a
                    href="https://github.com/hars-21/reqsh/releases"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[#888888] hover:text-white transition-snappy"
                  >
                    Releases
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white mb-6">Community</h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="https://github.com/hars-21/reqsh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[#888888] hover:text-white transition-snappy"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/hars-21/reqsh/issues"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[#888888] hover:text-white transition-snappy"
                  >
                    Issues
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/hars-21/reqsh/blob/main/LICENSE"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[#888888] hover:text-white transition-snappy"
                  >
                    License
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/4 text-[#888888] text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} reqsh. Open source.</p>
          <p>Built with Rust. Deployed on Vercel.</p>
        </div>
      </div>
    </footer>
  );
}
