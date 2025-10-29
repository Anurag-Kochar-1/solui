"use client";

import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export type CodeBlockProps = {
  code: string;
  language?: string;
  className?: string;
  wrapLongLines?: boolean;
};

export function CodeBlock({ code, language = "tsx", className, wrapLongLines = true }: CodeBlockProps) {
  return (
    <div className={className}>
      <SyntaxHighlighter
        language={language}
        style={atomDark}
        wrapLongLines={wrapLongLines}
        customStyle={{
          margin: 0,
          borderRadius: 8,
          fontSize: "0.9rem",
          background: "#0b0f17",
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


