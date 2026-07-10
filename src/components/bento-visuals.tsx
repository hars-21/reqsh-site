'use client';

import React, { useState, useEffect, startTransition } from 'react';
import { Play, RotateCcw, Check, Send, Clock } from 'lucide-react';

export function StartupVisual() {
  const [speed, setSpeed] = useState(0);
  const [active, setActive] = useState(false);

  const triggerAnimation = () => {
    if (active) return;
    setActive(true);
    setSpeed(0);
    let start = 0;
    const end = 0.8;
    const duration = 300;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setSpeed(end);
        clearInterval(timer);
        setTimeout(() => setActive(false), 1000);
      } else {
        setSpeed(start);
      }
    }, 16);
  };

  useEffect(() => {
    startTransition(() => {
      triggerAnimation();
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      onClick={triggerAnimation}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          triggerAnimation();
        }
      }}
      role="button"
      tabIndex={0}
      aria-label="Test startup latency"
      className="w-full h-48 mt-4 rounded-lg border border-border/60 bg-muted/30 p-4 flex flex-col items-center justify-center cursor-pointer select-none group/startup transition-all duration-300 hover:border-accent/30 hover:bg-muted/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
    >
      <div className="relative flex items-center justify-center">
        <svg className="w-28 h-28 transform -rotate-90">
          <circle cx="56" cy="56" r="48" className="stroke-border/60 fill-none" strokeWidth="3" />
          <circle
            cx="56"
            cy="56"
            r="48"
            className="stroke-accent fill-none transition-all duration-300 ease-out"
            strokeWidth="4"
            strokeDasharray={`${2 * Math.PI * 48}`}
            strokeDashoffset={`${2 * Math.PI * 48 * (1 - (speed / 0.8) * 0.75)}`}
          />
        </svg>
        <div className="absolute flex flex-col items-center justify-center">
          <span className="text-2xl font-bold font-mono tracking-tighter text-foreground">
            {speed.toFixed(2)}
          </span>
          <span className="text-[10px] text-accent font-bold tracking-widest mt-0.5">ms</span>
        </div>
      </div>
      <div className="mt-3 flex items-center gap-1.5 text-xs text-muted-foreground group-hover/startup:text-foreground transition-colors">
        <RotateCcw size={12} className={`${active ? 'animate-spin' : ''}`} />
        <span>Click to test startup latency</span>
      </div>
    </div>
  );
}

const verbs = ['gEt', 'GET', 'pOsT', 'POST', 'dElEtE', 'DELETE', 'pAtCh', 'PATCH'];

export function CaseInsensitiveVisual() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % verbs.length);
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  const isEven = index % 2 === 0;
  const rawVerb = verbs[isEven ? index : index - 1];
  const normalizedVerb = verbs[isEven ? index + 1 : index];

  return (
    <div className="w-full h-48 mt-4 rounded-lg border border-border/60 bg-muted/30 p-4 flex flex-col justify-center select-none font-mono">
      <div className="space-y-3">
        <div className="flex items-center justify-between bg-background/60 rounded-lg p-3 border border-border/60">
          <span className="text-xs text-muted-foreground tracking-wider">User Typed</span>
          <span className="text-sm font-bold text-yellow-500/90 transition-all duration-300">
            {rawVerb}
          </span>
        </div>

        <div className="flex justify-center my-0.5">
          <div className="h-4 w-1 bg-border" />
        </div>

        <div className="flex items-center justify-between bg-background/60 rounded-lg p-3 border border-border/60">
          <span className="text-xs text-muted-foreground tracking-wider">reqsh Parsed</span>
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-terminal-success transition-all duration-300">
              {normalizedVerb}
            </span>
            <Check size={12} className="text-terminal-success animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function PrettyPrintVisual() {
  const [isPretty, setIsPretty] = useState(true);

  const rawJSON =
    '{"status":"ok","data":{"id":42,"username":"reqsh_dev","active":true,"version":"1.0.0"}}';

  return (
    <div
      onClick={() => setIsPretty(!isPretty)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          setIsPretty(!isPretty);
        }
      }}
      role="button"
      tabIndex={0}
      aria-label={`Toggle JSON view. Currently showing ${isPretty ? 'pretty' : 'raw'} view.`}
      className="w-full h-48 mt-4 rounded-lg border border-border/60 bg-muted/30 p-3 flex flex-col cursor-pointer select-none overflow-hidden group/visual transition-all duration-300 hover:border-accent/30 hover:bg-muted/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-[10px] text-muted-foreground tracking-widest">
          Syntax Highlighted
        </span>
        <span className="text-[10px] font-semibold font-mono bg-accent/10 text-accent px-2 py-0.5 rounded border border-accent/20">
          {isPretty ? 'Pretty View' : 'Raw JSON'}
        </span>
      </div>
      <div className="flex-1 overflow-auto font-mono text-[11px] leading-4 text-left border border-border/60 bg-background/40 rounded-lg p-3">
        {isPretty ? (
          <pre className="text-terminal-foreground">
            <span className="text-purple-400">{'{'}</span>
            <br />
            &nbsp;&nbsp;<span className="text-blue-400">&quot;status&quot;</span>:{' '}
            <span className="text-green-400">&quot;ok&quot;</span>,
            <br />
            &nbsp;&nbsp;<span className="text-blue-400">&quot;data&quot;</span>:{' '}
            <span className="text-purple-400">{'{'}</span>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">&quot;id&quot;</span>:{' '}
            <span className="text-orange-400">42</span>,
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">
              &quot;username&quot;
            </span>: <span className="text-green-400">&quot;reqsh_dev&quot;</span>
            <br />
            &nbsp;&nbsp;<span className="text-purple-400">{'}'}</span>
            <br />
            <span className="text-purple-400">{'}'}</span>
          </pre>
        ) : (
          <div className="break-all text-muted-foreground p-1">{rawJSON}</div>
        )}
      </div>
    </div>
  );
}

const historyList = [
  { id: 1, cmd: 'base https://api.github.com', status: 'Set Base URL' },
  { id: 2, cmd: 'GET /user/repos', status: '200 OK 120ms' },
  { id: 3, cmd: 'set token ghp_xxxx', status: 'Set Variable' },
  { id: 4, cmd: 'rerun 2', status: '200 OK 98ms' },
];

export function SessionHistoryVisual() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleRerun = (id: number) => {
    setActiveIndex(id);
    setTimeout(() => {
      setActiveIndex(null);
    }, 1000);
  };

  return (
    <div className="w-full h-full flex flex-col select-none font-mono py-2">
      <div className="text-[10px] text-muted-foreground tracking-widest mb-3">
        Interactive Session Shell
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {historyList.map((item) => (
          <div
            key={item.id}
            onClick={() => handleRerun(item.id)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleRerun(item.id);
              }
            }}
            role="button"
            tabIndex={0}
            aria-label={`Rerun command: ${item.cmd}`}
            className={`flex flex-col justify-between rounded-lg p-3 border transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
              activeIndex === item.id
                ? 'bg-accent/15 border-accent/40 text-accent shadow-[0_0_12px_rgba(239,68,68,0.1)]'
                : 'bg-muted/30 border-border/60 text-muted-foreground hover:bg-muted/50 hover:text-foreground hover:border-border'
            }`}
          >
            <div className="flex items-center gap-1.5 mb-2">
              <span className="text-[9px] bg-border/60 border border-border/60 rounded px-1.5 py-0.5 text-muted-foreground font-bold">
                {item.id}
              </span>
              <span className="text-xs truncate font-semibold">{item.cmd}</span>
            </div>
            <div className="flex items-center justify-between text-[10px]">
              <span className="text-muted-foreground">{item.status}</span>
              <span className="text-accent flex items-center gap-0.5 text-[9px] font-bold tracking-wider">
                <Play size={8} fill="currentColor" /> Rerun
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function BuiltInTimingVisual() {
  const [history, setHistory] = useState<number[]>([110, 85, 130, 42, 98, 55, 120, 38]);
  const [loading, setLoading] = useState(false);
  const [latestLatency, setLatestLatency] = useState(38);

  const simulatePing = () => {
    if (loading) return;
    setLoading(true);
    setTimeout(() => {
      const newPing = Math.floor(Math.random() * 90) + 20;
      setLatestLatency(newPing);
      setHistory((prev) => [...prev.slice(1), newPing]);
      setLoading(false);
    }, 450);
  };

  return (
    <div
      onClick={simulatePing}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          simulatePing();
        }
      }}
      role="button"
      tabIndex={0}
      aria-label="Simulate a ping request"
      className="w-full h-48 mt-4 rounded-lg border border-border/60 bg-muted/30 p-4 flex flex-col justify-between cursor-pointer select-none group/timing transition-all duration-300 hover:border-accent/30 hover:bg-muted/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
    >
      <div className="flex items-center justify-between bg-background/60 border border-border/60 px-3 py-2 rounded-lg">
        <div className="flex items-center gap-1.5 text-muted-foreground font-mono text-xs">
          <Clock size={12} />
          <span>Real-time Ping:</span>
        </div>
        <div className="flex items-center gap-2">
          <span
            className={`font-mono text-sm font-bold ${latestLatency < 60 ? 'text-green-400' : 'text-yellow-500'}`}
          >
            {loading ? 'Measuring...' : `${latestLatency}ms`}
          </span>
          <Send
            size={12}
            className={`${loading ? 'animate-pulse text-accent' : 'text-muted-foreground group-hover/timing:text-accent'} transition-colors`}
          />
        </div>
      </div>

      <div className="flex items-end justify-between h-20 px-1 pt-2 gap-1.5">
        {history.map((val, i) => {
          const heightPercent = Math.min(100, Math.max(15, (val / 140) * 100));
          return (
            <div
              key={i}
              style={{ height: `${heightPercent}%` }}
              className={`w-full rounded-t transition-all duration-300 ${
                i === history.length - 1
                  ? 'bg-accent shadow-[0_0_12px_rgba(239,68,68,0.4)]'
                  : 'bg-border group-hover/timing:bg-border/80'
              }`}
            />
          );
        })}
      </div>
    </div>
  );
}
