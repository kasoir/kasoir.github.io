import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiURL as BASE_API_URL } from 'settings/setting';
import { Category } from 'models/category.model';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private Category_API = `${BASE_API_URL}/category`;

  constructor(
    private http: HttpClient,
    private authService: AuthService,
  ) { }

  getBy = async (key?: string, value?: string): Promise<Category[]> => {
    const url = `${this.Category_API}${(!!key && !!value) ? '/' + key + '/' + value : ''}`;
    const result = await this.http.get<any>(url, {
      headers: new HttpHeaders()
        .set('Authorization',
          JSON.parse((localStorage.getItem('currentUserData') || '{"token":""}')).token || '')
    }).toPromise();
    return <Category[]>result.data;
  }

  public createCategory = async (category: Category) => {
    try {
      const url = `${this.Category_API}/createCategory`;
      const result = await this.http.post<any>(url, category, {
        headers: new HttpHeaders()
          .set('Authorization',
            JSON.parse((localStorage.getItem('currentUserData') || '{"token":""}')).token || '')
      }).toPromise();
      return <Category[]>result.data;
    } catch (err) {
      console.error(err);
      throw err;
    }
  }
}
