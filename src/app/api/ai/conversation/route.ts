import OpenAI from "openai";
import { NextResponse } from "next/server";
import { getServerAuthSession } from "@/lib/auth";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY!,
    maxRetries: 1,
});

export async function POST(req: Request) {
    try {
        const session = await getServerAuthSession();
        const body = await req.json();
        const { messages } = body;

        if (!session) {
            return new NextResponse("Unauthorized", { status: 401 });
        } else if (!openai.apiKey) {
            return new NextResponse("OpenAI API Key invalid...", { status: 401 });
        } else if (!messages) {
            return new NextResponse("Messages are required", { status: 400 });
        }

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const response = await openai.chat.completions.create({ model: "gpt-3.5-turbo", messages: messages as { role: string, content: string } });
        return NextResponse.json(response.choices[0].message);
    } catch (e) {
        console.log("[CONVERSATION ERROR] ", e);
        return new NextResponse("Internal Error", { status: 500 });
    }
}