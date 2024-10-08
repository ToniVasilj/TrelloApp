import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomResponse } from '../interface/custom-response';
import { Board} from '../interface/board';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  private baseUrl = "http://localhost:8082/";
  constructor(private httpClient: HttpClient) { }

  getBoardsList(): Observable<CustomResponse> {
    return this.httpClient.get<CustomResponse>(`${this.baseUrl}board/boards/idAndName`);
  }

  createBoard(board: Board): Observable<CustomResponse> {
    return this.httpClient.post<CustomResponse>(`${this.baseUrl}board/save`, board);
  }

  getBoardById(id: number): Observable<CustomResponse> {
    return this.httpClient.get<CustomResponse>(`${this.baseUrl}board/get/${id}`);
  }

  updateBoardName(board: Board): Observable<CustomResponse> {
    return this.httpClient.post<CustomResponse>(`${this.baseUrl}board/updateName`, board);
  }

  deleteBoard(id: number): Observable<CustomResponse> {
    return this.httpClient.delete<CustomResponse>(`${this.baseUrl}board/delete/${id}`);
  }
}
