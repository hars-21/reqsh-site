import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import TerminalDemo from '@/components/terminal-demo';

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-6">
      <section className="flex flex-col items-center text-center pt-24 md:pt-32 pb-16 md:pb-20">
        <h1 className="text-5xl md:text-[5.5rem] font-bold tracking-tighter leading-[1.05] text-white max-w-4xl">
          The interactive shell for <span className="text-accent">HTTP</span> requests.
        </h1>
        <p className="mt-6 md:mt-8 text-lg md:text-xl text-[#888888] leading-relaxed max-w-2xl font-medium">
          Set a base URL, add headers once, use variables, save requests, and re-run them from
          history. Pure terminal efficiency, built in Rust - for macOS, Linux, and Windows.
        </p>
        <div className="mt-8 md:mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/install"
            className="group flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-3.5 text-sm font-bold text-white transition-snappy hover:brightness-110 hover:shadow-[0_0_30px_-5px_rgba(255,51,51,0.4)]"
          >
            Install reqsh
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-snappy" />
          </Link>
          <Link
            href="/docs"
            className="flex items-center justify-center rounded-full border border-white/10 bg-transparent px-8 py-3.5 text-sm font-bold text-white transition-snappy hover:bg-white/5"
          >
            Documentation
          </Link>
        </div>
      </section>

      <section className="w-full max-w-5xl mx-auto mb-32 md:mb-40">
        <TerminalDemo />
      </section>

      <section className="py-20 md:py-24 border-t border-white/4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6">
              A persistent REPL.
            </h2>
            <p className="text-base md:text-lg text-[#888888] leading-relaxed">
              Stop typing the same host and authentication headers over and over. With reqsh, you
              set your base URL and headers once in a session. Every subsequent request uses them
              automatically.
            </p>
          </div>
          <div className="bg-[#050505] border border-white/8 rounded-2xl p-6 md:p-8 font-mono text-sm leading-8 text-[#888888] overflow-x-auto">
            <div>
              <span className="text-accent font-bold">reqsh&gt;</span>{' '}
              <span className="text-white font-semibold">base</span> https://api.stripe.com
            </div>
            <div>
              <span className="text-accent font-bold">reqsh&gt;</span>{' '}
              <span className="text-white font-semibold">header</span> Authorization Bearer sk_test
            </div>
            <div className="mt-4">
              <span className="text-accent font-bold">reqsh&gt;</span>{' '}
              <span className="text-accent font-semibold">GET</span>{' '}
              <span className="text-white">/v1/customers</span>
            </div>
            <div>
              <span className="text-accent font-bold">.....&gt;</span>{' '}
              <span className="text-white">::send</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 border-t border-white/4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="order-2 md:order-1 bg-[#050505] border border-white/8 rounded-2xl p-6 md:p-8 font-mono text-sm leading-8 text-[#888888] overflow-x-auto">
            <div>
              <span className="text-accent font-bold">reqsh&gt;</span>{' '}
              <span className="text-white font-semibold">history</span>
            </div>
            <div className="mt-2 ml-4 space-y-0.5">
              <div className="flex gap-4">
                <span className="opacity-50">1</span>
                <span>base https://api.stripe.com</span>
              </div>
              <div className="flex gap-4">
                <span className="opacity-50">2</span>
                <span>header Authorization Bearer sk_test</span>
              </div>
              <div className="flex gap-4">
                <span className="opacity-50">3</span>
                <span>GET /v1/customers</span>
              </div>
            </div>
            <div className="mt-4">
              <span className="text-accent font-bold">reqsh&gt;</span>{' '}
              <span className="text-white font-semibold">rerun</span> 3
            </div>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6">
              Time-travel with history.
            </h2>
            <p className="text-base md:text-lg text-[#888888] leading-relaxed">
              Every command is saved. Type{' '}
              <code className="text-white bg-white/5 px-1.5 py-0.5 rounded">history</code> to see
              everything you&apos;ve done in the current session. Made a typo or need to repeat a
              request? Just use{' '}
              <code className="text-white bg-white/5 px-1.5 py-0.5 rounded">rerun &lt;id&gt;</code>{' '}
              to execute it instantly.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 border-t border-white/4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6">
              Variables. Save. Run.
            </h2>
            <p className="text-base md:text-lg text-[#888888] leading-relaxed">
              Use{' '}
              <code className="text-white bg-white/5 px-1.5 py-0.5 rounded">
                {'{{'}name{'}}'}
              </code>{' '}
              syntax to interpolate values into paths, headers, and bodies. Save any request to
              memory with <code className="text-white bg-white/5 px-1.5 py-0.5 rounded">save</code>{' '}
              and replay it instantly with{' '}
              <code className="text-white bg-white/5 px-1.5 py-0.5 rounded">run</code>. Every
              response includes its timing so you can measure performance at a glance.
            </p>
          </div>
          <div className="order-1 md:order-2 bg-[#050505] border border-white/8 rounded-2xl p-6 md:p-8 font-mono text-sm leading-8 text-[#888888] overflow-x-auto">
            <div>
              <span className="text-accent font-bold">reqsh&gt;</span>{' '}
              <span className="text-white font-semibold">set</span> token eyJhbGciOiJIUzI1NiJ9
            </div>
            <div className="mt-4">
              <span className="text-accent font-bold">reqsh&gt;</span>{' '}
              <span className="text-accent font-semibold">GET</span>{' '}
              <span className="text-white">/users/</span>
              <span className="text-accent">
                {'{{'}token{'}}'}
              </span>
            </div>
            <div>
              <span className="text-accent font-bold">.....&gt;</span>{' '}
              <span className="text-white">::send</span>
            </div>
            <div className="mt-3 text-[#4ADE80] text-xs">200 OK — 142ms</div>
            <div className="mt-6">
              <span className="text-accent font-bold">reqsh&gt;</span>{' '}
              <span className="text-white font-semibold">save</span> get-users
            </div>
            <div>
              <span className="text-accent font-bold">reqsh&gt;</span>{' '}
              <span className="text-white font-semibold">run</span> get-users
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 border-t border-white/4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="bg-[#050505] border border-white/8 rounded-2xl p-8 md:p-10 flex items-center justify-center min-h-32">
            <div className="text-xl md:text-2xl font-mono text-white tracking-widest flex items-center">
              <span className="text-accent font-bold mr-4">reqsh&gt;</span>P
              <span className="text-[#444444]">OST</span>
              <span className="w-3 h-7 bg-white ml-1 animate-blink" />
            </div>
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6">
              Built for speed.
            </h2>
            <p className="text-base md:text-lg text-[#888888] leading-relaxed mb-6">
              Written in Rust, reqsh starts instantly and uses minimal memory. HTTP methods are
              case-insensitive (
              <code className="text-white bg-white/5 px-1.5 py-0.5 rounded">GET</code>,{' '}
              <code className="text-white bg-white/5 px-1.5 py-0.5 rounded">POST</code>,{' '}
              <code className="text-white bg-white/5 px-1.5 py-0.5 rounded">PUT</code>,{' '}
              <code className="text-white bg-white/5 px-1.5 py-0.5 rounded">PATCH</code>,{' '}
              <code className="text-white bg-white/5 px-1.5 py-0.5 rounded">DELETE</code>), and
              responses are pretty-printed with colored output. Use absolute URLs directly — no base
              URL required.
            </p>
            <Link
              href="/docs"
              className="text-accent font-bold hover:text-white transition-snappy inline-flex items-center gap-1.5"
            >
              Read the documentation <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
