import ItemCard from "@/components/ItemCard";
import { fetchItemList, getVersion } from "@/utils/serverApi";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "롤 아이템 목록",
  description: "롤 아이템 목록 페이지입니다.",
};

const Items = async () => {
  const version = await getVersion();
  const { data } = await fetchItemList(version);

  return (
    <div className="px-8">
      <h2 className="list-title">아이템 목록</h2>

      <div className="card-container">
        {Object.entries(data).map((obj) => {
          return (
            <ItemCard
              key={obj[0]}
              alt={"아이템 이미지"}
              src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/item/${obj[0]}.png`}
              data={obj[1]}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Items;
