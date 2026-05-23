export default function TerminalDemo() {
  return (
    <div
      className="rounded-lg border overflow-hidden"
      style={{ borderColor: 'var(--border-primary)', backgroundColor: 'var(--bg-secondary)' }}
    >
      {/* Title bar */}
      <div
        className="flex items-center border-b"
        style={{ borderColor: 'var(--border-primary)', padding: 'var(--space-1) var(--space-2)' }}
      >
        <div className="flex" style={{ gap: '6px' }}>
          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#3a3a3a' }}></div>
          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#3a3a3a' }}></div>
          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#3a3a3a' }}></div>
        </div>
        <div className="mx-auto text-xs font-mono" style={{ color: 'var(--text-tertiary)' }}>
          reqsh
        </div>
        <div className="w-12"></div>
      </div>

      {/* Terminal content */}
      <div className="font-mono text-sm leading-relaxed" style={{ padding: 'var(--space-3)' }}>
        {/* Set base URL */}
        <Line prompt="reqsh" command="base https://api.example.com" />

        {/* Set a header */}
        <Line prompt="reqsh" command="header Authorization Bearer tok_abc123" />

        {/* Send a GET request */}
        <Line prompt="reqsh" command="GET /users" />
        <Line prompt="....." command="::send" />

        {/* Response */}
        <div style={{ marginTop: 'var(--space-1)' }}>
          <span style={{ color: '#a0a0a0' }}>HTTP/1.1 </span>
          <span style={{ color: 'var(--text-primary)' }}>200 OK</span>
        </div>
        <div style={{ color: 'var(--text-tertiary)' }}>content-type: application/json</div>
        <pre
          className="text-sm"
          style={{ color: 'var(--text-secondary)', marginTop: 'var(--space-1)' }}
        >
          {`[
  { "id": 1, "name": "Alice" },
  { "id": 2, "name": "Bob" }
]`}
        </pre>

        {/* Spacer */}
        <div style={{ marginTop: 'var(--space-3)' }}></div>

        {/* History */}
        <Line prompt="reqsh" command="history" />
        <div style={{ color: 'var(--text-tertiary)', marginTop: 'var(--space-1)' }}>
          <div>base https://api.example.com</div>
          <div>header Authorization Bearer tok_abc123</div>
          <div>GET /users</div>
        </div>

        {/* Spacer */}
        <div style={{ marginTop: 'var(--space-3)' }}></div>

        {/* Rerun */}
        <Line prompt="reqsh" command="rerun 3" />
        <div style={{ marginTop: 'var(--space-1)' }}>
          <span style={{ color: '#a0a0a0' }}>HTTP/1.1 </span>
          <span style={{ color: 'var(--text-primary)' }}>200 OK</span>
        </div>

        {/* Cursor */}
        <div className="flex items-center" style={{ marginTop: 'var(--space-3)' }}>
          <span className="font-semibold" style={{ color: 'var(--text-secondary)' }}>
            reqsh&gt;&nbsp;
          </span>
          <span
            className="inline-block w-2 h-4"
            style={{ backgroundColor: 'var(--text-tertiary)' }}
          ></span>
        </div>
      </div>
    </div>
  );
}

function Line({ prompt, command }: { prompt: string; command: string }) {
  return (
    <div className="flex whitespace-pre">
      <span className="font-semibold" style={{ color: 'var(--text-secondary)' }}>
        {prompt}&gt;&nbsp;
      </span>
      <span style={{ color: 'var(--text-primary)' }}>{command}</span>
    </div>
  );
}
