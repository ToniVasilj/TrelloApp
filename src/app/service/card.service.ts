import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Card } from '../interface/board';
import { Observable } from 'rxjs';
import { CustomResponse } from '../interface/custom-response';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  private baseUrl = "http://localhost:8082/";
  constructor(private httpClient: HttpClient) { }

  createNewCard(boardId: number, bListId: number, card: Card): Observable<CustomResponse> {
    return this.httpClient.post<CustomResponse>(`${this.baseUrl}board/${boardId}/blist/${bListId}/save`, card);
  }

  deleteCard(id: number): Observable<CustomResponse> {
    return this.httpClient.delete<CustomResponse>(`${this.baseUrl}card/delete/${id}`);
  }

  getCardById(id: number): Observable<CustomResponse> {
    return this.httpClient.get<CustomResponse>(`${this.baseUrl}card/get/${id}`);
  }

  updateCard(card: Card): Observable<CustomResponse> {
    return this.httpClient.post<CustomResponse>(`${this.baseUrl}card/updateText`, card);
  }
}
