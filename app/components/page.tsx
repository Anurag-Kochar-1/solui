export default function ComponentsPage() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-14 sm:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Components</h1>
        <p className="mt-2 text-foreground/70">A growing set of building blocks for your UI.</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-lg border p-6">
          <h2 className="text-lg font-medium">Buttons</h2>
          <p className="mt-1 text-sm text-foreground/70">Actions that users can take.</p>
        </div>
        <div className="rounded-lg border p-6">
          <h2 className="text-lg font-medium">Cards</h2>
          <p className="mt-1 text-sm text-foreground/70">Surfaces for grouping related content.</p>
        </div>
      </div>
    </section>
  );
}


