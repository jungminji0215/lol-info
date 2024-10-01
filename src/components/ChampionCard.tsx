import Link from "next/link";
import React from "react";
import Image from "next/image";

type ChampionCardProps = {
  data: { id: string; name: string; title: string };
  alt: string;
  src: string;
  version: string;
};

const ChampionCard = ({ data, alt, src, version }: ChampionCardProps) => {
  return (
    <Link href={`/champions/${data.id}?version=${version}`}>
      <div>
        <Image src={src} width={48} height={48} alt={alt} />
        <span>{data.name}</span>
        <span> {data.title}</span>
      </div>
    </Link>
  );
};

export default ChampionCard;
