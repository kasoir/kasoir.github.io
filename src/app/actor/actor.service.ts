import { Injectable } from '@angular/core';
import { Actor } from 'models/actor.model';
import { apiURL as BASE_API_URL } from 'settings/setting';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ActorService {

  private ACTOR_API = `${BASE_API_URL}/actor`;

  constructor(
    private http: HttpClient,
  ) { }

  getBy = async ( key?: string, value?: string ): Promise<Actor[]> => {
		const url = `${ this.ACTOR_API }${ ( !!key && !!value ) ? '/' + key + '/' + value : '' }`;
		const result = await this.http.get<any>( url ).toPromise();
		return <Actor[]>result.data;

  }

  public createActor = async ( actor: Actor ) => {
		try {
			const url = `${ this.ACTOR_API }/createActor`;
      const result = await this.http.post<any>( url, actor ).toPromise();
      return <Actor[]>result.data;
		} catch ( err ) {
      console.error( err );
      throw err;
		}
  }

  public updateActor = async ( actor: Actor ) => {
		try {
			const url = `${ this.ACTOR_API }/updateActor`;
      const result = await this.http.put<any>( url, actor ).toPromise();
      return <Actor[]>result.data;
		} catch ( err ) {
      console.error( err );
      throw err;
		}
  }
  

}
