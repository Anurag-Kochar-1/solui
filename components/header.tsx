export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur supports-backdrop-filter:bg-background/60 border-b border-border/50">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex h-14 items-center justify-between">
          <a href="/" className="font-semibold tracking-tight">sol ui</a>
          <nav className="flex items-center gap-6 text-sm">
            <a href="/components" className="text-foreground/80 hover:text-foreground transition-colors">Components</a>
          </nav>
        </div>
      </div>
    </header>
  );
}


