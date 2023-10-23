"use client";

import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";

export default function LogOutNavItem() {
    return (
        <div onClick={() => signOut({
            callbackUrl: "/",
        })}
             className={"text-sm group flex p-2 w-full justify-start cursor-pointer hover:bg-black/5 rounded-lg transition font-medium text-red-500"}>
            <LogOut className={"h-5 w-5 mr-3"}/>
            Logout
        </div>
    );
}