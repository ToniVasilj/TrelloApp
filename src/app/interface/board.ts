export class Card {
  id: number;
  text: string;
}

export class BList {
  id: number;
  name: string;
  cards: Card[];
}

export class Board {
  id: number;
  name: string;
  blists: BList[];
}




