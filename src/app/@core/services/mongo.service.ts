import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MongoService {

  constructor(private httpClient: HttpClient) { }

  changeRoomState(name: string): void {
    this.httpClient.put('http://localhost:8080/mongo/changeRoomState/', {name: name});
  }
}
