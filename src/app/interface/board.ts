export interface Card {
  id: number;
  text: string;
}

export interface BList {
  id: number;
  name: string;
  cards: Card[];
}

export interface iBoard {
  id: number;
  name: string;
  blists: BList[];
}

export interface BoardData {
  board: iBoard;
}

export class Board {
  id: number;
  name: string;
}




