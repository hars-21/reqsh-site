import Link from 'next/link';
import { ArrowRight, Zap } from 'lucide-react';
import TerminalDemo from '@/components/terminal-demo';

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative mx-auto max-w-6xl px-6 pt-24 md:pt-40 pb-16 md:pb-24">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/5 px-4 py-2 backdrop-blur-sm">
            <Zap size={14} className="text-accent animate-pulse" />
            <span className="text-xs font-semibold text-accent">Lightning-fast HTTP client</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[1.1] text-white max-w-5xl mb-6 animate-slide-in">
            The interactive shell for <span className="relative inline-block">
              <span className="absolute inset-0 bg-gradient-to-r from-accent to-accent/60 blur-lg opacity-50 -z-10"></span>
              <span className="text-accent">HTTP</span>
            </span> requests.
          </h1>

          {/* Subheading */}
          <p className="mt-8 text-base md:text-lg text-slate-300 leading-relaxed max-w-3xl font-medium">
            Set a base URL, add headers once, use variables, save requests, and re-run them from
            history. Pure terminal efficiency, built in Rust — for macOS, Linux, and Windows.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 md:mt-14 flex flex-col sm:flex-row flex-wrap justify-center gap-4">
            <Link
              href="/install"
              className="group relative overflow-hidden rounded-full bg-gradient-to-r from-accent to-accent/80 px-8 py-4 text-sm font-bold text-white transition-all duration-300 hover:shadow-lg hover:shadow-accent/50 flex items-center justify-center gap-2"
            >
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
              <span className="relative flex items-center gap-2">
                Install reqsh
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link
              href="/docs"
              className="group rounded-full border-2 border-accent/30 bg-accent/5 hover:bg-accent/10 px-8 py-4 text-sm font-bold text-white transition-all duration-300 hover:border-accent/50 backdrop-blur-sm flex items-center justify-center"
            >
              Documentation
            </Link>
          </div>
        </div>
      </section>

      {/* Terminal Demo */}
      <section className="relative mx-auto max-w-5xl px-6 mb-32 md:mb-48">
        <div className="group relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-accent/0 via-accent/20 to-accent/0 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative">
            <TerminalDemo />
          </div>
        </div>
      </section>

      {/* Feature 1: Persistent REPL */}
      <section className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
          <div>
            <div className="inline-block mb-4 px-3 py-1 rounded-full bg-accent/10 border border-accent/30">
              <span className="text-xs font-bold text-accent tracking-wide">PERSISTENT STATE</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
              A persistent REPL.
            </h2>
            <p className="text-base md:text-lg text-slate-300 leading-relaxed mb-6">
              Stop typing the same host and authentication headers over and over. With reqsh, you
              set your base URL and headers once in a session. Every subsequent request uses them
              automatically.
            </p>
            <div className="flex gap-2">
              <div className="w-1 h-8 bg-gradient-to-b from-accent to-transparent rounded-full" />
              <p className="text-sm text-slate-400 italic">
                "Less repetition. More productivity."
              </p>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-accent/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative bg-gradient-to-br from-slate-900/50 to-black border border-accent/20 backdrop-blur rounded-2xl p-6 md:p-8 font-mono text-sm leading-8 text-slate-400 overflow-x-auto">
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
        </div>
      </section>

      {/* Feature 2: History & Time Travel */}
      <section className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
          <div className="order-2 md:order-1 relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-accent/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative bg-gradient-to-br from-slate-900/50 to-black border border-accent/20 backdrop-blur rounded-2xl p-6 md:p-8 font-mono text-sm leading-8 text-slate-400 overflow-x-auto">
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
          </div>
          <div className="order-1 md:order-2">
            <div className="inline-block mb-4 px-3 py-1 rounded-full bg-accent/10 border border-accent/30">
              <span className="text-xs font-bold text-accent tracking-wide">TIME TRAVEL</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
              Time-travel with history.
            </h2>
            <p className="text-base md:text-lg text-slate-300 leading-relaxed mb-6">
              Every command is saved. Type{' '}
              <code className="text-white bg-accent/10 border border-accent/30 px-2 py-1 rounded font-mono text-sm">history</code> to see
              everything you&apos;ve done in the current session. Made a typo or need to repeat a
              request? Just use{' '}
              <code className="text-white bg-accent/10 border border-accent/30 px-2 py-1 rounded font-mono text-sm">rerun &lt;id&gt;</code>{' '}
              to execute it instantly.
            </p>
            <div className="flex gap-2">
              <div className="w-1 h-8 bg-gradient-to-b from-accent to-transparent rounded-full" />
              <p className="text-sm text-slate-400 italic">
                "Never lose a request again."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 3: Variables & Saved Requests */}
      <section className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
          <div className="order-2 md:order-1">
            <div className="inline-block mb-4 px-3 py-1 rounded-full bg-accent/10 border border-accent/30">
              <span className="text-xs font-bold text-accent tracking-wide">DYNAMIC REQUESTS</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
              Variables. Save. Run.
            </h2>
            <p className="text-base md:text-lg text-slate-300 leading-relaxed mb-6">
              Use{' '}
              <code className="text-white bg-accent/10 border border-accent/30 px-2 py-1 rounded font-mono text-sm">
                {'{{'}name{'}}'}
              </code>{' '}
              syntax to interpolate values into paths, headers, and bodies. Save any request to
              memory with <code className="text-white bg-accent/10 border border-accent/30 px-2 py-1 rounded font-mono text-sm">save</code>{' '}
              and replay it instantly with{' '}
              <code className="text-white bg-accent/10 border border-accent/30 px-2 py-1 rounded font-mono text-sm">run</code>. Every
              response includes its timing so you can measure performance at a glance.
            </p>
            <div className="flex gap-2">
              <div className="w-1 h-8 bg-gradient-to-b from-accent to-transparent rounded-full" />
              <p className="text-sm text-slate-400 italic">
                "Reusable, templated requests at your fingertips."
              </p>
            </div>
          </div>
          <div className="order-1 md:order-2 relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-accent/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative bg-gradient-to-br from-slate-900/50 to-black border border-accent/20 backdrop-blur rounded-2xl p-6 md:p-8 font-mono text-sm leading-8 text-slate-400 overflow-x-auto">
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
              <div className="mt-3 text-emerald-400 text-xs">200 OK — 142ms</div>
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
        </div>
      </section>

      {/* Feature 4: Built for Speed */}
      <section className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-accent/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative bg-gradient-to-br from-slate-900/50 to-black border border-accent/20 backdrop-blur rounded-2xl p-8 md:p-10 flex items-center justify-center min-h-40">
              <div className="text-xl md:text-2xl font-mono text-white tracking-widest flex items-center">
                <span className="text-accent font-bold mr-4">reqsh&gt;</span>P
                <span className="text-slate-500">OST</span>
                <span className="w-3 h-7 bg-gradient-to-b from-accent to-accent/50 ml-1 animate-blink rounded-sm" />
              </div>
            </div>
          </div>
          <div>
            <div className="inline-block mb-4 px-3 py-1 rounded-full bg-accent/10 border border-accent/30">
              <span className="text-xs font-bold text-accent tracking-wide">PERFORMANCE</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
              Built for speed.
            </h2>
            <p className="text-base md:text-lg text-slate-300 leading-relaxed mb-6">
              Written in Rust, reqsh starts instantly and uses minimal memory. HTTP methods are
              case-insensitive (
              <code className="text-white bg-accent/10 border border-accent/30 px-2 py-1 rounded font-mono text-sm">GET</code>,{' '}
              <code className="text-white bg-accent/10 border border-accent/30 px-2 py-1 rounded font-mono text-sm">POST</code>,{' '}
              <code className="text-white bg-accent/10 border border-accent/30 px-2 py-1 rounded font-mono text-sm">PUT</code>,{' '}
              <code className="text-white bg-accent/10 border border-accent/30 px-2 py-1 rounded font-mono text-sm">PATCH</code>,{' '}
              <code className="text-white bg-accent/10 border border-accent/30 px-2 py-1 rounded font-mono text-sm">DELETE</code>), and
              responses are pretty-printed with colored output. Use absolute URLs directly — no base
              URL required.
            </p>
            <Link
              href="/docs"
              className="group text-accent font-bold hover:text-white transition-colors inline-flex items-center gap-2"
            >
              Read the documentation 
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
