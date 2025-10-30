"use client";

import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletName, WalletReadyState } from "@solana/wallet-adapter-base";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { Loader2, ChevronDown } from "lucide-react";
import Image from "next/image";
import {
    ConnectionProvider,
    WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import {
    PhantomWalletAdapter,
    SolflareWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import "@solana/wallet-adapter-react-ui/styles.css";



// Constants
const LABELS = {
    "change-wallet": "Change Wallet",
    connecting: "Connecting...",
    "copy-address": "Copy Address",
    copied: "Copied",
    disconnect: "Disconnect",
    "has-wallet": "Connect Wallet",
    "no-wallet": "Select Wallet",
} as const;

// Types
type WalletButtonProps = React.ComponentProps<"button"> & {
    labels?: Partial<Record<keyof typeof LABELS, string>>;
    variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
    size?: "default" | "sm" | "lg" | "icon";
    icon?: React.ReactNode;
};

// Enhanced Wallet Modal Component
export const WalletModal: React.FC<{
    open: boolean;
    onOpenChange: (open: boolean) => void;
}> = ({ open, onOpenChange }) => {
    const { wallets, select, connecting, connected } = useWallet();
    const [expanded, setExpanded] = useState(false);

    // Memoize wallet lists
    const { listedWallets, collapsedWallets } = useMemo(() => {
        const installed = wallets.filter(
            (w) => w.readyState === WalletReadyState.Installed,
        );
        const notInstalled = wallets.filter(
            (w) => w.readyState !== WalletReadyState.Installed,
        );
        return {
            listedWallets: installed.length ? installed : notInstalled,
            collapsedWallets: installed.length ? notInstalled : [],
        };
    }, [wallets]);

    const handleWalletClick = useCallback(
        async (event: React.MouseEvent<HTMLButtonElement>, walletName: string) => {
            event.preventDefault();
            try {
                select(walletName as WalletName);
                // The wallet will automatically attempt to connect after selection
                // due to the autoConnect prop in WalletProvider
            } catch(error) {
                console.error("Failed to select wallet:", error);
                // You could add toast notification here
            }
        },
        [select],
    );

    // Close modal when wallet connects successfully
    useEffect(() => {
        if(connected) {
            onOpenChange(false);
        }
    }, [connected, onOpenChange]);

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Connect wallet to continue</DialogTitle>
                    <DialogDescription>
                        Choose your preferred wallet to connect to this dApp.
                    </DialogDescription>
                </DialogHeader>

                <div className="space-y-4">
                    {/* Main wallet list */}
                    {listedWallets.map((wallet) => (
                        <button
                            key={wallet.adapter.name}
                            onClick={(e) => handleWalletClick(e, wallet.adapter.name)}
                            disabled={connecting}
                            className="flex w-full items-center justify-between rounded-lg p-3 text-left transition-colors hover:bg-secondary disabled:opacity-50"
                        >
                            <div className="flex items-center gap-2">
                                {wallet.adapter.icon && (
                                    <Image
                                        src={wallet.adapter.icon}
                                        alt={`${wallet.adapter.name} icon`}
                                        className="h-5 w-5"
                                        width={20}
                                        height={20}
                                    />
                                )}
                                <span className="font-medium">{wallet.adapter.name}</span>
                                {connecting && (
                                    <Loader2 className="ml-2 h-4 w-4 animate-spin" />
                                )}
                            </div>
                            <Badge variant="outline">
                                {wallet.readyState === WalletReadyState.Installed
                                    ? "Installed"
                                    : "Not Installed"}
                            </Badge>
                        </button>
                    ))}

                    {/* Collapsible section for additional wallets */}
                    {collapsedWallets.length > 0 && (
                        <Collapsible open={expanded} onOpenChange={setExpanded}>
                            <CollapsibleTrigger asChild>
                                <Button variant="ghost" className="w-full justify-between">
                                    <span>More wallet options</span>
                                    <ChevronDown className="h-4 w-4" />
                                </Button>
                            </CollapsibleTrigger>
                            <CollapsibleContent className="space-y-2">
                                {collapsedWallets.map((wallet) => (
                                    <button
                                        key={wallet.adapter.name}
                                        onClick={(e) => handleWalletClick(e, wallet.adapter.name)}
                                        disabled={connecting}
                                        className="flex w-full items-center justify-between rounded-lg p-3 text-left transition-colors hover:bg-secondary disabled:opacity-50"
                                    >
                                        <div className="flex items-center gap-2">
                                            {wallet.adapter.icon && (
                                                <Image
                                                    src={wallet.adapter.icon}
                                                    alt={`${wallet.adapter.name} icon`}
                                                    className="h-5 w-5"
                                                    width={20}
                                                    height={20}
                                                />
                                            )}
                                            <span className="font-medium">{wallet.adapter.name}</span>
                                        </div>
                                        <Badge variant="outline">
                                            {wallet.readyState === WalletReadyState.Installed
                                                ? "Installed"
                                                : "Not Installed"}
                                        </Badge>
                                    </button>
                                ))}
                            </CollapsibleContent>
                        </Collapsible>
                    )}
                </div>

                <DialogClose asChild>
                    <Button variant="outline" className="w-full mt-4">
                        Close
                    </Button>
                </DialogClose>
            </DialogContent>
        </Dialog >
    );
};




interface WalletProviderWrapperProps {
    children: React.ReactNode;
}

export function WalletProviderWrapper({
    children,
}: WalletProviderWrapperProps) {
    // Fallback to public cluster if env not set
    const endpoint = useMemo(
        () =>
            process.env.NEXT_PUBLIC_ALCHEMY_RPC_URL ||
            "https://api.devnet.solana.com",
        [],
    );

    const wallets = useMemo(
        () => [new PhantomWalletAdapter(), new SolflareWalletAdapter()],
        [],
    );

    return (
        <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={wallets} autoConnect>
                <WalletModalProvider>{children}</WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    );
}



function ConnectWalletInner({
    children,
    labels = LABELS,
    icon,
    ...props
}: WalletButtonProps) {
    const [walletModalOpen, setWalletModalOpen] = useState(false);
    const [copied, setCopied] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [mounted, setMounted] = useState(false);

    const { publicKey, wallet, disconnect, connecting, connected } = useWallet();

    const content = useMemo(() => {
        if(!mounted) {
            return (
                <div className="flex items-center gap-2">
                    {icon && <span className="shrink-0">{icon}</span>}
                    <span>{labels["no-wallet"]}</span>
                </div>
            );
        }

        if(children) {
            return (
                <div className="flex items-center gap-2">
                    {icon && <span className="shrink-0">{icon}</span>}
                    {children}
                </div>
            );
        } else if(connecting) {
            return (
                <div className="flex items-center gap-2">
                    {icon && <span className="shrink-0">{icon}</span>}
                    <Loader2 className="h-4 w-4 animate-spin" />
                    <span>{labels["connecting"]}</span>
                </div>
            );
        }

        // Show wallet info when connected
        if(connected && publicKey) {
            return (
                <div className="flex items-center gap-2">
                    {icon && <span className="shrink-0">{icon}</span>}
                    {wallet?.adapter.icon && (
                        <Image
                            src={wallet.adapter.icon}
                            alt={`${wallet.adapter.name} icon`}
                            className="h-5 w-5"
                            width={20}
                            height={20}
                        />
                    )}
                    <span>
                        {`${publicKey.toBase58().slice(0, 6)}...${publicKey.toBase58().slice(-4)}`}
                    </span>
                </div>
            );
        }

        return (
            <div className="flex items-center gap-2">
                {icon && <span className="shrink-0">{icon}</span>}
                <span>{labels["has-wallet"]}</span>
            </div>
        );
    }, [
        mounted,
        children,
        connecting,
        connected,
        publicKey,
        wallet,
        labels,
        icon,
    ]);

    const handleCopyAddress = useCallback(async () => {
        if(publicKey) {
            await navigator.clipboard.writeText(publicKey.toBase58());
            setCopied(true);
            setTimeout(() => setCopied(false), 400);
        }
    }, [publicKey]);

    const handleDisconnect = useCallback(() => {
        disconnect();
        setMenuOpen(false);
    }, [disconnect]);

    useEffect(() => {
        setMounted(true);
    }, []);

    if(!connected) {
        return (
            <>
                <WalletModal open={walletModalOpen} onOpenChange={setWalletModalOpen} />
                <Button
                    {...props}
                    onClick={() => {
                        setWalletModalOpen(true);
                    }}
                >
                    {content}
                </Button>
            </>
        );
    }

    return (
        <>
            <WalletModal open={walletModalOpen} onOpenChange={setWalletModalOpen} />
            <DropdownMenu open={menuOpen} onOpenChange={setMenuOpen}>
                <DropdownMenuTrigger asChild>
                    <Button {...props}>{content}</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    {publicKey && (
                        <DropdownMenuItem onClick={handleCopyAddress}>
                            {copied ? labels["copied"] : labels["copy-address"]}
                        </DropdownMenuItem>
                    )}
                    <DropdownMenuItem
                        onClick={() => {
                            setWalletModalOpen(true);
                            setMenuOpen(false);
                        }}
                    >
                        {labels["change-wallet"]}
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={handleDisconnect}>
                        {labels["disconnect"]}
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    );
}

export function ConnectWallet(props: WalletButtonProps) {
    return (
        <WalletProviderWrapper>
            <ConnectWalletInner {...props} />
        </WalletProviderWrapper>
    );
}