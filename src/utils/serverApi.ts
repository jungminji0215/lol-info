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
  try {
    const version = await getVersion();

    const response = await fetch(
      `https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/champion.json`,
      {
        next: {
          revalidate: 86400,
        },
      }
    );

    if (!response.ok) {
      throw new Error();
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

/** 챔피언 상세 */
export const fetchChampionDetail = async (
  version: string,
  id: string
): Promise<Champion> => {
  try {
    const response = await fetch(
      `https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/champion/${id}.json`
    );

    if (!response.ok) {
      throw new Error();
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

/** 아이템 목록 */
export const fetchItemList = async (version: string): Promise<Item> => {
  try {
    const response = await fetch(
      `https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/item.json`
    );

    if (!response.ok) {
      throw new Error();
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
