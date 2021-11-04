import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'models/user.model';
import { apiURL as BASE_API_URL } from 'settings/setting';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
  ) { }
  private USER_API = `${BASE_API_URL}/user`;

  public createUser = async (user: User) => {
    return this.http.post<User>(`${this.USER_API}`, user).toPromise();
  }

  getUsers = async ( key?: string, value?: string ): Promise<User[]> => {
		const url = `${ this.USER_API }${ ( !!key && !!value ) ? '/' + key + '/' + value : '' }`;
		const result = await this.http.get<any>( url ).toPromise();
		return <User[]>result.data;
  }
  
}
