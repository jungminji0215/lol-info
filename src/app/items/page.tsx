import ItemCard from "@/components/ItemCard";
import { fetchItemList, getVersion } from "@/utils/serverApi";
import React from "react";

const Items = async () => {
  const version = await getVersion();
  const { data } = await fetchItemList(version);

  return (
    <>
      <h2>아이템 목록</h2>
      <div>
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
    </>
  );
};

export default Items;
