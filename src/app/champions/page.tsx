import React from "react";
import { Metadata } from "next";
import ChampionCard from "@/components/ChampionCard";
import { fetchChampionList } from "@/utils/serverApi";

export const metadata: Metadata = {
  title: "롤 챔피언 목록",
  description: "롤 챔피언 목록 페이지입니다.",
};

const Champions = async () => {
  const championsResponse = await fetchChampionList();

  return (
    <div className="px-8">
      <h2 className="list-title">쳄피언 목록</h2>
      <p className="text-zinc-400 text-center mb-8">
        챔피언을 클릭하여 상세 정보를 확인하세요.
      </p>
      <div className="card-container">
        {Object.values(championsResponse).map((champion) => {
          return (
            <ChampionCard
              key={champion.id}
              alt={"챔피언 이미지"}
              src={`${process.env.NEXT_PUBLIC_RIOT_API_URL}/cdn/${champion.version}/img/champion/${champion.id}.png`}
              data={champion}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Champions;
