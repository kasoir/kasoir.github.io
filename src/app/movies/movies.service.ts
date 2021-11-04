import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { apiURL as BASE_API_URL } from 'settings/setting';
import { MovFile, Movie } from 'models/movie.model';
// import { retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private MOVIE_API = `${BASE_API_URL}/movie`;
  constructor(private http: HttpClient) { }

  getBy = async (key?: string, value?: string): Promise<Movie[]> => {
    const url = `${this.MOVIE_API}${(!!key && !!value) ? '/' + key + '/' + value : ''}`;
    const result = await this.http.get<any>(url, {
      headers: new HttpHeaders()
        .set('Authorization',
          JSON.parse((localStorage.getItem('currentUserData') || '{"token":""}')).token || '')
    }).toPromise();
    return <Movie[]>result.data;

  }
  getRecentlyMovies = async (date: string): Promise<Movie[]> => {
    const url = `${this.MOVIE_API}/${date}`;
    const result = await this.http.get<any>(url, {
      headers: new HttpHeaders()
        .set('Authorization',
          JSON.parse((localStorage.getItem('currentUserData') || '{"token":""}')).token || '')
    }).toPromise();
    return <Movie[]>result.data;

  }
  public createMovie = async (movie: Movie) => {
    try {
      const url = `${this.MOVIE_API}/createMovie`;
      const result = await this.http.post<any>(url, movie).toPromise();
      return <Movie[]>result.data;
    } catch (err) {
      console.error(err);
      throw err;
    }
  }
  public updateMovie = async (movie: Movie) => {
    try {
      const url = `${this.MOVIE_API}/updateMovie`;
      const result = await this.http.put<any>(url, movie, {
        headers: new HttpHeaders()
          .set('Authorization',
            JSON.parse((localStorage.getItem('currentUserData') || '{"token":""}')).token || '')
      }).toPromise();
      return <Movie[]>result.data;
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  public getMovie = async (movieId: string) => {
    try {
      const url = `${this.MOVIE_API}/getMovie/${movieId}`;
      console.log(url);
      const movie = await this.http.get(url, {
        responseType: 'blob'
      }).toPromise();
      return movie;
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  public upload = async (movies: MovFile[]): Promise<string[]> => {
    try {
      const formData = new FormData();

      movies.forEach(movie => {
        formData.append( movie.name, movie.file );
      });
      const url = `${BASE_API_URL}/movieUpload/upload`;
      console.log(url);
      const result = await this.http.post<string[]>(url, formData).toPromise();
      return result;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
