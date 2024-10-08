import { ChampionRotation } from "@/types/ChampionRotation";

export const fetchChampionRotation = async (): Promise<ChampionRotation> => {
  const response = await fetch("/api/rotation");

  if (!response.ok) {
    throw new Error();
  }

  const data = await response.json();

  return data.data;
};
