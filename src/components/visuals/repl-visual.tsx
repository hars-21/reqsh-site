export function ReplVisual() {
  return (
    <div className="w-10 h-10 rounded-lg bg-surface border border-white/8 flex items-center justify-center overflow-hidden relative">
      <div className="absolute left-2 flex items-center">
        <span className="text-accent text-[8px] font-mono font-bold leading-none">&gt;</span>
        <div className="w-4 h-1.5 ml-1 bg-neutral-600 rounded-[1px] animate-blink" />
      </div>
    </div>
  );
}
