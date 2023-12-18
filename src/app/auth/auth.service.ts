import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn :'root'
})

export class AuthService{

  private baseUrl: string = "https://localhost:7178/api/User/"
    user: any;
    userObj: any;
  constructor(private http: HttpClient){}

  signUp(email: string, password: string){
    return this.http.post<any>(`${this.baseUrl}SignUp`,{
      email: email,
      password: password
    }).pipe(
      catchError(this.handleError))
  }

  logIn(email: string, password: string){
    return this.http.post<any>(`${this.baseUrl}LogIn`,{
      email: email,
      password: password

    }).pipe(
      catchError(this.handleError))
  }

  private handleError(errorRes: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';
    if (!errorRes.error || !errorRes.error.error) {
      return throwError(errorMessage);
    }
    switch (errorRes.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'This email exists already';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage = 'This email does not exist.';
        break;
      case 'INVALID_PASSWORD':
        errorMessage = 'This password is not correct.';
        break;
    }
    return throwError(errorMessage);
  }


} 