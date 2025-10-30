import Link from "next/link";
import { ModeToggle } from "./theme-toggle";

export default function Header() {
  return (
    <header className="fixed w-[90%] inset-x-0 top-4 z-50 max-w-3xl rounded-xl backdrop-blur bg-secondary supports-backdrop-filter:bg-background/60 border-b border-border/50 mx-auto shadow-inner shadow-secondary-foreground/20">
      <div className="mx-auto w-full px-4">
        <div className="flex h-14 items-center justify-between">
          <Link href="/" className="font-bold font-mono tracking-tight">
            SOL UI
          </Link>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}


