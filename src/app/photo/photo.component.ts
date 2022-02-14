import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { AlertifyService } from 'app/services/alertify.service';
import { AuthService } from 'app/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Photo } from 'app/models/photo';
import { image } from 'ngx-editor/schema/nodes';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css'],
})
export class PhotoComponent implements OnInit {
  constructor(
    private AuthService: AuthService,
    private alertifyService: AlertifyService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  photos: Photo[] = [];
  uploader: FileUploader; //genel kullanım
  hasBaseDropZoneOver = false; //genel kullanım
  baseUrl = 'https://localhost:44365/api/';
  currentMain: Photo;
  currentCity: any; //uploader ile çalıstıgımız için genel kullanım

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.currentCity = params['cityId'];
    });
    this.initializeUploader();
  }

  initializeUploader() {
    this.uploader = new FileUploader({
      url: this.baseUrl + 'cities/' + this.currentCity + '/photos',
      authToken: 'Bearer ' + localStorage.getItem('token'),
      isHTML5: true,
      allowedFileType: ['image'],
      autoUpload: false,
      removeAfterUpload: true,
      maxFileSize: 10 * 1024 * 1024,
    }); //uploader özellikleri
    this.uploader.onSuccessItem = (item, response, status, headers) =>  {
      //debugger;
      if (response) {
        const res: Photo = JSON.parse(response);
        const photo = {
          id: res.id,
          cityId: res.cityId,
          dateAdded: res.dateAdded,
          description: res.description,
          isMain: res.isMain,
          url: res.url,
        };
        this.photos.push(photo);
        let redirectUrl = '/cityDetail/' + this.currentCity;
        this.redirectTo(redirectUrl);
        this.alertifyService.success('Fotoğraf başarıyla eklendi.');
      }
    };
    this.uploader.onErrorItem=()=>{
      this.alertifyService.error('Yetkiniz yok.');
    }
  }

  redirectTo(uri:string){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate([uri]));
 }
}



/*          <div ng2FileDrop
               [ngClass]="{'nv-file-over': hasBaseDropZoneOver}"
               (fileOver)="fileOverBase($event)"
               [uploader]="uploader"
               class="well my-drop-zone">
              Base drop zone
          </div>

          <div ng2FileDrop
               [ngClass]="{'another-file-over-class': hasAnotherDropZoneOver}"
               (fileOver)="fileOverAnother($event)"
               [uploader]="uploader"
               class="well my-drop-zone">
              Another drop zone
          </div>*/