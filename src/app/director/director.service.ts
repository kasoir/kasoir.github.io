import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { async } from '@angular/core/testing';
import { Director } from 'models/director.model';
import { apiURL as BASE_API_URL } from 'settings/setting';


@Injectable({
  providedIn: 'root'
})
export class DirectorService {

  private DIRECTOR_API = `${BASE_API_URL}/director`;
  constructor(private http: HttpClient) { }

  getBy = async (key?: string, value?: string): Promise<Director[]> => {
    const url = `${this.DIRECTOR_API}${(!!key && !!value) ? '/' + key + '/' + value : ''}`;
    const result = await this.http.get<any>(url).toPromise();
    return <Director[]>result.data;
  }

  createDirector = async (director: Director) => {
    return this.http.post<Director>(`${this.DIRECTOR_API}/createDirector`, director).toPromise();
  }

  updateDirector = async (director: Director) => {
    return this.http.put<Director>(`${this.DIRECTOR_API}/updateDirector`, director).toPromise();
  }

}
