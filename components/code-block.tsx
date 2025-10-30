"use client";

import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark, oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useTheme } from "next-themes";

export type CodeBlockProps = {
  code: string;
  language?: string;
  className?: string;
  wrapLongLines?: boolean;
};

export function CodeBlock({ code, language = "tsx", className, wrapLongLines = true }: CodeBlockProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const [copied, setCopied] = React.useState(false);
  const resetTimerRef = React.useRef<number | null>(null);

  React.useEffect(() => setMounted(true), []);

  // Reset copied state whenever code changes
  React.useEffect(() => {
    setCopied(false);
    if (resetTimerRef.current) {
      window.clearTimeout(resetTimerRef.current);
      resetTimerRef.current = null;
    }
  }, [code]);

  React.useEffect(() => {
    return () => {
      if (resetTimerRef.current) {
        window.clearTimeout(resetTimerRef.current);
      }
    };
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code.trim());
      setCopied(true);
      if (resetTimerRef.current) {
        window.clearTimeout(resetTimerRef.current);
      }
      resetTimerRef.current = window.setTimeout(() => setCopied(false), 1500);
    } catch (_) {
      // noop
    }
  };

  if (!mounted) {
    return (
      <div className={className}>
        <pre
          className="rounded-lg border bg-muted/30 p-4 text-sm"
          style={{
            fontFamily:
              "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace",
            margin: 0,
          }}
        >
          {code.trim()}
        </pre>
      </div>
    );
  }

  const style = resolvedTheme === "dark" ? atomDark : oneLight;

  return (
    <div className={className}>
      <div className="flex items-center justify-between gap-2 rounded-t-lg border border-b-0 bg-muted/30 px-3 py-2">
        <span className="text-xs text-muted-foreground">{language}</span>
        <button
          type="button"
          onClick={handleCopy}
          className="inline-flex items-center rounded-md border bg-secondary text-secondary-foreground px-2.5 py-1 text-xs font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
          aria-label={copied ? "Copied" : "Copy to clipboard"}
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <SyntaxHighlighter
        language={language}
        style={style}
        wrapLongLines={wrapLongLines}
        customStyle={{
          margin: 0,
          borderRadius: 8,
          fontSize: "0.9rem",
          // Background provided by the selected theme
          padding: "1rem 1.25rem",
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
          border: "1px solid var(--border)",
        }}
        codeTagProps={{
          style: {
            fontFamily:
              "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace",
          },
        }}
        showLineNumbers
      >
        {code.trim()}
      </SyntaxHighlighter>
    </div>
  );
}

export default CodeBlock;


