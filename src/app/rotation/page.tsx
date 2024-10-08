"use client";

import React, { useEffect, useState } from "react";

import ChampionCard from "@/components/ChampionCard";
import { fetchChampionList } from "@/utils/serverApi";
import { ChampionRotation } from "@/types/ChampionRotation";
import { Champion } from "@/types/Champion";
import { fetchChampionRotation } from "@/utils/riotApi";

/** 로테이션을 라우트 핸들러로 호출을 하기 위해 use client 명시 */
const Rotation = () => {
  const [rotationData, setRotationData] = useState<ChampionRotation | null>(
    null
  );
  const [championData, setChampionData] = useState<{
    [key: string]: Champion;
  } | null>(null);

  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      /**
       * 두 개 api 동시 호출 (병렬적으로 호출)
       * 챔피언 목록과 로테이션 목록은 서로 영향을 안미치고 호출이 가능하기때문에
       *
       */
      const [rotationRes, championsRes] = await Promise.all([
        fetchChampionRotation(),
        fetchChampionList(),
      ]);

      setRotationData(rotationRes);
      setChampionData(championsRes);
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) return <div className="text-center">로딩중입니다...</div>;
  if (!rotationData || !championData)
    return <div className="text-center">챔피언 정보가 없습니다...</div>;

  return (
    <div className="px-8">
      <h2 className="list-title">로테이션</h2>
      <div className="card-container">
        {rotationData.freeChampionIds?.map((id: number) => {
          for (const champion in championData) {
            if (Number(championData[champion].key) === id) {
              return (
                <ChampionCard
                  key={championData[champion].id}
                  alt={"챔피언 이미지"}
                  src={`${process.env.NEXT_PUBLIC_RIOT_API_URL}/cdn/${championData[champion].version}/img/champion/${championData[champion].id}.png`}
                  data={championData[champion]}
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
