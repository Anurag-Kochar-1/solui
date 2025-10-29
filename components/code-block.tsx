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
  React.useEffect(() => setMounted(true), []);

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


