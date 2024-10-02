export interface ChampionDetail {
  id: string;
  name: string;
  title: string;
  lore: string;
  key: string;
  info: {
    attack: number;
    defense: number;
    magic: number;
    difficulty: number;
  };
}
