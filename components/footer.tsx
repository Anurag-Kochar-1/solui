import { FaGithub, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-border/50 mt-12">
      <div className="mx-auto max-w-4xl px-4 py-10 text-sm text-foreground/70">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="text-center md:text-left">
            <div className="text-base font-semibold text-foreground">Sol UI</div>
            <p className="mt-2 max-w-2xl text-foreground/70 mx-auto md:mx-0">
              Fun, bold, and unconventional Solana UI components. Not the boring stuff, copy-paste and ship.
            </p>
          </div>
          <div className="flex justify-center md:justify-end">
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/anurag-kochar-1/solui"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-foreground/70 hover:text-foreground transition-colors"
              >
                <FaGithub className="text-foreground size-4" />
              </a>
              <a
                href="https://x.com/soluixyz"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="text-foreground/70 hover:text-foreground transition-colors"
              >
                <FaTwitter className="text-foreground size-4" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-6 text-center md:text-left text-xs text-foreground/60">
          © 2025 Sol UI, Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
}


