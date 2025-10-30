"use client";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { usePathname } from "next/navigation";

const components = [
  { slug: "wallet-activity-heatmap", label: "Wallet Activity Heatmap" },
  { slug: "connect-wallet", label: "Connect Wallet" },
  { slug: "donation-card", label: "Donation Card" },
  { slug: "nft-card", label: "NFT Card" },
  { slug: "solana-business-card", label: "Solana Business Card" },
  // Coming soon items
  { slug: "animated-tip-jar", label: "Animated Tip Jar", comingSoon: true },
  { slug: "nft-shelf", label: "NFT Shelf", comingSoon: true },
  { slug: "solana-minimal-receipt", label: "Solana Minimal Receipt", comingSoon: true },
  { slug: "transaction-storyboard", label: "Transaction Storyboard", comingSoon: true },
] as const;

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isActive = (slug: string) =>
    pathname === `/components/${slug}` || pathname.startsWith(`/components/${slug}/`);
  return (
    <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8">
      {/* Mobile: horizontal nav */}
      <div className="mt-10 flex gap-2 overflow-x-auto border-b md:hidden">
        {components.map((c) => (
          <Link
            key={c.slug}
            href={`/components/${c.slug}`}
            onClick={(e) => {
              if((c as any).comingSoon) e.preventDefault();
            }}
            aria-disabled={(c as any).comingSoon || undefined}
            aria-current={isActive(c.slug) ? "page" : undefined}
            className={`flex items-center gap-2 whitespace-nowrap rounded-md border px-3 py-1.5 text-sm hover:bg-foreground/5 ${isActive(c.slug) ? "bg-foreground/10 border-foreground/30" : ""
              } ${(c as any).comingSoon ? "opacity-70 cursor-not-allowed" : ""
              }`}
          >
            <span>{c.label}</span>
            {(c as any).comingSoon && (
              <Badge className="bg-green-500 text-foreground text-xs">
                Coming soon
              </Badge>
            )}
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-[220px_1fr]">
        {/* Sidebar */}
        <aside className="hidden h-[calc(100vh-6rem)] md:sticky md:top-40 md:block">
          <nav className="flex h-full flex-col gap-1 overflow-y-auto pr-2">
            {components.map((c) => (
              <Link
                key={c.slug}
                href={`/components/${c.slug}`}
                onClick={(e) => {
                  if((c as any).comingSoon) e.preventDefault();
                }}
                aria-disabled={(c as any).comingSoon || undefined}
                aria-current={isActive(c.slug) ? "page" : undefined}
                className={`flex gap-1 items-center justify-between rounded-md px-3 py-2 text-sm hover:bg-foreground/5 ${isActive(c.slug) ? "bg-foreground/10 font-medium" : ""
                  } ${(c as any).comingSoon ? "opacity-70 cursor-not-allowed" : ""
                  }`}
              >
                <span>{c.label}</span>
                {(c as any).comingSoon && (
                  <Badge className="bg-green-500 text-foreground text-xs">
                    Coming soon
                  </Badge>
                )}
              </Link>
            ))}
          </nav>
        </aside>

        {/* Content */}
        <main className="min-w-0">{children}</main>
      </div>
    </div>
  );
}


