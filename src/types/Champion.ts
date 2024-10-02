import { ChampionDetail } from "./ChampionDetail";

export interface ChampionData {
  [championName: string]: ChampionDetail;
}

export interface Champion {
  version: string;
  data: ChampionData;
}
