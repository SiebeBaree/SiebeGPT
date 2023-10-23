"use client";

import { signIn } from "next-auth/react";

export default function Home() {
    return (
        <main>
            <button onClick={() => signIn()}>Login</button>
        </main>
    );
}
