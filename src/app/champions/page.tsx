import ChampionCard from "@/components/ChampionCard";
import { fetchChampionList } from "@/utils/serverApi";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "롤 챔피언 목록",
  description: "롤 챔피언 목록 페이지입니다.",
};

/** 챔피언 목록 */
const Champions = async () => {
  const { version, data } = await fetchChampionList();

  return (
    <div className="px-8">
      <h2 className="list-title">쳄피언 목록</h2>
      <p className="text-zinc-400 text-center mb-8">
        챔피언을 클릭하여 상세 정보를 확인하세요.
      </p>
      <div className="card-container">
        {Object.entries(data).map((obj) => {
          return (
            <ChampionCard
              key={obj[0]}
              alt={"챔피언 이미지"}
              src={`${process.env.NEXT_PUBLIC_RIOT_API_URL}/cdn/${version}/img/champion/${obj[1].id}.png`}
              data={obj[1]}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Champions;
