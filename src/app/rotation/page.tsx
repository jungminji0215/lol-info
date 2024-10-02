"use client";

import ChampionCard from "@/components/ChampionCard";
import { ChampionData } from "@/types/Champion";
import { getChampionRotation } from "@/utils/riotApi";
import { fetchChampionList } from "@/utils/serverApi";
import React, { useEffect, useState } from "react";

const Rotation = () => {
  const [champions, setChampions] = useState<ChampionData>();
  const [version, setVersion] = useState<string>("");
  const [rotation, setRotation] = useState<number[]>();

  useEffect(() => {
    const getChampions = async () => {
      const { version, data } = await fetchChampionList();
      setChampions(data);
      setVersion(version);
    };

    getChampions();
  }, []);

  useEffect(() => {
    const getRotation = async () => {
      const { data } = await getChampionRotation();
      setRotation(data.freeChampionIds);
    };
    if (champions) {
      getRotation();
    }
  }, [champions]);

  if (!rotation || !champions) return "로딩중";

  return (
    <div>
      {rotation.map((id) => {
        for (const champion in champions) {
          if (Number(champions[champion].key) === id) {
            return (
              <ChampionCard
                key={champions[champion].id}
                alt={"챔피언 이미지"}
                src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${champions[champion].id}.png`}
                data={champions[champion]}
                version={version}
              />
            );
          }
        }
      })}
    </div>
  );
};

export default Rotation;
