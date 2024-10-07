"use client";

import ChampionCard from "@/components/ChampionCard";
import { getChampionRotation } from "@/utils/riotApi";
import { fetchChampionList } from "@/utils/serverApi";
import React, { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

const useChampionList = () => {
  return useQuery({
    queryKey: ["championList"],
    queryFn: async () => {
      const res = await fetchChampionList();
      return res;
    },
    staleTime: 1000 * 60 * 5,
  });
};

const useChampionRotation = () => {
  return useQuery({
    queryKey: ["championRotation"],
    queryFn: async () => {
      const res = await getChampionRotation();
      return res;
    },
    enabled: false,
  });
};

const Rotation = () => {
  const {
    data: championListData,
    isLoading: isChampionListLoading,
    error: championListError,
  } = useChampionList();

  const {
    data: rotationData,
    isLoading: isRotationLoading,
    isError: rotationError,
    refetch: fetchRotation,
  } = useChampionRotation();

  useEffect(() => {
    if (championListData) {
      fetchRotation();
    }
  }, [championListData, fetchRotation]);

  if (isChampionListLoading || isRotationLoading)
    return <div className="text-white text-center">로딩중...</div>;
  if (championListError || rotationError)
    return <div className="text-white  text-center">에러가 발생했습니다.</div>;

  const champions = championListData?.data;
  const version = championListData?.version;
  const rotation = rotationData?.data.freeChampionIds;

  return (
    <div className="px-8">
      <h2 className="list-title">로테이션</h2>
      <div className="card-container">
        {rotation?.map((id: number) => {
          for (const champion in champions) {
            if (Number(champions[champion].key) === id) {
              return (
                <ChampionCard
                  key={champions[champion].id}
                  alt={"챔피언 이미지"}
                  src={`${process.env.NEXT_PUBLIC_RIOT_API_URL}/${version}/img/champion/${champions[champion].id}.png`}
                  data={champions[champion]}
                />
              );
            }
          }
        })}
      </div>
    </div>
  );
};

export default Rotation;
