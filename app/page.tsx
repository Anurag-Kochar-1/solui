import Link from "next/link";

export default function Home() {
  return (
    <section className="relative mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-6xl flex-col items-center justify-center px-6 text-center sm:px-8">
      <div className="mx-auto max-w-3xl">
        <p className="mb-4 inline-flex items-center rounded-full border border-border/60 bg-background/60 px-3 py-1 text-xs text-foreground/70">
          Minimal UI components library
        </p>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Build clean, consistent UIs faster
        </h1>
        <p className="mt-4 text-balance text-base text-foreground/70 sm:text-lg">
          Sol UI provides pragmatic, accessible React components with modern styling so you can focus on your product.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/components"
            className="inline-flex h-10 items-center justify-center rounded-md bg-foreground px-5 text-sm font-medium text-background transition-colors hover:opacity-90"
          >
            Browse Components
          </Link>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-10 items-center justify-center rounded-md border border-border px-5 text-sm font-medium text-foreground/90 hover:bg-foreground/5"
          >
            GitHub
          </a>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 -z-10 -translate-y-10 select-none">
        <div className="mx-auto h-64 max-w-4xl rounded-[40%] bg-linear-to-b from-foreground/5 to-transparent blur-3xl" />
      </div>
    </section>
  );
}
