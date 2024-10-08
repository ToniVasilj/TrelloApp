import { BList, Board, Card } from "./board";

export interface CustomResponse {
  timeStamp: Date;
  statusCode: number;
  status: string;
  reason: string;
  message: string;
  developerMessaege: string;
  data: { boards?: Board[], board?: Board, bList?: BList, card?: Card}
}