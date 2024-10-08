import React from "react";
import { Metadata } from "next";

import ItemCard from "@/components/ItemCard";
import { fetchItemList, fetchVersion } from "@/utils/serverApi";

export const metadata: Metadata = {
  title: "롤 아이템 목록",
  description: "롤 아이템 목록 페이지입니다.",
};

const Items = async () => {
  /**
   * 아이템 이미지에도 버전 정보가 필요하기 때문에 이쪽에서 버전 정보 불러옴
   */
  const version = await fetchVersion();
  const items = await fetchItemList(version);

  return (
    <div className="px-8">
      <h2 className="list-title">아이템 목록</h2>

      <div className="card-container">
        {/* 
          챔피언 목록에서는 Object.values 를 사용했지만, 
          아이템 목록에서는 Object.entries 를 사용해보자!
          (여러가지 방법으로 시도)
        */}
        {Object.entries(items).map((obj) => {
          return (
            <ItemCard
              key={obj[0]}
              alt={"아이템 이미지"}
              src={`${process.env.NEXT_PUBLIC_RIOT_API_URL}/cdn/${version}/img/item/${obj[0]}.png`}
              data={obj[1]}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Items;
