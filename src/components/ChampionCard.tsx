import Link from "next/link";
import React from "react";
import Image from "next/image";

type ChampionData = { id: string; name: string; title: string };

type ChampionCardProps = {
  data: ChampionData;
  alt: string;
  src: string;
};

const ChampionCard = ({ data, alt, src }: ChampionCardProps) => {
  return (
    <Link href={`/champions/${data.id}`}>
      <div className="card-style">
        <Image src={src} width={100} height={100} alt={alt} />
        <span className="font-bold text-red-700">{data.name}</span>
        <span className="text-zinc-400"> {data.title}</span>
      </div>
    </Link>
  );
};

export default ChampionCard;
