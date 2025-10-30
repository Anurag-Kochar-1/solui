"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Switch } from "@/components/ui/switch"
import { cn } from "@/lib/utils"

export function ModeToggle() {
    const { resolvedTheme, setTheme } = useTheme()

    return (
        <div className="flex items-center gap-2">
            <Sun className={cn("h-4 w-4 text-muted-foreground transition-opacity opacity-25", {
                "opacity-75": resolvedTheme === "light"
            })} />
            <Switch
                checked={resolvedTheme === "dark"}
                onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
                aria-label="Toggle theme"
            />
            <Moon className={cn("h-4 w-4 text-muted-foreground transition-opacity opacity-25", {
                "opacity-75": resolvedTheme === "dark"
            })} />
        </div>
    )
}
