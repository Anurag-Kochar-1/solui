 

export default function Home() {
  return (
    <>
      <section className="relative mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-6xl flex-col items-center justify-center px-6 text-center sm:px-8">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-balance text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
            Not Your <span className="bg-red-600 text-white px-1 border-4 border-foreground">Boring</span> Solana UI Components:
          </h1>
          <p className="mt-5 text-pretty font-medium text-lg text-foreground/80 sm:text-xl">
            Personality-first components. Not the template stuff.
          </p>
          <div className="mt-9 flex items-center justify-center gap-3">
            <a
              href="/components/wallet-activity-heatmap"
              className="inline-flex h-11 items-center justify-center rounded-md bg-foreground px-6 text-sm font-semibold text-background shadow transition-colors hover:opacity-90"
            >
              Explore Components
            </a>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-x-0 -z-10 -translate-y-16 select-none">
          <div className="mx-auto h-72 max-w-5xl rounded-[40%] bg-linear-to-b from-foreground/5 to-transparent blur-3xl" />
        </div>
      </section>
      
    </>
  );
}
