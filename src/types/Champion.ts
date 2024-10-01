import { ChampionDetail } from "./ChampionDetail";

export interface Champion {
  version: string;
  data: {
    [championName: string]: ChampionDetail;
  };
}
