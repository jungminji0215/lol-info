import { ChampionDetail } from "./ChampionDetail";

export type ChampionData = {
  [championName: string]: ChampionDetail;
};

export type Champion = {
  version: string;
  data: ChampionData;
};
