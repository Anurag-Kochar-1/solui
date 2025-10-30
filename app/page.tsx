"use client";

import ComponentsGrid from "@/components/components-grid";

export default function Home() {
  function scrollToGrid() {
    const el = document.getElementById("components-grid");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <>
      <section className="relative mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-6xl flex-col items-center justify-center px-6 text-center sm:px-8">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-balance text-5xl font-extrabold sm:text-6xl md:text-7xl">
            Not Your <span className="bg-red-600 text-white px-1 border-4 border-foreground">Boring</span> Solana UI Components:
          </h1>
          <p className="mt-5 text-pretty font-medium text-lg text-foreground/80 sm:text-xl">
            Personality-first components. Not the template stuff.
          </p>
          <div className="mt-9 flex items-center justify-center gap-3">
            <button
              onClick={scrollToGrid}
              className="inline-flex h-11 items-center justify-center rounded-md bg-foreground px-6 text-sm font-semibold text-background shadow transition-colors hover:opacity-90"
            >
              Explore Components
            </button>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-x-0 -z-10 -translate-y-16 select-none">
          <div className="mx-auto h-72 max-w-5xl rounded-[40%] bg-linear-to-b from-foreground/5 to-transparent blur-3xl" />
        </div>
      </section>
      <ComponentsGrid />
    </>
  );
}
