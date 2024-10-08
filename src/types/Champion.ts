export interface Champion {
  id: string;
  key: string;
  name: string;
  title: string;
  version: string; // Champion에만 version 필드
  image: {
    full: string;
    sprite: string;
    group: string;
    x: number;
    y: number;
    w: number;
    h: number;
  };
}

export interface ChampionDetail extends Omit<Champion, "version"> {
  lore: string;
  blurb: string;
  stats: {
    [key: string]: number;
  };
  spells: Spell[];
  passive: Passive;
}

export interface Spell {
  id: string;
  name: string;
  description: string;
  image: {
    full: string;
  };
}

export interface Passive {
  name: string;
  description: string;
  image: {
    full: string;
  };
}
