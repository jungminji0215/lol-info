"use server";

import { Champion } from "@/types/Champion";
import { Item } from "@/types/Item";

/** 버전 정보 */
export const getVersion = async () => {
  const response = await fetch(
    "https://ddragon.leagueoflegends.com/api/versions.json"
  );
  const data = await response.json();
  return data[0];
};

/** 챔피언 목록 */
export const fetchChampionList = async (): Promise<Champion> => {
  const version = await getVersion();

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_RIOT_API_URL}/cdn/${version}/data/ko_KR/champion.json`,
    {
      next: {
        revalidate: 86400,
      },
    }
  );

  if (!response.ok) {
    throw new Error(
      `오류가 발생했습니다. status : ${response.status}, message : ${response.statusText}`
    );
  }

  const data = await response.json();
  return data;
};

/** 챔피언 상세 */
export const fetchChampionDetail = async (id: string): Promise<Champion> => {
  const version = await getVersion();

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_RIOT_API_URL}/cdn/${version}/data/ko_KR/champion/${id}.json`
  );

  if (!response.ok) {
    throw new Error(
      `오류가 발생했습니다. status : ${response.status}, message : ${response.statusText}`
    );
  }

  const data = await response.json();

  return data;
};

/** 아이템 목록 */
export const fetchItemList = async (version: string): Promise<Item> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_RIOT_API_URL}/cdn/${version}/data/ko_KR/item.json`
  );

  if (!response.ok) {
    throw new Error(
      `오류가 발생했습니다. status : ${response.status}, message : ${response.statusText}`
    );
  }
  const data = await response.json();

  return data;
};
