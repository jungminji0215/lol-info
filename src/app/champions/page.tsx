import ChampionCard from "@/components/ChampionCard";
import { fetchChampionList } from "@/utils/serverApi";
import React from "react";

const Champions = async () => {
  const { version, data } = await fetchChampionList();

  return (
    <>
      <h2>쳄피언 목록</h2>
      <div>
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
    </>
  );
};

export default Champions;
