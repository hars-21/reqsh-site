export function CompletionVisual() {
  return (
    <div className="w-10 h-10 rounded-lg bg-surface border border-white/8 flex items-center justify-center overflow-hidden relative">
      <div className="flex items-center text-[8px] font-mono font-bold">
        <span className="text-white">G</span>
        <span className="text-neutral-600">ET</span>
        <div className="w-1 h-2 ml-0.5 bg-white/20 animate-blink" />
      </div>
    </div>
  );
}
