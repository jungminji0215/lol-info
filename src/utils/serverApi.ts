"use server";

import { Champion, ChampionDetail } from "@/types/Champion";
import { Item } from "@/types/Item";

/** 버전 정보 */
export const fetchVersion = async (): Promise<string> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_RIOT_API_URL}/api/versions.json`
  );

  if (!response.ok) {
    throw new Error(
      `버전 정보를 불러올 수 없습니다. status : ${response.status}, message : ${response.statusText}`
    );
  }

  const data = await response.json();
  return data[0];
};

/** 챔피언 목록 */
export const fetchChampionList = async (): Promise<{
  [championName: string]: Champion;
}> => {
  const version = await fetchVersion();

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
      `챔피언 목록 정보를 불러올 수 없습니다. status : ${response.status}, message : ${response.statusText}`
    );
  }

  const data = await response.json();
  return data.data;
};

/** 챔피언 상세 */
export const fetchChampionDetail = async (
  id: string
): Promise<ChampionDetail> => {
  const version = await fetchVersion();

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_RIOT_API_URL}/cdn/${version}/data/ko_KR/champion/${id}.json`
  );

  if (!response.ok) {
    throw new Error(
      `챔피언 상세 정보를 불러올 수 없습니다. status : ${response.status}, message : ${response.statusText}`
    );
  }

  const data = await response.json();

  return data.data[id];
};

/** 아이템 목록 */
export const fetchItemList = async (version: string): Promise<Item> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_RIOT_API_URL}/cdn/${version}/data/ko_KR/item.json`
  );

  if (!response.ok) {
    throw new Error(
      `아이템 정보를 불러올 수 없습니다. status : ${response.status}, message : ${response.statusText}`
    );
  }
  const data = await response.json();

  return data.data;
};
