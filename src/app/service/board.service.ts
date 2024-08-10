import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomResponse } from '../interface/custom-response';
import { Board, BoardData } from '../interface/board';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  private baseUrl = "http://localhost:8082/";
  constructor(private httpClinet: HttpClient) { }

  getBoardsList(): Observable<CustomResponse> {
    return this.httpClinet.get<CustomResponse>(`${this.baseUrl}board/boards/idAndName`);
  }

  createBoard(board: Board): Observable<CustomResponse> {
    return this.httpClinet.post<CustomResponse>(`${this.baseUrl}board/save`, board);
  }

  getBoardById(id: number): Observable<CustomResponse> {
    return this.httpClinet.get<CustomResponse>(`${this.baseUrl}board/get/${id}`);
  }

  updateBoardName(board: Board): Observable<CustomResponse> {
    return this.httpClinet.post<CustomResponse>(`${this.baseUrl}board/updateName`, board);
  }

  deleteBoard(id: number): Observable<CustomResponse> {
    return this.httpClinet.delete<CustomResponse>(`${this.baseUrl}board/delete/${id}`);
  }

  getBoardData(id: number): BoardData {
    return {
      board: {  // Ensure the key is correct
        id: 1,
        name: "B1",
        blists: [
          {
            id: 1,
            name: "BList1",
            cards: [
              {
                id: 1,
                text: "Card1 txt"
              },
              {
                id: 2,
                text: "Card2 txt"
              }
            ]
          },
          {
            id: 2,
            name: "BList2",
            cards: []
          }
        ]
      }
    };
  }

}
