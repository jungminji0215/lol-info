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
        {Object.keys(data).map((key) => {
          return (
            <ItemCard
              key={key}
              alt={"아이템 이미지"}
              src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/item/${key}.png`}
              data={data[key]}
            />
          );
        })}
      </div>
    </>
  );
};

export default Items;
