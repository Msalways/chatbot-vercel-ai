// components/ui/code-block.tsx
import { cn } from "@/lib/utils";

export function CodeBlock({
  code,
  language = "plaintext",
}: {
  code: string;
  language?: string;
}) {
  return (
    <div className="my-4 rounded-lg bg-muted px-4 py-3 text-sm font-mono text-muted-foreground overflow-auto border">
      <pre className="whitespace-pre-wrap">
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  );
}
