import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { getDefaultJwt, Jwt } from 'models/jwt.model';
import { apiURL as BASE_API_URL, jwtTokenConfig } from 'settings/setting';
import jwt_decode from 'jwt-decode';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private AUTH_API = `${BASE_API_URL}/auth`;
  public nullJwt = getDefaultJwt();
  public currentUserData: BehaviorSubject<Jwt> = new BehaviorSubject(this.nullJwt);
  public isActive = new BehaviorSubject(false);
  public user: Jwt = this.nullJwt;

  constructor(
    private http: HttpClient,
  ) { }

  public signInUser = async ( email: string, pass: string ): Promise<Jwt> => {
		if ( !email || !pass ) return this.nullJwt;
		try {
			// do check email and pass in backend
			const jwtData = await this.http.post<any>( this.AUTH_API, { email, password: pass } ).toPromise();
			const decodedToken = <Jwt> jwt_decode( jwtData.token || '' );
			decodedToken.token = jwtData.token || '';
			localStorage.setItem( jwtTokenConfig.storagePathUI, JSON.stringify( decodedToken ) );
			this.currentUserData.next( decodedToken );
			this.isActive.next( true );
			this.user = decodedToken;
			return decodedToken;
		} catch ( error ) {
			this.signOutUser();
			throw error;
		}
	}

  public signInAndSendEmailVerification = async ( email: string, password: string ) => {
		if ( !email || !password ) return false;
		try {
			const jwtData = (await this.http.post<any>( `${ this.AUTH_API }/verified`, { email, password } ).toPromise()).data;
			const decodedToken = <Jwt> jwt_decode( jwtData.token || '' );
			decodedToken.token = jwtData.token || '';
			localStorage.setItem( jwtTokenConfig.storagePathUI, JSON.stringify( decodedToken ) );
			await this.sendEmailVerification( email, decodedToken.uid );
			localStorage.removeItem( jwtTokenConfig.storagePathUI );
			this.currentUserData.next( this.nullJwt );
			this.isActive.next( false );
			this.user = this.nullJwt;
			return true;
		} catch ( error ) {
			localStorage.removeItem( jwtTokenConfig.storagePathUI );
			console.error( error );
			return false;
		}
	}

  public signOutUser = async () => {
    try {
      this.currentUserData.next(this.nullJwt);
      this.isActive.next(false);
      this.user = this.nullJwt;
      localStorage.removeItem(jwtTokenConfig.storagePathUI);
    } catch (error) {
      console.error(error);
    }
  }

  public verifyUserToken = async () => {
    try {
      const locallyStoredUser = localStorage.getItem(jwtTokenConfig.storagePathUI);
      if (locallyStoredUser) {
        const userData = JSON.parse(locallyStoredUser);
        if (userData) {
          this.currentUserData.next(userData);
          this.isActive.next(true);
          this.user = userData;
          return true;
        }
        return false;
      } else {
        this.currentUserData.next(this.nullJwt);
        this.isActive.next(false);
        this.user = this.nullJwt;
        return false;
      }
    } catch (error) {
      localStorage.removeItem(jwtTokenConfig.storagePathUI);
      console.error(error);
      this.signOutUser();
      return false;
    }

  }

  public sendEmailVerification = async ( email: string, uid: string ) => {
		await this.http.post( `${ BASE_API_URL }/emailVerify/send`, { email, id: uid } ).toPromise();
  }
  
}
