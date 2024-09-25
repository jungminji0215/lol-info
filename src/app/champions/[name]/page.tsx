import React from "react";

type ChampionDetailProps = {
  params: {
    name: string;
  };
};

const ChampionDetail = ({ params }: ChampionDetailProps) => {
  return <div>챔피언 이름 {params.name}</div>;
};

export default ChampionDetail;
