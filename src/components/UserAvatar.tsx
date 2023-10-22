import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useSession } from "next-auth/react";

export default function UserAvatar() {
    const { data: session } = useSession();

    return (
        <Avatar>
            <AvatarImage src={session?.user?.image || ""}/>
            <AvatarFallback>
                {session?.user?.name?.charAt(0)}
                {session?.user?.name?.charAt(1)}
            </AvatarFallback>
        </Avatar>
    );
}