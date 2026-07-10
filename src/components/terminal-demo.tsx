'use client';

import { Terminal, TypingAnimation, AnimatedSpan } from '@/components/ui/terminal';

function PromptLine({ text }: { text: string }) {
  const promptEnd = text.indexOf('>') + 1;
  if (promptEnd <= 0) return <>{text}</>;
  const prompt = text.slice(0, promptEnd);
  const content = text.slice(promptEnd);
  return (
    <>
      <span className="font-semibold text-terminal-accent">{prompt}</span>
      <span>{content}</span>
    </>
  );
}

export default function TerminalDemo() {
  const renderPrompt = (text: string) => <PromptLine text={text} />;

  return (
    <div className="relative mx-auto w-full max-w-4xl shadow-[0_0_100px_-20px_color-mix(in_oklch,var(--accent)_25%,transparent)] transition-snappy hover:shadow-[0_0_120px_-20px_color-mix(in_oklch,var(--accent)_35%,transparent)] rounded-xl">
      <Terminal className="max-w-4xl text-sm h-148">
        <TypingAnimation delay={500} duration={30} renderText={renderPrompt}>
          reqsh&gt; base https://api.example.com
        </TypingAnimation>

        <TypingAnimation delay={2500} duration={30} renderText={renderPrompt}>
          reqsh&gt; header Authorization Bearer tok_abc
        </TypingAnimation>

        <TypingAnimation delay={4500} duration={30} renderText={renderPrompt}>
          reqsh&gt; GET /users
        </TypingAnimation>

        <TypingAnimation delay={5200} duration={30} renderText={renderPrompt}>
          .....&gt; ::send
        </TypingAnimation>

        <AnimatedSpan delay={6500} className="font-mono">
          <div>
            <span className="text-terminal-muted">HTTP/1.1 </span>
            <span className="font-semibold text-terminal-success">200 </span>
            <span className="text-terminal-success">OK </span>
            <span className="text-terminal-accent">142ms</span>
          </div>
        </AnimatedSpan>

        <AnimatedSpan delay={6600} className="font-mono">
          <div>
            <span className="text-terminal-accent">content-type</span>
            <span className="text-terminal-muted">: application/json</span>
          </div>
        </AnimatedSpan>

        <AnimatedSpan delay={6700} className="font-mono text-terminal-muted">
          <div>
            {'\n'}
            {'[\n'}
            {'  { '}
            <span className="text-terminal-accent">&quot;id&quot;</span>
            <span className="text-terminal-muted">: </span>
            <span className="text-terminal-success">1</span>
            <span className="text-terminal-muted">, </span>
            <span className="text-terminal-accent">&quot;name&quot;</span>
            <span className="text-terminal-muted">: </span>
            <span className="text-terminal-success">&quot;Alice&quot;</span>
            {' },\n'}
            {'  { '}
            <span className="text-terminal-accent">&quot;id&quot;</span>
            <span className="text-terminal-muted">: </span>
            <span className="text-terminal-success">2</span>
            <span className="text-terminal-muted">, </span>
            <span className="text-terminal-accent">&quot;name&quot;</span>
            <span className="text-terminal-muted">: </span>
            <span className="text-terminal-success">&quot;Bob&quot;</span>
            {' }\n'}
            {']'}
          </div>
        </AnimatedSpan>

        <TypingAnimation delay={8500} duration={30} renderText={renderPrompt}>
          reqsh&gt; history
        </TypingAnimation>

        <AnimatedSpan delay={9500} className="font-mono">
          <div>
            <span className="text-terminal-muted">1: </span>
            <span className="text-terminal-foreground">base https://api.example.com</span>
            {'\n'}
            <span className="text-terminal-muted">2: </span>
            <span className="text-terminal-foreground">header Authorization Bearer tok_abc</span>
            {'\n'}
            <span className="text-terminal-muted">3: </span>
            <span className="text-terminal-foreground">GET /users</span>
          </div>
        </AnimatedSpan>

        <TypingAnimation delay={11000} duration={30} renderText={renderPrompt}>
          reqsh&gt; rerun 3
        </TypingAnimation>

        <AnimatedSpan delay={12000} className="font-mono">
          <div>
            <span className="text-terminal-muted">HTTP/1.1 </span>
            <span className="font-semibold text-terminal-success">200 </span>
            <span className="text-terminal-success">OK </span>
            <span className="text-terminal-accent">98ms</span>
          </div>
        </AnimatedSpan>

        <AnimatedSpan delay={12100} className="font-mono">
          <div>
            <span className="text-terminal-accent">content-type</span>
            <span className="text-terminal-muted">: application/json</span>
          </div>
        </AnimatedSpan>

        <AnimatedSpan delay={12200} className="font-mono text-terminal-muted">
          <div>
            {'\n'}
            {'[\n'}
            {'  { '}
            <span className="text-terminal-accent">&quot;id&quot;</span>
            <span className="text-terminal-muted">: </span>
            <span className="text-terminal-success">1</span>
            <span className="text-terminal-muted">, </span>
            <span className="text-terminal-accent">&quot;name&quot;</span>
            <span className="text-terminal-muted">: </span>
            <span className="text-terminal-success">&quot;Alice&quot;</span>
            {' },\n'}
            {'  { '}
            <span className="text-terminal-accent">&quot;id&quot;</span>
            <span className="text-terminal-muted">: </span>
            <span className="text-terminal-success">2</span>
            <span className="text-terminal-muted">, </span>
            <span className="text-terminal-accent">&quot;name&quot;</span>
            <span className="text-terminal-muted">: </span>
            <span className="text-terminal-success">&quot;Bob&quot;</span>
            {' }\n'}
            {']'}
          </div>
        </AnimatedSpan>
      </Terminal>
    </div>
  );
}
