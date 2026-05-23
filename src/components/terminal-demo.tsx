export default function TerminalDemo() {
  return (
    <div className="rounded-xl border border-white/[0.06] bg-[#080808] overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.04]">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
          <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
        </div>
        <span className="mx-auto text-xs text-neutral-600 font-mono">reqsh</span>
        <div className="w-12" />
      </div>

      <div className="p-5 font-mono text-[13px] leading-7 overflow-x-auto">
        <Prompt shell="reqsh">
          <span className="text-white">base</span>{' '}
          <span className="text-[#5B8DEF]">https://api.example.com</span>
        </Prompt>
        <Prompt shell="reqsh">
          <span className="text-white">header</span>{' '}
          <span className="text-neutral-400">Authorization Bearer tok_abc</span>
        </Prompt>

        <div className="mt-4" />
        <Prompt shell="reqsh">
          <span className="text-accent font-medium">GET</span>{' '}
          <span className="text-[#5B8DEF]">/users</span>
        </Prompt>
        <Prompt shell=".....">
          <span className="text-white">::send</span>
        </Prompt>

        <div className="mt-1.5 text-[#4ADE80]">HTTP/1.1 200 OK</div>
        <div className="text-neutral-600">content-type: application/json</div>
        <pre className="text-neutral-400 mt-1">{`[
  { "id": 1, "name": "Alice" },
  { "id": 2, "name": "Bob" }
]`}</pre>

        <div className="mt-4" />
        <Prompt shell="reqsh">
          <span className="text-white">history</span>
        </Prompt>
        <div className="text-neutral-600 mt-1 space-y-0">
          <div>base https://api.example.com</div>
          <div>header Authorization Bearer tok_abc</div>
          <div>GET /users</div>
        </div>

        <div className="mt-4" />
        <Prompt shell="reqsh">
          <span className="text-white">rerun</span> <span className="text-neutral-400">3</span>
        </Prompt>
        <div className="mt-1.5 text-[#4ADE80]">HTTP/1.1 200 OK</div>

        <div className="mt-4 flex items-center">
          <span className="text-accent font-semibold">reqsh&gt;&nbsp;</span>
          <span className="w-1.5 h-4 bg-neutral-500 animate-pulse" />
        </div>
      </div>
    </div>
  );
}

function Prompt({ shell, children }: { shell: string; children: React.ReactNode }) {
  return (
    <div className="flex whitespace-pre">
      <span className="text-accent font-semibold">{shell}&gt;&nbsp;</span>
      {children}
    </div>
  );
}
