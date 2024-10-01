import { fetchChampionList, getVersion } from "@/utils/serverApi";
import Image from "next/image";
import React from "react";

const Champions = async () => {
  const version = await getVersion();
  const data = await fetchChampionList();

  console.log("Champions rendering");

  return (
    <>
      <h2>쳄피언 목록</h2>
      <div>
        {Object.keys(data).map((key) => {
          return (
            <div key={data[key].id}>
              <Image
                src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${data[key].id}.png`}
                width={48}
                height={48}
                alt={"챔피언 이미지"}
              />
              <span>{data[key].name}</span>
              <span> {data[key].title}</span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Champions;
