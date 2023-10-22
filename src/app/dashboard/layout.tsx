import React from "react";
import DashboardNavBar from "@/components/DashboardNavbar";
import Sidebar from "@/components/Sidebar";

export default function DashboardLayout({ children }: {
    children: React.ReactNode;
}) {
    return (
        <div className="h-full relative">
            <div
                className="hidden h-full md:flex md:flex-col md:fixed md:inset-y-0 z-[80] bg-accent text-accent-foreground w-72">
                <Sidebar/>
            </div>
            <main className="md:pl-72">
                <DashboardNavBar/>
                {children}
            </main>
        </div>
    );
}