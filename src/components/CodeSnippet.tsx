interface CodeSnippetProps {
  code: string;
}

export default function CodeSnippet({ code }: CodeSnippetProps): JSX.Element {
  return (
    <div className="glass mt-6 overflow-hidden rounded-2xl">
      <div className="border-b border-white/10 px-4 py-3 text-xs text-white/60">Java snippet</div>
      <pre className="overflow-x-auto p-4 text-xs text-emerald-200/90">
        <code>{code}</code>
      </pre>
    </div>
  );
}
