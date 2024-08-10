import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomResponse } from '../interface/custom-response';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  private baseUrl = "http://localhost:8082/";
  constructor(private httpClinet: HttpClient) { }

  getBoardsList(): Observable<CustomResponse> {
    return this.httpClinet.get<CustomResponse>(`${this.baseUrl}board/boards/idAndName`);
  }
}
