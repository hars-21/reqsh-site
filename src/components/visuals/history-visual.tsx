export function HistoryVisual() {
  return (
    <div className="w-10 h-10 rounded-lg bg-surface border border-white/8 flex items-start justify-center overflow-hidden relative">
      <div className="flex flex-col gap-1.5 mt-2 animate-scroll-up">
        <div className="w-6 h-1 bg-neutral-700 rounded-full opacity-40" />
        <div className="w-5 h-1 bg-neutral-700 rounded-full opacity-60" />
        <div className="w-7 h-1 bg-neutral-700 rounded-full opacity-80" />
        <div className="w-4 h-1 bg-accent/80 rounded-full" />
        <div className="w-6 h-1 bg-neutral-700 rounded-full opacity-40" />
        <div className="w-5 h-1 bg-neutral-700 rounded-full opacity-60" />
      </div>
    </div>
  );
}
