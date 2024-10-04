import { fetchChampionDetail } from "@/utils/serverApi";
import Image from "next/image";
import React from "react";

type ChampionDetailProps = {
  params: { id: string };
};

const ChampionDetail = async ({ params }: ChampionDetailProps) => {
  const { data, version } = await fetchChampionDetail(params.id);

  const champion = data[params.id];

  return (
    <div>
      <h2>{champion.name}</h2>
      <h3>{champion.title}</h3>
      <Image
        src={`${process.env.NEXT_PUBLIC_RIOT_API_URL}/${version}/img/champion/${params.id}.png`}
        width={100}
        height={100}
        alt={`${champion.name} 챔피언 이미지`}
      />
      <p>{champion.lore}</p>
    </div>
  );
};

export default ChampionDetail;
