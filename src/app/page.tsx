import React from 'react';
import { Terminal, TerminalSquare, Zap, FolderClock, Bookmark } from 'lucide-react';
import TerminalWindow from '@/components/terminalWindow';
import Feature from '@/components/featureCard';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center px-6 py-12 md:py-20 lg:py-24">
      <div className="max-w-6xl w-full mx-auto flex-1 flex flex-col">
        <header className="flex items-center justify-between mb-16 md:mb-24 relative z-20">
          <div className="flex items-center gap-4">
            <div className="relative group">
              <div className="absolute inset-0 bg-(--accent-red) blur-xl opacity-40 group-hover:opacity-60 transition duration-500 rounded-xl"></div>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-black/80 border border-white/10 relative z-10">
                <Terminal className="text-(--accent-red)" />
              </div>
            </div>
            <div>
              <div className="text-white text-xl font-bold tracking-tight">reqsh</div>
              <div className="text-xs text-[rgba(255,255,255,0.5)] font-mono">
                _ interactive_shell
              </div>
            </div>
          </div>
          <nav className="flex items-center gap-4">
            <a
              href="/docs"
              className="px-4 py-2 text-sm rounded-md bg-(--accent-red) hover:bg-[#c81515] transition-colors"
            >
              Get Started
            </a>
            <a
              href="#features"
              className="text-sm text-[rgba(255,255,255,0.65)] hover:text-white transition-colors"
            >
              Features
            </a>
          </nav>
        </header>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center flex-1">
          <div className="max-w-2xl relative z-10">
            <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] tracking-tight mb-8 bg-clip-text text-transparent bg-linear-to-b from-white to-white/60">
              Interactive HTTP shell for API workflows
            </h1>
            <p className="text-lg md:text-xl text-[rgba(255,255,255,0.7)] mb-10 leading-relaxed">
              A lightweight, terminal-first tool to send HTTP requests, save them, and reuse them —
              all in an{' '}
              <span className="text-(--accent-red) font-medium animate-pulse drop-shadow-[0_0_8px_var(--accent-red)]">
                interactive
              </span>{' '}
              REPL.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="/docs"
                className="relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-(--accent-red) hover:bg-[#ff1a1a] transition-all text-white font-medium text-lg leading-none shadow-[0_0_30px_var(--accent-red-glow)] hover:shadow-[0_0_45px_var(--accent-red-glow)] hover:scale-[1.02] border border-white/10 group"
              >
                <div className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                Get Started
              </a>
              <a
                href="#try"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 hover:border-red-500/30 transition-all text-white/90 font-medium text-lg leading-none hover:scale-[1.02] hover:shadow-[0_0_20px_var(--accent-red-glow)]"
              >
                Quick Tour
              </a>
            </div>
          </div>

          <div className="relative group perspective-1000 w-full max-w-xl mx-auto lg:max-w-none ml-4 lg:ml-12">
            <div className="absolute -inset-1 bg-linear-to-tr from-(--accent-red) to-red-900 rounded-3xl blur-3xl opacity-30 group-hover:opacity-50 transition duration-700"></div>

            <div className="relative rounded-2xl bg-[#080808] border border-red-500/20 shadow-[0_20px_70px_rgba(255,46,46,0.15)] overflow-hidden flex flex-col transform transition-transform duration-500 hover:-translate-y-2 hover:shadow-[0_25px_80px_rgba(255,46,46,0.25)]">
              <div className="flex items-center px-4 py-3 bg-white/2 border-b border-white/5">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]"></div>
                </div>
                <div className="mx-auto text-xs font-medium text-white/30 font-sans tracking-widest uppercase">
                  reqsh — ~/project
                </div>
                <div className="w-12"></div>
              </div>

              <TerminalWindow />
            </div>
          </div>
        </section>

        <section id="features" className="mt-32 md:mt-40">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-white mb-4">
              Everything you need.
            </h2>
            <p className="text-white/60">Powerful features wrapped in an intuitive interface.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <Feature
              title="Interactive REPL"
              desc="A focused prompt: `reqsh>` where you type, run, and iterate quickly."
              icon={TerminalSquare}
            />
            <Feature
              title="Run HTTP requests"
              desc="Send `GET`, `POST`, and other methods with ease."
              icon={Zap}
            />
            <Feature
              title="Save & reuse"
              desc="Persist requests and replay them from the REPL."
              icon={Bookmark}
            />
            <Feature
              title="History & autocomplete"
              desc="Navigate your command history and autocomplete requests."
              icon={FolderClock}
            />
          </div>
        </section>

        <footer className="my-24 md:my-32 text-center text-white/50 text-sm">
          <div className="mx-auto w-1/3 h-px bg-linear-to-r from-transparent via-white/10 to-transparent mb-12"></div>
          <p>Terminal-first and fast. Built in Rust.</p>
        </footer>
      </div>
    </main>
  );
}
