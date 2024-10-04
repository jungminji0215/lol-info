export type ChampionDetail = {
  id: string;
  name: string;
  title: string;
  lore: string;
  key: string;
  info: ChampionDetailInfo;
};

type ChampionDetailInfo = {
  attack: number;
  defense: number;
  magic: number;
  difficulty: number;
};
