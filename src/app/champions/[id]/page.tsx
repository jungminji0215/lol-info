import ChampionCard from "@/components/ChampionCard";
import { fetchChampionDetail } from "@/utils/serverApi";
import Image from "next/image";
import React from "react";

type ChampionDetailProps = {
  params: { id: "string" };
  searchParams: { version: string };
};

const ChampionDetail = async ({
  params,
  searchParams,
}: ChampionDetailProps) => {
  const { data } = await fetchChampionDetail(searchParams.version, params.id);

  const champion = data[params.id];

  return (
    <div>
      <h2>{champion.name}</h2>
      <h3>{champion.title}</h3>
      <Image
        src={`https://ddragon.leagueoflegends.com/cdn/${searchParams.version}/img/champion/${params.id}.png`}
        width={100}
        height={100}
        alt={"챔피언 상세 이미지"}
      />
      <p>{champion.lore}</p>
    </div>
  );
};

export default ChampionDetail;
