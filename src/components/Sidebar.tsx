"use client";

import Link from "next/link";
import Image from "next/image";
import { Code, ImageIcon, LayoutDashboard, MessageSquare, Music, Settings, Video } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const routes = [
    {
        label: "Dashboard",
        icon: LayoutDashboard,
        href: "",
        color: "text-sky-500",
    },
    {
        label: "Conversation",
        icon: MessageSquare,
        href: "/conversation",
        color: "text-violet-500",
    },
    {
        label: "Image Generation",
        icon: ImageIcon,
        href: "/image",
        color: "text-pink-700",
    },
    {
        label: "Video Generation",
        icon: Video,
        href: "/video",
        color: "text-orange-700",
    },
    {
        label: "Music Generation",
        icon: Music,
        href: "/music",
        color: "text-emerald-500",
    },
    {
        label: "Code Generation",
        icon: Code,
        href: "/code",
        color: "text-green-700",
    },
    {
        label: "Settings",
        icon: Settings,
        href: "/settings",
    },
];

export default function Sidebar() {
    const pathname = usePathname();

    return (
        <div className="space-y-4 py-4 flex flex-col h-full bg-accent text-accent-foreground">
            <div className="px-3 py-2 flex-1">
                <Link href={"/dashboard"} className="flex items-center pl-3 mb-14">
                    <div className="relative w-8 h-8 mr-3">
                        <Image fill src="/logo-white.png" alt="The logo of SiebeGPT"/>
                    </div>
                    <h1 className="text-2xl font-bold">SiebeGPT</h1>
                </Link>
                <div className="flex flex-col gap-1">
                    {routes.map((route) => (
                        <Link href={"/dashboard" + route.href} key={route.href}
                              className={cn("text-sm group flex p-3 w-full justify-start cursor-pointer hover:bg-white/10 rounded-lg transition font-medium", pathname === "/dashboard" + route.href ? "text-accent-foreground bg-white/10" : "text-zinc-300")}>
                            <route.icon className={cn("h-5 w-5 mr-3", route.color)}/>
                            {route.label}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}