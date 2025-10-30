"use client";

import Link from "next/link";

export type ComponentCardProps = {
    title: string;
    href: string;
    thumbnailSrc?: string;
};

export function ComponentCard({ title, href, thumbnailSrc }: ComponentCardProps) {
    return (
        <Link
            href={href}
            className="group overflow-hidden rounded-2xl border border-border bg-background/60 transition-colors hover:bg-foreground/4"
            target="_blank"
        >
            <div className="p-4">
                {thumbnailSrc ? (
                    <img
                        src={thumbnailSrc}
                        alt={title}
                        className="w-full aspect-video object-cover"
                        loading="lazy"
                    />
                ) : (
                    <div className="w-full border aspect-video bg-foreground/10"> </div>
                )}
            </div>
            <div className="p-4">
                <h3 className="text-lg md:text-xl font-semibold tracking-tight">{title}</h3>
            </div>
        </Link>
    );
}

const items: Array<{ title: string; href: string; thumbnailSrc?: string }> = [
    { title: "Wallet Activity Heatmap (github like)", href: "/components/wallet-activity-heatmap" },
    { title: "Donation Card", href: "/components/donation-card" },
    { title: "Cool NFT Card", href: "/components/nft-card" },
    { title: "Solana Business Card", href: "/components/solana-business-card" },
    { title: "Connect Wallet", href: "/components/connect-wallet" },
];

export default function ComponentsGrid() {
    return (
        <section id="components-grid" className="mx-auto w-full max-w-6xl px-6 pb-16 sm:px-8">
            <div className="grid gap-4 md:grid-cols-2">
                {items.map((item) => (
                    <ComponentCard key={item.href} title={item.title} href={item.href} thumbnailSrc={item.thumbnailSrc} />
                ))}
            </div>
        </section>
    );
}


