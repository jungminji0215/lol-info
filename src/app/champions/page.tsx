import ChampionCard from "@/components/ChampionCard";
import { fetchChampionList } from "@/utils/serverApi";
import React from "react";

const Champions = async () => {
  const { version, data } = await fetchChampionList();

  return (
    <>
      <h2>쳄피언 목록</h2>
      <div>
        {Object.keys(data).map((key) => {
          return (
            <ChampionCard
              key={data[key].id}
              alt={"챔피언이미지"}
              src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${data[key].id}.png`}
              data={data[key]}
              version={version}
            />
          );
        })}
      </div>
    </>
  );
};

export default Champions;
