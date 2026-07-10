'use client';

import { Terminal, TypingAnimation, AnimatedSpan } from '@/components/ui/terminal';

export default function TerminalDemo() {
  return (
    <div className="relative mx-auto w-full max-w-4xl shadow-[0_0_100px_-20px_color-mix(in_srgb,var(--accent)_25%,transparent)] transition-snappy hover:shadow-[0_0_120px_-20px_color-mix(in_srgb,var(--accent)_35%,transparent)] rounded-xl">
      <Terminal className="max-w-4xl text-sm h-140">
        <TypingAnimation delay={500} duration={30}>
          reqsh&gt; base https://api.example.com
        </TypingAnimation>

        <TypingAnimation delay={2500} duration={30}>
          reqsh&gt; header Authorization Bearer tok_abc
        </TypingAnimation>

        <TypingAnimation delay={4500} duration={30}>
          reqsh&gt; GET /users
        </TypingAnimation>

        <TypingAnimation delay={4500} duration={30}>
          .....&gt; ::send
        </TypingAnimation>

        <AnimatedSpan delay={6500} className="text-terminal-success">
          HTTP/1.1 200 OK 142ms
        </AnimatedSpan>

        <AnimatedSpan delay={6600} className="text-terminal-muted">
          content-type: application/json
        </AnimatedSpan>

        <AnimatedSpan delay={6700} className="text-terminal-foreground">
          {`[
  { "id": 1, "name": "Alice" },
  { "id": 2, "name": "Bob" }
]`}
        </AnimatedSpan>

        <TypingAnimation delay={8500} duration={30}>
          reqsh&gt; history
        </TypingAnimation>

        <AnimatedSpan delay={9500} className="text-terminal-muted">
          {`1: base https://api.example.com
2: header Authorization Bearer tok_abc
3: GET /users`}
        </AnimatedSpan>

        <TypingAnimation delay={11000} duration={30}>
          reqsh&gt; rerun 3
        </TypingAnimation>

        <AnimatedSpan delay={12000} className="text-terminal-success">
          HTTP/1.1 200 OK 98ms
        </AnimatedSpan>

        <AnimatedSpan delay={12100} className="text-terminal-muted">
          content-type: application/json
        </AnimatedSpan>

        <AnimatedSpan delay={12200} className="text-terminal-foreground">
          {`[
  { "id": 1, "name": "Alice" },
  { "id": 2, "name": "Bob" }
]`}
        </AnimatedSpan>
      </Terminal>
    </div>
  );
}
