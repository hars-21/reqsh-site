const TerminalWindow = () => {
  return (
    <div className="p-6 md:p-8 font-mono text-[14px] md:text-[15px] leading-[1.7] overflow-x-auto text-[#A0A0A0]">
      <div className="flex whitespace-pre">
        <span className="text-red-500 font-semibold mr-2">reqsh&gt;</span>{' '}
        <span className="text-white font-medium mr-2">GET</span>{' '}
        <span className="text-blue-400">https://api.example.com/users</span>
      </div>
      <div className="text-emerald-400 mt-2 font-medium">=&gt; 200 OK</div>
      <div className="text-white/70 mt-1 whitespace-pre">{`[{
  "id": 1,
  "name": "Alice"
}]`}</div>
      <div className="mt-6 flex whitespace-pre">
        <span className="text-red-500 font-semibold mr-2">reqsh&gt;</span>{' '}
        <span className="text-white font-medium mr-2">save</span>{' '}
        <span className="text-yellow-200">user-list</span>{' '}
        <span className="text-white/40 ml-2">--method GET /users</span>
      </div>
      <div className="text-white/70 mt-2">Saved as &apos;user-list&apos;</div>
      <div className="mt-6 flex whitespace-pre">
        <span className="text-red-500 font-semibold mr-2">reqsh&gt;</span>{' '}
        <span className="text-white font-medium mr-2">run</span>{' '}
        <span className="text-yellow-200">user-list</span>
      </div>
      <div className="text-emerald-400 mt-2 font-medium">=&gt; 200 OK</div>
      <div className="mt-4 flex items-center">
        <span className="text-red-500 font-semibold mr-2">reqsh&gt;</span>
        <span className="w-2.5 h-5 bg-white/80 animate-pulse block"></span>
      </div>
    </div>
  );
};

export default TerminalWindow;
