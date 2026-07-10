import { ImageResponse } from 'next/og';

export const alt = 'reqsh | Interactive HTTP REPL';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const runtime = 'edge';

const siteUrl = 'https://reqsh.dev';

async function getLogoBase64(): Promise<string> {
  const res = await fetch(`${siteUrl}/logo.png`);
  const buf = await res.arrayBuffer();
  const bytes = new Uint8Array(buf);
  let binary = '';
  for (let i = 0; i < bytes.byteLength; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return `data:image/png;base64,${btoa(binary)}`;
}

export default async function Image() {
  const logo = await getLogoBase64();

  return new ImageResponse(
    <div
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        background: '#0a0a0a',
        padding: '0',
        position: 'relative',
        overflow: 'hidden',
        fontFamily: 'Inter, system-ui, sans-serif',
      }}
    >
      <div
        style={{
          display: 'flex',
          position: 'absolute',
          top: '-200px',
          left: '-100px',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(220, 38, 38, 0.18) 0%, transparent 65%)',
        }}
      />

      <div
        style={{
          display: 'flex',
          position: 'absolute',
          bottom: '-250px',
          right: '-150px',
          width: '700px',
          height: '700px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(220, 38, 38, 0.12) 0%, transparent 60%)',
        }}
      />

      <div
        style={{
          display: 'flex',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '800px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(220, 38, 38, 0.06) 0%, transparent 70%)',
        }}
      />

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '20px',
          padding: '72px 80px 0',
        }}
      >
        <img
          alt=""
          src={logo}
          width={72}
          height={72}
          style={{
            borderRadius: '18px',
          }}
        />
        <span
          style={{
            fontSize: '36px',
            fontWeight: '700',
            color: '#f5f5f5',
            letterSpacing: '-0.5px',
          }}
        >
          reqsh
        </span>
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          padding: '0 80px',
          gap: '0',
        }}
      >
        <div
          style={{
            display: 'flex',
            width: '48px',
            height: '3px',
            background: '#dc2626',
            borderRadius: '2px',
            marginBottom: '32px',
          }}
        />

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            fontSize: '58px',
            fontWeight: '700',
            color: '#f5f5f5',
            lineHeight: '1.08',
            letterSpacing: '-2.5px',
          }}
        >
          <span>The interactive shell</span>
          <span>
            for
            <span
              style={{
                color: '#dc2626',
                padding: '0 8px',
              }}
            >
              HTTP
            </span>
            requests.
          </span>
        </div>

        <div
          style={{
            display: 'flex',
            fontSize: '20px',
            fontWeight: '400',
            color: '#71717a',
            marginTop: '24px',
            letterSpacing: '-0.2px',
          }}
        >
          <span>Set base URLs. Manage headers. Use variables. Built in Rust.</span>
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 80px 56px',
        }}
      >
        <div
          style={{
            display: 'flex',
            fontSize: '16px',
            fontWeight: '500',
            color: '#3f3f46',
            fontFamily: 'monospace',
            letterSpacing: '0.5px',
          }}
        >
          reqsh.dev
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          <div
            style={{
              display: 'flex',
              width: '1px',
              height: '16px',
              background: '#27272a',
            }}
          />
          <div
            style={{
              display: 'flex',
              fontSize: '13px',
              fontWeight: '500',
              color: '#3f3f46',
              letterSpacing: '1px',
              textTransform: 'uppercase',
            }}
          >
            Open Source · MIT
          </div>
        </div>
      </div>
    </div>,
    { ...size }
  );
}
