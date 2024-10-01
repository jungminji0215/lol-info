import Link from "next/link";
import React from "react";
import Card from "./Card";

type ChampionCardProps = {
  data: { id: string; name: string; title: string };
  alt: string;
  src: string;
  version: string;
};

const ChampionCard = ({ data, alt, src, version }: ChampionCardProps) => {
  return (
    <Link href={`/champions/${data.id}?version=${version}`}>
      <Card data={data} alt={alt} src={src} />
    </Link>
  );
};

export default ChampionCard;
