export default function Feature({
  title,
  desc,
  icon: Icon,
}: {
  title: string;
  desc: string;
  icon: React.ElementType;
}) {
  return (
    <div className="p-5 rounded-xl glass-card border border-red-500/10 hover:border-red-500/30 transition-all hover:bg-red-500/5 group cursor-pointer relative overflow-hidden">
      <div className="absolute inset-0 bg-radial-gradient from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <div className="relative z-10 flex flex-col gap-4">
        <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-black border border-white/5 group-hover:border-red-500/30 shadow-[0_0_15px_rgba(255,46,46,0)] group-hover:shadow-[0_0_20px_var(--accent-red-glow)] transition-all">
          <Icon className="text-(--accent-red) group-hover:scale-110 transition-transform" />
        </div>
        <div>
          <div className="font-semibold text-white text-lg tracking-tight mb-1 group-hover:text-red-100 transition-colors">
            {title}
          </div>
          <div className="text-[rgba(255,255,255,0.6)] text-sm leading-relaxed">{desc}</div>
        </div>
      </div>
    </div>
  );
}
