import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUser } from '../models/loginUser';
import { RegisterUser } from '../models/registerUser';
import { AlertifyService } from './alertify.service';
import { JwtHelper, tokenNotExpired } from 'angular2-jwt';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private alertifyService: AlertifyService
  ) {}
  path = 'https://localhost:44365/api/auth/';
  userToken: any;
  decodedToken: any;
  jwtHelper: JwtHelper = new JwtHelper();
  TOKEN_KEY = 'token';
  registeredUser: RegisterUser = new RegisterUser();

  login(loginUser: LoginUser) {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    this.httpClient
      .post(this.path + 'login', loginUser, {
        headers: headers,
        responseType: 'text',
      })
      .subscribe(
        (data) => {
          this.saveToken(data);
          this.userToken = data;
          this.decodedToken = this.jwtHelper.decodeToken(data.toString());
          this.alertifyService.success('Sisteme giriş yapıldı');
          this.router.navigateByUrl('/city');
        },
        (error) => {
          this.alertifyService.error('Kullanıcı adı veya şifre hatalı.');
        }
      );
  }

  register(registerUser: RegisterUser) {
    //debugger;
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    this.httpClient
      .post(this.path + 'register', registerUser, { headers: headers })
      .subscribe((data) => {});
  }

  saveToken(token) {
    localStorage.setItem(this.TOKEN_KEY, token);
    this.getCurrentUserInfo();
  }
  logOut() {
    localStorage.removeItem(this.TOKEN_KEY);
    this.alertifyService.error('Sistemden çıkış yapıldı');
  }
  loggedIn() {
    return tokenNotExpired(this.TOKEN_KEY);
  }
  getToken() {
    return localStorage.getItem(this.TOKEN_KEY) ?? '';
  }
  getCurrentUserId() {
    if (this.getToken() === '') {
      return 0;
    } else return this.jwtHelper.decodeToken(this.getToken()).nameid;
  }
  getCurrentUserInfo() {
    let userId = this.getCurrentUserId();
    if (userId > 0) {
      this.httpClient
        .get<any>(this.path + 'getUser/?userId=' + userId)
        .subscribe((data) => {
          this.registeredUser.firstName = data.firstName;
          this.registeredUser.surName = data.surName;
        });
    }
  }
}
