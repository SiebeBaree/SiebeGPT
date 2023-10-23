import MobileSideBar from "@/components/MobileSideBar";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getServerAuthSession } from "@/lib/auth";
import Link from "next/link";
import { Home, Settings } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import LogOutNavItem from "@/components/LogOutNavItem";

const items = [
    {
        name: "Landing Page",
        href: "/",
        icon: Home,
    },
    {
        name: "Settings",
        href: "/settings/dashboard",
        icon: Settings,
    },
];

export default async function DashboardNavBar() {
    const session = await getServerAuthSession();

    return (
        <div className="flex justify-between items-center p-4 h-16">
            <MobileSideBar/>
            <div>
                <Popover>
                    <PopoverTrigger>
                        <Avatar className="h-8 w-8">
                            <AvatarImage src={session?.user?.image ?? ""}/>
                            <AvatarFallback>
                                {session?.user?.name?.charAt(0) ?? "U"}
                            </AvatarFallback>
                        </Avatar>
                    </PopoverTrigger>
                    <PopoverContent className="bg-white w-52 mr-4">
                        <div className="flex flex-col gap-1">
                            {items.map((item) => (
                                <Link key={item.name} href={item.href}
                                      className={"text-sm group flex p-2 w-full justify-start cursor-pointer hover:bg-black/5 rounded-lg transition font-medium"}>
                                    <item.icon className={"h-5 w-5 mr-3"}/>
                                    {item.name}
                                </Link>
                            ))}
                            <Separator className="bg-muted"/>
                            <LogOutNavItem/>
                        </div>
                    </PopoverContent>
                </Popover>

            </div>
        </div>
    );
}