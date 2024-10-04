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
      <div>
        <Image src={src} width={48} height={48} alt={alt} />
        <span>{data.name}</span>
        <span> {data.title}</span>
      </div>
    </Link>
  );
};

export default ChampionCard;
