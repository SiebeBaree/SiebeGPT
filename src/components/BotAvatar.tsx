import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function BotAvatar() {
    return (
        <Avatar>
            <AvatarImage src="/logo.png"/>
            <AvatarFallback>S</AvatarFallback>
        </Avatar>
    );
}