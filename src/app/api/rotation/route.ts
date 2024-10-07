import { NextResponse } from "next/server";

const getToken = (): string => {
  const token = process.env.NEXT_PUBLIC_RIOT_API_KEY;

  if (!token) {
    throw new Error("API Key 가 없습니다!");
  }

  return token;
};

export async function GET() {
  const response = await fetch(
    "https://kr.api.riotgames.com/lol/platform/v3/champion-rotations",
    {
      headers: {
        "Content-Type": "application/json",
        "X-Riot-Token": getToken(),
      },
    }
  );
  const data = await response.json();

  return NextResponse.json({ data });
}
