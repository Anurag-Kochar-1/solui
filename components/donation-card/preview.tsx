"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Copy, Twitter, MessageCircle, Send, Clock } from "lucide-react";
import Image from "next/image";
import { Progress } from "@/components/ui/progress";
import { useEffect } from "react";
import { useMotionValue, animate } from "framer-motion";
import { FaTelegramPlane, FaDiscord, FaTwitter } from "react-icons/fa";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ConnectWallet } from "@/components/connect-wallet/preview";


export function DonationCard() {
    const [copied, setCopied] = useState(false);
    const [openSendDialog, setOpenSendDialog] = useState(false);

    // Demo data - update these for real use!
    const donationAddress = "5d3...9xT";
    const goal = 5;
    const raised = 1.5;
    const progress = Math.round((raised / goal) * 100);
    const started = "Jan 20, 2025";
    const deadline = "Feb 10, 2025";
    const deadlineDays = 21;
    const daysLeft = 9;
    const deadlineProgress = Math.round(((deadlineDays - daysLeft) / deadlineDays) * 100);

    const [animatedProgress, setAnimatedProgress] = useState(progress);
    const [animatedDeadline, setAnimatedDeadline] = useState(deadlineProgress);

    useEffect(() => {
        const controls = animate(animatedProgress, progress, {
            duration: 0.8,
            onUpdate: v => setAnimatedProgress(v)
        });
        return () => controls.stop();
    }, [progress]);
    useEffect(() => {
        const controls = animate(animatedDeadline, deadlineProgress, {
            duration: 0.8,
            onUpdate: v => setAnimatedDeadline(v)
        });
        return () => controls.stop();
    }, [deadlineProgress]);

    const handleCopy = () => {
        navigator.clipboard.writeText(donationAddress);
        setCopied(true);
        toast.success("Address copied!", { description: "Wallet address copied to clipboard." });
        setTimeout(() => setCopied(false), 2000);
    };

    const handleSend = () => {
        setOpenSendDialog(true);
    };

    return (
        <motion.div
            initial={{ scale: 0.98 }}
            whileHover={{ scale: 1.02 }}
            className="max-w-md w-full p-7 rounded-3xl border bg-card shadow-2xl text-card-foreground space-y-6 transition duration-200 hover:brightness-105 hover:shadow-3xl group relative overflow-hidden"
        >
            {/* Decorative blurred background accent */}
            <div className="absolute -top-16 -right-16 w-80 h-80 bg-primary/20 rounded-full filter blur-3xl z-0 pointer-events-none" />

            <div className="w-full flex items-center justify-center z-10">
                <Image src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=SOLana-wallet-address"
                    alt="QR Code" width={130} height={130} className="border border-primary/20" />
            </div>

            <div className="text-center space-y-1 z-10">
                <h2 className="text-2xl font-bold text-primary">Support Open-Source Development</h2>
                <p className="text-sm opacity-85">Your contributions help keep this project alive and growing.</p>
            </div>

            <div className="flex items-center justify-between text-sm px-2 z-10">
                <span className="opacity-80 font-semibold">Address:</span>
                <div className="flex items-center gap-2">
                    <span className="font-mono text-xs opacity-80 bg-muted/70 px-2 py-1 rounded-xl">{donationAddress}</span>
                    <button onClick={handleCopy} className="opacity-80 hover:opacity-100 transition">
                        <Copy size={17} className={copied ? "text-green-500" : ""} />
                    </button>
                </div>
            </div>

            <Button className="w-full shadow-xl font-semibold z-10" onClick={handleSend}>
                <Send size={16} className="mr-2" /> Send Donation
            </Button>
            <Dialog open={openSendDialog} onOpenChange={setOpenSendDialog}>
                <DialogContent className="max-w-sm">
                    <DialogHeader>
                        <DialogTitle>Send Donation</DialogTitle>
                        <DialogDescription> Choose your preferred wallet to send your donation.</DialogDescription>
                    </DialogHeader>
                    <ConnectWallet />
                    <DialogFooter>
                        <Button variant="outline" onClick={() => setOpenSendDialog(false)}>Close</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

            {/* Progress Information */}
            <div className="space-y-3 px-2 z-10">
                <div className="flex justify-between text-xs opacity-90 font-medium">
                    <span>Raised</span>
                    <span className="tabular-nums">${raised} / ${goal} W <span className="ml-2">{Math.round(animatedProgress)}%</span></span>
                </div>
                <Progress value={animatedProgress} className="h-3" />
                <div className="flex justify-between text-xs opacity-90 font-medium mt-3">
                    <span>Deadline <span className="italic font-normal">({daysLeft} days left)</span></span>
                    <span>{Math.round(animatedDeadline)}%</span>
                </div>
                <Progress value={animatedDeadline} className="h-3 bg-destructive/20 **:data-[slot=progress-indicator]:bg-destructive" />
            </div>

            {/* Details */}
            <div className="text-xs opacity-80 space-y-1 px-2 font-medium z-10">
                <p><span className="font-semibold">Goal:</span> {goal} SOL</p>
                <p><span className="font-semibold">Started:</span> {started}</p>
                <p><span className="font-semibold">Deadline:</span> {deadline}</p>
            </div>

            {/* Socials */}
            <div className="flex items-center justify-center gap-5 pt-3 opacity-95 z-10">
                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="group/icon flex items-center p-2 rounded-full bg-cyan-600 hover:bg-cyan-800 hover:shadow-xl transition duration-150 shadow cursor-pointer hover:scale-110">
                    <FaTwitter className="text-white dark:text-black" />
                </a>
                <a href="https://discord.com/" target="_blank" rel="noopener noreferrer" className="group/icon flex items-center p-2 rounded-full bg-purple-600 hover:bg-purple-800 hover:shadow-xl transition duration-150 shadow cursor-pointer hover:scale-110">
                    <FaDiscord className="text-white dark:text-black" />
                </a>
                <a href="https://t.me/" target="_blank" rel="noopener noreferrer" className="group/icon flex items-center p-2 rounded-full bg-blue-600 hover:bg-blue-800 hover:shadow-xl transition duration-150 shadow cursor-pointer hover:scale-110">
                    <FaTelegramPlane className="text-white dark:text-black" />
                </a>
            </div>
        </motion.div>
    );
}