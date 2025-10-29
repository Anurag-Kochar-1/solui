"use client";

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import CodeBlock from "@/components/code-block";

export type PackageSpec = string | { name: string; version?: string };

export type ComponentShowcasePageProps = {
  name: string;
  description?: string;
  preview: React.ReactNode;
  code: { language?: string; content: string };
  dependencies?: PackageSpec[];
  devDependencies?: PackageSpec[];
  notes?: string[];
};

function formatPackage(pkg: PackageSpec): string {
  if (typeof pkg === "string") return pkg;
  return pkg.version ? `${pkg.name}@${pkg.version}` : pkg.name;
}

function buildInstallCommand(manager: "npm" | "yarn" | "pnpm" | "bun", deps: PackageSpec[] = [], dev = false) {
  const list = deps.map(formatPackage).join(" ");
  if (!list) return "";
  switch (manager) {
    case "npm":
      return dev ? `npm i -D ${list}` : `npm i ${list}`;
    case "yarn":
      return dev ? `yarn add -D ${list}` : `yarn add ${list}`;
    case "pnpm":
      return dev ? `pnpm add -D ${list}` : `pnpm add ${list}`;
    case "bun":
      return dev ? `bun add -d ${list}` : `bun add ${list}`;
  }
}

export function ComponentShowcasePage({ name, description, preview, code, dependencies = [], devDependencies = [], notes = [] }: ComponentShowcasePageProps) {
  const managers: Array<"npm" | "yarn" | "pnpm" | "bun"> = ["npm", "yarn", "pnpm", "bun"];

  const installBlocks = managers.map((m) => {
    const runtime = buildInstallCommand(m, dependencies, false);
    const dev = buildInstallCommand(m, devDependencies, true);
    const combined = [runtime, dev].filter(Boolean).join("\n");
    return { manager: m, content: combined || "# No packages required" };
  });

  return (
    <div className="container mx-auto max-w-5xl px-4 py-8">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold tracking-tight">{name}</h1>
        {description ? (
          <p className="mt-1 text-sm text-muted-foreground">{description}</p>
        ) : null}
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Preview</CardTitle>
          <CardDescription>How it looks and behaves</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-lg border bg-background p-4">
            {preview}
          </div>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Install dependencies</CardTitle>
          <CardDescription>Choose your package manager</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="npm" className="w-full">
            <TabsList>
              {installBlocks.map((b) => (
                <TabsTrigger key={b.manager} value={b.manager}>
                  {b.manager}
                </TabsTrigger>
              ))}
            </TabsList>
            {installBlocks.map((b) => (
              <TabsContent key={b.manager} value={b.manager} className="mt-4">
                <CodeBlock code={b.content} language="bash" />
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Implementation</CardTitle>
          <CardDescription>Copy-paste the code</CardDescription>
        </CardHeader>
        <CardContent>
          <CodeBlock code={code.content} language={code.language ?? "tsx"} />
        </CardContent>
      </Card>

      {notes.length > 0 ? (
        <Card>
          <CardHeader>
            <CardTitle>Notes</CardTitle>
            <CardDescription>Helpful context and caveats</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc space-y-2 pl-6 text-sm">
              {notes.map((note, i) => (
                <li key={i} className="text-muted-foreground">{note}</li>
              ))}
            </ul>
            <Separator className="mt-4" />
          </CardContent>
        </Card>
      ) : null}
    </div>
  );
}

export default ComponentShowcasePage;


