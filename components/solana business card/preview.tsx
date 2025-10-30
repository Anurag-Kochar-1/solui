"use client";

import { motion } from "framer-motion";
import { Twitter, Send, MessageCircle } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { Copy, Check } from "lucide-react";
import { Solana } from "@/components/icons/solana";
import { Ethereum } from "@/components/icons/ethereum";

export function SolanaBusinessCard() {
    const [copied, setCopied] = useState<string | false>(false);
    const wallet = "6xsns8...jGTt";
    const handleCopy = async () => {
        console.log('copy fired');
        try {
            if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
                await navigator.clipboard.writeText(wallet);
                setCopied("copied");
            } else {
                // fallback for older browsers
                const textArea = document.createElement("textarea");
                textArea.value = wallet;
                // Avoid scrolling to bottom
                textArea.style.top = "0";
                textArea.style.left = "0";
                textArea.style.position = "fixed";
                document.body.appendChild(textArea);
                textArea.focus();
                textArea.select();
                try {
                    const successful = document.execCommand("copy");
                    setCopied(successful ? "copied" : "error");
                } catch (err) {
                    setCopied("error");
                }
                document.body.removeChild(textArea);
            }
        } catch (err) {
            setCopied("error");
        }
        setTimeout(() => setCopied(false), 1200);
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.40, ease: "easeOut" }}
            className="relative w-full max-w-lg min-h-[110px] lg:aspect-video rounded-[14px] border border-border bg-background/90 dark:bg-background/80 p-0 grid grid-cols-1 md:grid-cols-[minmax(0,0.93fr)_minmax(0,1.27fr)] h-full overflow-hidden"
        >
            {/* Left: Only PFP, fill cell */}
            <div className="relative w-full h-full bg-muted">
                <Image
                    src="/nft.png"
                    alt="profile"
                    className="object-cover aspect-square object-center w-full h-full rounded-none"
                    width={100}
                    height={100}
                />
            </div>

            {/* Right: Name, wallet, bio, tokens, meta, socials, sponsor */}
            <div className="flex flex-col justify-between items-start h-full py-5 px-4 md:px-7 gap-2 overflow-hidden">
                {/* Top: name, wallet */}
                <div className="flex flex-col items-start w-full gap-0.5 mb-2">
                    <h2 className="text-lg font-semibold text-foreground leading-6 truncate max-w-full">GhostChain</h2>
                    <div className="flex items-center gap-2 max-w-full">
                        <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-muted text-muted-foreground tracking-tight truncate max-w-[110px]">{wallet}</span>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <span role="button" tabIndex={0} onClick={handleCopy} aria-label="Copy address" className="size-6 flex items-center justify-center cursor-pointer">
                                    <Button size="icon-sm" variant="ghost" tabIndex={-1} type="button">
                                        {copied === "copied" ? (
                                            <Check className="size-3.5 text-green-500 transition-all duration-150" />
                                        ) : (
                                            <Copy className="size-3.5" />
                                        )}
                                    </Button>
                                </span>
                            </TooltipTrigger>
                            <TooltipContent sideOffset={4}>{copied === "copied" ? "Copied!" : copied === "error" ? "Copy failed" : "Copy address"}</TooltipContent>
                        </Tooltip>
                    </div>
                </div>

                {/* Bio */}
                <div className="w-full text-sm text-foreground font-normal max-w-full mb-1">
                    <span className="block max-w-full">building vibes on solana ☀️ degen, creator, collector</span>
                </div>
                {/* Tokens */}
                <div className="w-full">
                    <span className="block text-xs uppercase tracking-wider text-muted-foreground mb-1 font-semibold">Most used tokens</span>
                    <div className="flex gap-2">
                        <span className="flex items-center gap-1 px-2 py-0.5 rounded bg-accent text-xs text-accent-foreground font-medium">
                            <Image src="/sol.svg" alt="Solana" width={16} height={16} className="w-4 h-4" /> Solana
                        </span>
                        <span className="flex items-center gap-1 px-2 py-0.5 rounded bg-accent text-xs text-accent-foreground font-medium">
                            <Ethereum className="w-4 h-4" /> Ethereum
                        </span>
                    </div>
                </div>
                {/* Metadata */}
                <div className="flex gap-3 text-xs text-muted-foreground mb-1">
                    <span>Member: <span className="text-foreground/80">2022</span></span>
                    <span>|</span>
                    <span>Active: <span className="text-foreground/80">High</span></span>
                </div>
                {/* Socials and sponsor (bottom row) */}
                <div className="flex items-center gap-2 mt-auto">
                    <motion.a
                        whileHover={{ scale: 1.06 }}
                        whileTap={{ scale: 0.95 }}
                        href="#"
                        aria-label="Twitter"
                        className="p-2 rounded-full bg-background hover:bg-cyan-500 text-foreground"
                    >
                        <Twitter size={17} />
                    </motion.a>
                    <motion.a
                        whileHover={{ scale: 1.06 }}
                        whileTap={{ scale: 0.95 }}
                        href="#"
                        aria-label="Telegram"
                        className="p-2 rounded-full bg-background hover:bg-blue-500 text-foreground"
                    >
                        <Send size={17} />
                    </motion.a>
                    <motion.a
                        whileHover={{ scale: 1.06 }}
                        whileTap={{ scale: 0.95 }}
                        href="#"
                        aria-label="Discord"
                        className="p-2 rounded-full bg-background hover:bg-purple-500 text-foreground"
                    >
                        <MessageCircle size={17} />
                    </motion.a>
                    <Dialog>
                        <DialogTrigger asChild>
                            <motion.div
                                whileHover={{ scale: 1.06 }}
                                whileTap={{ scale: 0.97 }}
                            >
                                <Button variant="secondary" size="sm" className="px-3 py-1 text-xs ml-2">
                                    Sponsor
                                </Button>
                            </motion.div>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle className="text-base">Sponsor GhostChain</DialogTitle>
                            </DialogHeader>
                            <p className="mb-2 text-muted-foreground text-sm">Support the vibes! Connect your wallet to sponsor.</p>
                            <Button size="sm" variant="default" className="w-full">Connect Wallet</Button>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>
        </motion.div>
    );
}
