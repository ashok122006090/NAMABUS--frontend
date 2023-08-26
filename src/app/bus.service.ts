import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bus, BusType } from './bus';

@Injectable({
  providedIn: 'root'
})
export class BusService {
  private apiUrl = "http://localhost:8070/api/buses";

  constructor(private httpClient: HttpClient) {}

  getAllBuses(): Observable<Bus[]> {
    return this.httpClient.get<Bus[]>(`${this.apiUrl}`);
  }

  getBusById(id: number): Observable<Bus> {
    return this.httpClient.get<Bus>(`${this.apiUrl}/${id}`);
  }

  createBus(bus: Bus): Observable<Bus> {
    return this.httpClient.post<Bus>(`${this.apiUrl}`, bus);
  }

  updateBus(id: number, bus: Bus): Observable<Bus> {
    return this.httpClient.put<Bus>(`${this.apiUrl}/${id}`, bus);
  }

  deleteBus(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.apiUrl}/${id}`);
  }
}
