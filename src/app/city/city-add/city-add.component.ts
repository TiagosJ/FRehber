import { Component, OnInit } from '@angular/core';
import { CityService } from 'app/services/city.service';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { City } from 'app/models/city';
import { AuthService } from 'app/services/auth.service';
import { Editor } from 'ngx-editor';

@Component({
  selector: 'app-city-add',
  templateUrl: './city-add.component.html',
  styleUrls: ['./city-add.component.css'],
  providers: [CityService],
})
export class CityAddComponent implements OnInit {
  constructor(
    private cityService: CityService,
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {}

  city: City;
  cityAddForm: FormGroup;
  editor : Editor;

  createCityForm() {
    this.cityAddForm = this.formBuilder.group({
      name: ['', Validators.required],
      subject:['', Validators.required],
      description: ['',Validators.required],
    });
  }

  ngOnInit() {
    this.createCityForm();
    this.editor = new Editor();
  }
  add() {
    if (this.cityAddForm.valid) {
      //debugger;
      this.city = Object.assign({}, this.cityAddForm.value); //klasik jv obje mapping
      this.city.userId = this.authService.getCurrentUserId();
      this.cityService.add(this.city); //bu şehirin user'ı kim
    }
  }
  ngOnDestroy(){
    this.editor.destroy();
  }
}
