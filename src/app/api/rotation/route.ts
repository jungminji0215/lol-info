import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch(
    "https://kr.api.riotgames.com/lol/platform/v3/champion-rotations",
    {
      headers: {
        "Content-Type": "application/json",
        "X-Riot-Token": process.env.NEXT_PUBLIC_RIOT_API_KEY,
      },
    }
  );
  const data = await res.json();

  return NextResponse.json({ data });
}
