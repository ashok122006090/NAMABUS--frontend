import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserEntity, AdminEntity, CustomerEntity, UserRoles } from 'src/user';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = "http://localhost:8080/auth/register-admin";
  private secondApiUrl = "http://localhost:8080/auth/register-customer";

  constructor(private httpClient: HttpClient) {}

  registerAdmin(admin:UserEntity): Observable<UserEntity[]> {
    return this.httpClient.get<UserEntity[]>(`${this.apiUrl}`);
  }
  registerCustomer(customer:UserEntity): Observable<UserEntity[]> {
    return this.httpClient.get<UserEntity[]>(`${this.secondApiUrl}`,);
  }

  
}
