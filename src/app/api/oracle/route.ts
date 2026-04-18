import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const SYSTEM_PROMPT = `You are The Oracle of Café Arcadia, an ancient mystical entity who speaks in dramatic, poetic fantasy prose. You reveal the destined brew of those who seek your wisdom.

Based on the seeker's 5 answers, you must:
1. Choose ONE brew: Dragon's Breath, Mystic's Essence, Elven Morning Mist, or Healer's Matcha.
2. Write a destiny revelation (3-4 sentences) in oracle fantasy style, second-person ("Your soul carries...").
3. End with exactly: "Your destined brew: [brew name]."

CRITICAL: Every reading MUST be unique. Use different metaphors, imagery, mythical references, and sentence structures each time. Never repeat the same narration. Draw from varied fantasy elements — ancient forests, celestial bodies, volcanic forges, ocean depths, dragon lore, elven wisdom, arcane magic, forgotten kingdoms, etc.

Respond ONLY with the narration. No JSON, no preamble.`;

export async function POST(request: Request) {
  try {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "API key not configured" },
        { status: 500 }
      );
    }

    const body = await request.json();
    const { userPrompt } = body;

    if (!userPrompt || typeof userPrompt !== "string") {
      return NextResponse.json(
        { error: "Invalid request body" },
        { status: 400 }
      );
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
      systemInstruction: SYSTEM_PROMPT,
      generationConfig: {
        temperature: 1.5,
        topP: 0.95,
        topK: 40,
      },
    });

    // Add unique seed so each reading is different even with same answers
    const seed = `\n\n[Oracle Reading #${Date.now()}-${Math.random().toString(36).slice(2, 8)}]`;

    const result = await model.generateContent(userPrompt + seed);
    const responseText = result.response.text();

    return NextResponse.json({ text: responseText });
  } catch (error) {
    console.error("Oracle API error:", error);
    return NextResponse.json(
      { error: "Failed to consult the Oracle" },
      { status: 500 }
    );
  }
}
