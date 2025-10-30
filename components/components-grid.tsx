"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

export type ComponentCardProps = {
    title: string;
    href: string;
    lightThemeThumbnailSrc: string;
    darkThemeThumbnailSrc: string;
};

export function ComponentCard({ title, href, lightThemeThumbnailSrc, darkThemeThumbnailSrc }: ComponentCardProps) {
    const { theme } = useTheme();
    return (
        <Link
            href={href}
            className="group overflow-hidden rounded-2xl border border-border bg-background/60 transition-colors hover:bg-foreground/4"
            target="_blank"
        >
            <div className="p-4">
                <Image
                    src={theme === "dark" ? darkThemeThumbnailSrc : lightThemeThumbnailSrc}
                    alt={`${title} - ${theme === "dark" ? "Dark" : "Light"} Theme`}
                    className={cn("aspect-video object-contain border rounded-lg w-full h-full")}
                    loading="lazy"
                    width={1280}
                    height={720} />
            </div>
            <div className="p-4">
                <h3 className="text-lg md:text-xl font-semibold tracking-tight">{title}</h3>
            </div>
        </Link>
    );
}

const items: Array<{ title: string; href: string; lightThemeThumbnailSrc: string; darkThemeThumbnailSrc: string, }> = [
    { title: "Wallet Activity Heatmap (github like)", href: "/components/wallet-activity-heatmap", lightThemeThumbnailSrc: "/wallet-activity-heatmap-light-component.png", darkThemeThumbnailSrc: "/wallet-activity-heatmap-dark-component.png" },
    { title: "Donation Card", href: "/components/donation-card", lightThemeThumbnailSrc: "/donation-card-light-component.png", darkThemeThumbnailSrc: "/donation-card-dark-component.png" },
    { title: "Cool NFT Card", href: "/components/nft-card", lightThemeThumbnailSrc: "/nft-card-light-component.png", darkThemeThumbnailSrc: "/nft-card-dark-component.png" },
    { title: "Solana Business Card", href: "/components/solana-business-card", lightThemeThumbnailSrc: "/business-card-light-component.png", darkThemeThumbnailSrc: "/business-card-dark-component.png" },
    { title: "Connect Wallet", href: "/components/connect-wallet", lightThemeThumbnailSrc: "/connect-wallet-light-component.png", darkThemeThumbnailSrc: "/connect-wallet-dark-component.png" },
];

export default function ComponentsGrid() {
    return (
        <section id="components" className="mx-auto w-full max-w-6xl px-6 pb-16 sm:px-8">
            <div className="grid gap-4 md:grid-cols-2">
                {items.map((item) => (
                    <ComponentCard key={item.href} title={item.title} href={item.href} lightThemeThumbnailSrc={item.lightThemeThumbnailSrc} darkThemeThumbnailSrc={item.darkThemeThumbnailSrc} />
                ))}
            </div>
        </section>
    );
}


