import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BList } from '../interface/board';
import { Observable } from 'rxjs';
import { CustomResponse } from '../interface/custom-response';

@Injectable({
  providedIn: 'root'
})
export class BListService {

  private baseUrl = "http://localhost:8082/";
  constructor(private httpClient: HttpClient) { }

  createNewBList(boardId: number, bList: BList): Observable<CustomResponse> {
    return this.httpClient.post<CustomResponse>(`${this.baseUrl}board/${boardId}/blist/save`, bList);
  }

  deleteBList(id: number): Observable<CustomResponse> {
    return this.httpClient.delete<CustomResponse>(`${this.baseUrl}blist/delete/${id}`);
  }
}
