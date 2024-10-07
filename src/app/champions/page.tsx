import ChampionCard from "@/components/ChampionCard";
import { fetchChampionList } from "@/utils/serverApi";
import React from "react";

/** 챔피언 목록 */
const Champions = async () => {
  const { version, data } = await fetchChampionList();

  return (
    <div className="px-8">
      <h2 className="list-title">쳄피언 목록</h2>
      <div className="card-container">
        {Object.entries(data).map((obj) => {
          return (
            <ChampionCard
              key={obj[0]}
              alt={"챔피언 이미지"}
              src={`${process.env.NEXT_PUBLIC_RIOT_API_URL}/${version}/img/champion/${obj[1].id}.png`}
              data={obj[1]}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Champions;
