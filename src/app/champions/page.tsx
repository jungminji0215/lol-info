import Card from "@/components/Card";
import { fetchChampionList, getVersion } from "@/utils/serverApi";
import React from "react";

const Champions = async () => {
  const version = await getVersion();
  const data = await fetchChampionList();

  return (
    <>
      <h2>쳄피언 목록</h2>
      <div>
        {Object.keys(data).map((key) => {
          return (
            // eslint-disable-next-line react/jsx-key
            <Card
              alt={"챔피언이미지"}
              src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${data[key].id}.png`}
              data={data[key]}
            />
          );
        })}
      </div>
    </>
  );
};

export default Champions;
