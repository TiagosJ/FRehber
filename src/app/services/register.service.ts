import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AlertifyService } from './alertify.service';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor(
    private httpClient: HttpClient,
    private alertifyService: AlertifyService,
    private router: Router,
    private authService: AuthService
  ) {}

  path = 'https://localhost:44365/api/';

  addUser(newUser) {
    
    this.httpClient.post(this.path + 'auth/register', newUser).subscribe(
      (data) => {
        this.alertifyService.success('Kullanıcı başarıyla eklendi.');
        this.authService.login(newUser);
        this.router.navigateByUrl('/city');
      },
      (error) => {
        this.alertifyService.error('Kullanıcı Adı Zaten Alınmış.');
      }
    );
  }
}
