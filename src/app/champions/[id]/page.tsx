import { fetchChampionDetail, fetchVersion } from "@/utils/serverApi";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";

type ChampionDetailProps = {
  params: { id: string };
};

export function generateMetadata({ params }: ChampionDetailProps): Metadata {
  return {
    title: params.id,
    description: params.id,
  };
}

const ChampionDetail = async ({ params }: ChampionDetailProps) => {
  const champion = await fetchChampionDetail(params.id);
  const version = await fetchVersion();

  return (
    <div className="flex flex-col items-center text-center gap-5">
      <div>
        <h2 className="text-2xl font-bold mb-3 text-red-700">
          {champion.name}
        </h2>
        <h3 className="text-zinc-400">{champion.title}</h3>
      </div>

      <Image
        src={`${process.env.NEXT_PUBLIC_RIOT_API_URL}/cdn/${version}/img/champion/${params.id}.png`}
        width={300}
        height={300}
        alt={`${champion.name} 챔피언 이미지`}
      />
      <div className="max-w-4xl px-5">
        <p className="text-red-700 ">{champion.lore}</p>
      </div>
    </div>
  );
};

export default ChampionDetail;
